import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from './services/cabal-clinet-sdk';
import { config } from './background/backgroundConfig';

type CabalMessage = {
  type: string;
  eventName: string;
  data?: unknown;
};

enum CabalMessageType {
  CabalEvent = 'CABAL_EVENT',
}
console.log('start background service 5');

const TIMEOUT = 500;

let cabal: CabalService | null = null;

let isUserActivityConnected = false;
let isTradeConnected = false;
let reconnectTimeout: number | undefined = undefined;

const cabalInstance = () => cabal;
const setCabalInstance = (value: CabalService | null) => (cabal = value);

let activeTab: number | undefined;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'INIT_CABAL') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0]?.id;
      console.log('### INIT_CABAL ###', tabId);
      activeTab = tabId;
      // if (tabId) {
      //   setInterval(() => {
      //     chrome.tabs.sendMessage(tabId, {
      //       type: 'CABAL_EVENT',
      //       eventName: 'error',
      //       data: { connected: true },
      //     });
      //   }, 1000);
      // }
    });
    // }

    sendResponse({ status: 'online' });
    return true;
  }
});

// Функция для получения ID активной вкладки
// function getActiveTabId(callback: (tabId: number | undefined) => void) {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (tabs[0]) {
//       callback(tabs[0].id);
//     }
//   });
// }

// Функция для отправки сообщения активной вкладке
function sendMessageToActiveTab(message: CabalMessage) {
  // getActiveTabId((tabId) => {
  //   if (!tabId) {
  //     console.log('active tab is undefined');
  //     return;
  //   }
  //   chrome.tabs.sendMessage(tabId, message, (response) => {
  //     if (chrome.runtime.lastError) {
  //       console.error(
  //         'Error sending message:',
  //         chrome.runtime.lastError.message,
  //       );
  //     } else {
  //       console.log('Message sent to active tab:', message);
  //     }
  //   });
  // });

  // chrome.tabs.sendMessage(activeTab, {
  //         type: 'CABAL_EVENT',
  //         eventName: 'error',
  //         data: { connected: true },
  //       });
  if (!activeTab) {
    console.error('no active tab');
    return;
  }
  chrome.tabs.sendMessage(activeTab, message, (response) => {
    if (chrome.runtime.lastError) {
      console.error('Error sending message:', chrome.runtime.lastError.message);
    } else {
      console.log('Message sent to active tab:', message);
    }
  });
}

const handleUserActivityConnected = () => {
  console.info('UA CONNECTED');
  isUserActivityConnected = true;
  checkConnectionStatus();

  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalUserActivityStreamMessages.userActivityConnected,
  });
};

const handleUserActivityPong = (eventValue: UserResponse) => {
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalUserActivityStreamMessages.userActivityPong,
    data: (eventValue as unknown as { count: bigint }).count.toString(),
  });
};

const handleUAError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  console.error('User Activity Stream Error');
  scheduleReconnect();
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalUserActivityStreamMessages.userActivityError,
  });
};

// Trades

const handleTradeStreamConnected = () => {
  isTradeConnected = true;
  checkConnectionStatus();
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalTradeStreamMessages.tradeConnected,
  });
};

const handleTradeStreamPong = (eventValue: UserResponse) => {
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalTradeStreamMessages.tradePong,
    data: (eventValue as unknown as { count: bigint }).count.toString(),
  });
};

const handleTradeError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  console.error('Trade Stream Error');
  scheduleReconnect();
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalTradeStreamMessages.tradeError,
  });
};

const eventDict = {
  [CabalUserActivityStreamMessages.userActivityConnected]:
    handleUserActivityConnected,
  [CabalUserActivityStreamMessages.userActivityPong]: handleUserActivityPong,
  [CabalUserActivityStreamMessages.userActivityError]: handleUAError,

  // trade streams
  [CabalTradeStreamMessages.tradeConnected]: handleTradeStreamConnected,
  [CabalTradeStreamMessages.tradePong]: handleTradeStreamPong,
  [CabalTradeStreamMessages.tradeError]: handleTradeError,
};

const subscribe = (cabal: CabalService) => {
  for (let [eventName, eventHandler] of Object.entries(eventDict)) {
    cabal.on(eventName, eventHandler);
  }
};

const unsubscribe = (cabal: CabalService) => {
  for (let [eventName, eventHandler] of Object.entries(eventDict)) {
    cabal.off(eventName, eventHandler);
  }
};

function checkConnectionStatus() {
  if (isUserActivityConnected && isTradeConnected) {
    console.log('Both streams connected successfully');
    // Additional logic for successful connection if needed
  }
}

const initializeCabalService = () => {
  console.log('initializeCabalService');
  const currentInstance = cabalInstance();

  if (currentInstance) {
    unsubscribe(currentInstance);
    currentInstance.stop();
    setCabalInstance(null);
  }

  if (config.apiKey) {
    const newCabal = new CabalService({
      apiKey: config.apiKey,
      apiUrl: config.apiUrl,
    });

    subscribe(newCabal);
    newCabal.start();
    setCabalInstance(newCabal);
  }
};

function scheduleReconnect() {
  // Clear any existing reconnect timeout
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout);
  }

  // Reset connection flags
  isUserActivityConnected = false;
  isTradeConnected = false;

  // Schedule reconnect
  reconnectTimeout = setTimeout(() => {
    console.log('Attempting to reconnect...');
    initializeCabalService();
  }, TIMEOUT);
}

const autoConnector = () => {
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout);
  }

  // Initialize connection
  initializeCabalService();

  return () => {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
    }
    const currentInstance = cabalInstance();
    if (currentInstance) {
      unsubscribe(currentInstance);
      currentInstance.stop();
      setCabalInstance(null);
    }
  };
};

// Start the auto connector
const cleanup = autoConnector();

// Optional: Handle extension suspension/unload
chrome.runtime.onSuspend.addListener(() => {
  cleanup();
});

// new ConnectToCabalService()

// chrome.runtime.onMessage.addListener()
// <<<- принимаем
/*
// type: subscribe token


когда
при появлении 
при изменении урла
при явной смене токена


// show
возобновляем посылку событий

// hide
останавливаем посылку событий
// close



*/
