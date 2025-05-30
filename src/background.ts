import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from './services/cabal-clinet-sdk';
import { config } from './background/backgroundConfig';
import { BackgroundMessages } from './background/enums';

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
let isReady = false;
let reconnectTimeout: number | undefined = undefined;

const cabalInstance = () => cabal;
const setCabalInstance = (value: CabalService | null) => (cabal = value);

let activeTab: number | undefined;
const listeners: Array<{ tabId: number; url: string }> = [];

const handleMessagesToBackground = (
  message: any,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void,
) => {
  switch (message.type) {
    case BackgroundMessages.INIT_CABAL:
      initCabalOnTab({ sendResponse, message });
      break;
    default:
      console.log(`no handler for event ${message.type}`);
      break;
  }
};

const initCabalOnTab = ({
  sendResponse,
  message,
}: {
  sendResponse: (response?: any) => void;
  message: any;
}) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0]?.id;
    console.log('### INIT_CABAL ###', tabId, message.url);
    if (!tabId) {
      return;
    }
    activeTab = tabId;
    listeners.push({
      tabId,
      url: message.url,
    });
  });

  sendResponse({ isReady, url: message?.data?.url });
  return true;
};
const getListener = (tabId: number) =>
  listeners.find((item) => item.tabId === tabId);

const changeTab = (activeInfo: chrome.tabs.TabActiveInfo) => {
  console.log('Активная вкладка сменилась. ID вкладки:', activeInfo.tabId);

  const listener = getListener(activeInfo.tabId);
  if (!listener) {
    return;
  }
  activeTab = listener.tabId;

  chrome.tabs.get(activeInfo.tabId, function (tab) {
    console.log('URL новой активной вкладки:', tab.url);
    console.log('URL listener', listener.url);
  });
};

chrome.runtime.onMessage.addListener(handleMessagesToBackground);
chrome.tabs.onActivated.addListener(changeTab);

function sendMessageToActiveTab(message: CabalMessage) {
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
    data: { count: eventValue.count.count.toString(), isReady },
  });
};

const handleUAError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  isReady = false;
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
    data: { count: eventValue.count.count.toString(), isReady },
  });
};

const handleTradeError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  isReady = false;
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
    isReady = true;
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
