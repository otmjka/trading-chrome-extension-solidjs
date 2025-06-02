import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  TokenStatus,
  TokenTradeStats,
  TradeEvent,
  UserResponse,
} from './services/cabal-clinet-sdk';
import { config } from './background/backgroundConfig';
import { BackgroundAppConfig } from './background/enums';
import { ContentListeners } from './background/types';
import {
  CabalMessageType,
  FromBackgroundMessageTradeError,
  FromBackgroundMessageTradeEvent,
  FromBackgroundMessageTradeTokenStatus,
  Mint,
} from './shared/types';
import {
  parseTokenStatus,
  parseTradeEvent,
  parseTradeStats,
} from './background/helpers/cabalEventsToContentPayload';
import { handleMessagesToBackground } from './background/helpers/handleMessagesToBackground';
import { changeTab } from './background/helpers/changeTab';
import { sendMessageToActiveTab } from './background/helpers/sendMessageToActiveTab';

console.log('start background service 5');

let cabal: CabalService | null = null;
let isUserActivityConnected = false;
let isTradeConnected = false;
let isReady = false;
let reconnectTimeout: number | undefined = undefined;

const getIsReady = () => isReady;
const cabalInstance = () => cabal;
const setCabalInstance = (value: CabalService | null) => (cabal = value);

let activeTab: number | undefined;
const listeners: ContentListeners = [];

const getListeners = () => listeners;
const setActiveTab = (newActiveTab: number) => {
  activeTab = newActiveTab;
};

const state: { mint: Mint | null } = {
  mint: null,
};

const setMint = (mint: string) => (state.mint = mint);
const getCurrentMint = () => state.mint;

const getActiveTab = () => activeTab;

// handleSellMarketMessage

const getListener = (tabId?: number) =>
  tabId ? listeners.find((item) => item.tabId === tabId) : undefined;

const messagesToBackgroundHandler = handleMessagesToBackground({
  getIsReady,
  getListener,
  getCabalInstance: cabalInstance,
  setActiveTab,
  getListeners,
});

const tabsOnActivatedHandler = changeTab({
  getListener,
  setActiveTab,
});

chrome.runtime.onMessage.addListener(messagesToBackgroundHandler);
chrome.tabs.onActivated.addListener(tabsOnActivatedHandler);

const handleUserActivityConnected = () => {
  if (config.showUAConnected) {
    console.log('UA CONNECTED');
  }
  isUserActivityConnected = true;
  checkConnectionStatus();
};

const handleUserActivityPong = (eventValue: UserResponse) => {
  try {
    sendMessageToActiveTab({
      getActiveTab,
      message: {
        type: CabalMessageType.CabalEvent,
        eventName: CabalUserActivityStreamMessages.userActivityPong,
        data: { count: eventValue.count.count.toString(), isReady },
      },
    });
  } catch (error) {
    console.error('error in handleUserActivityPong', error);
  }
};

const handleUserActivityTradeStats = (event: { value: TokenTradeStats }) => {
  try {
    if (config.showTradeStats) {
      console.log('handleUserActivityTradeStats', event);
    }

    const message = parseTradeStats(event);
    const mintMessage = message.data.mint;
    setMint(mintMessage);

    sendMessageToActiveTab({ getActiveTab, message });
  } catch (error) {
    console.error(`error in handleUserActivityTradeStats`, error);
  }
};

const handleUAError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  isReady = false;
  console.error('User Activity Stream Error');
  scheduleReconnect();
  sendMessageToActiveTab({
    getActiveTab,
    message: {
      type: CabalMessageType.CabalEvent,
      eventName: CabalUserActivityStreamMessages.userActivityError,
    },
  });
};

// Trades

const handleTradeStreamConnected = () => {
  isTradeConnected = true;
  checkConnectionStatus();
  sendMessageToActiveTab({
    getActiveTab,
    message: {
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tradeConnected,
    },
  });
};

const handleTradeStreamPong = (eventValue: UserResponse) => {
  sendMessageToActiveTab({
    getActiveTab,
    message: {
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tradePong,
      data: { count: eventValue.count.count.toString(), isReady },
    },
  });
};

const handleTradeTokenStatus = (eventValue: {
  value: { value: TokenStatus };
}) => {
  try {
    if (config.showTokenStatus) {
      console.log('handleTradeTokenStatus', eventValue);
    }
    const messagePayload = parseTokenStatus(eventValue);
    setMint(messagePayload.mint);
    const message: FromBackgroundMessageTradeTokenStatus = {
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tokenStatus,
      data: messagePayload,
    };

    sendMessageToActiveTab({ getActiveTab, message });
  } catch (error) {
    console.error(`error in handleTradeTokenStatus`, error);
  }
};

const handleTradeEvent = (eventValue: TradeEvent) => {
  try {
    const eventDataValue = parseTradeEvent({
      mint: getCurrentMint() || '!no mint!',
      cabalTradeEvent: eventValue,
    });
    if (!eventDataValue) {
      throw new Error('cant parse trade event', eventDataValue);
    }
    if (config.showTradeEventLog) {
      console.log('handleTradeEvent', eventDataValue);
    }
    const message: FromBackgroundMessageTradeEvent = {
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tradeEvent,
      data: eventDataValue,
    };

    sendMessageToActiveTab({ getActiveTab, message });
  } catch (error) {
    console.error(`error in handleTradeEvent`, error);
  }
};

const handleTradeError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  isReady = false;
  console.error('Trade Stream Error');
  scheduleReconnect();
  const message: FromBackgroundMessageTradeError = {
    type: CabalMessageType.CabalEvent,
    eventName: CabalTradeStreamMessages.tradeError,
  };
  sendMessageToActiveTab({ getActiveTab, message });
};

const eventDict = {
  [CabalUserActivityStreamMessages.userActivityConnected]:
    handleUserActivityConnected,
  [CabalUserActivityStreamMessages.userActivityPong]: handleUserActivityPong,
  [CabalUserActivityStreamMessages.tradeStats]: handleUserActivityTradeStats,
  [CabalUserActivityStreamMessages.userActivityError]: handleUAError,

  // trade streams
  [CabalTradeStreamMessages.tradeConnected]: handleTradeStreamConnected,
  [CabalTradeStreamMessages.tradePong]: handleTradeStreamPong,

  [CabalTradeStreamMessages.tokenStatus]: handleTradeTokenStatus,

  [CabalTradeStreamMessages.tradeEvent]: handleTradeEvent,
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
  }, BackgroundAppConfig.reconnectTimeout);
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
  console.log('### Sleep ###');
  cleanup();
});
