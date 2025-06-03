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
import {
  CabalCommonMessages,
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
import { BackgroundState } from './background/types';
import CabalStorage from './background/CabalStorage';
import * as messagesToContent from './background/helpers/messagesToContent';

console.log('start background service 5');

const state: BackgroundState = {
  cabal: null,
  isUserActivityConnected: false,
  isTradeConnected: false,
  isReady: false,
  reconnectTimeout: undefined,
  mint: null,
  activeTab: undefined,
  tabListeners: [],
  cabalStorage: new CabalStorage(),
  apiKey: null,
};

const getIsReady = () => state.isReady;
const cabalInstance = () => state.cabal;
const setCabalInstance = (value: CabalService | null) => (state.cabal = value);
const getListeners = () => state.tabListeners;
const setActiveTab = (newActiveTab: number) => {
  state.activeTab = newActiveTab;
};
const setMint = (mint: string) => (state.mint = mint);
const getCurrentMint = () => state.mint;
const getActiveTab = () => state.activeTab;
const getListener = (tabId?: number) =>
  tabId ? state.tabListeners.find((item) => item.tabId === tabId) : undefined;
const setIsReady = (value: boolean) => (state.isReady = value);

const handleUserActivityConnected = () => {
  if (config.showUAConnected) {
    console.log('UA CONNECTED');
  }
  state.isUserActivityConnected = true;
  checkConnectionStatus();
};

const handleUserActivityPong = (eventValue: UserResponse) => {
  try {
    sendMessageToActiveTab({
      getActiveTab,
      message: {
        type: CabalMessageType.CabalEvent,
        eventName: CabalUserActivityStreamMessages.userActivityPong,
        data: {
          count: eventValue.count.count.toString(),
          isReady: getIsReady(),
        },
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
  state.isTradeConnected = true;
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
      data: { count: eventValue.count.count.toString(), isReady: getIsReady() },
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
  if (state.isUserActivityConnected && state.isTradeConnected) {
    setIsReady(true);
    if (!config.showStreamConnected) {
      console.log('Both streams connected successfully');
    }
    sendMessageToActiveTab({
      getActiveTab,
      message: messagesToContent.readyStatus({ state }),
    });
    // Additional logic for successful connection if needed
  }
}

const cleanCabalService = () => {
  try {
    state.isReady = false;
    // Clear any existing reconnect timeout
    if (state.reconnectTimeout) {
      clearTimeout(state.reconnectTimeout);
    }

    // Reset connection flags
    state.isUserActivityConnected = false;
    state.isTradeConnected = false;
    const currentInstance = cabalInstance();

    if (currentInstance) {
      unsubscribe(currentInstance);
      currentInstance.stop();
      setCabalInstance(null);
    }
    // TODO: replace
    sendMessageToActiveTab({
      getActiveTab,
      message: messagesToContent.readyStatus({ state }),
    });
  } catch (error) {
    console.error(`cleanCabalService`, error);
  }
};

const initializeCabalService = () => {
  console.log('initializeCabalService', state.apiKey);

  cleanCabalService();

  if (state.apiKey) {
    const newCabal = new CabalService({
      apiKey: state.apiKey,
      apiUrl: config.apiUrl,
    });

    subscribe(newCabal);
    newCabal.start();
    setCabalInstance(newCabal);
  }
};

function scheduleReconnect() {
  cleanCabalService();

  // Schedule reconnect
  state.reconnectTimeout = setTimeout(() => {
    console.log('Attempting to reconnect...');
    initializeCabalService();
  }, BackgroundAppConfig.reconnectTimeout);
}

// Start the auto connector

const startApp = async () => {
  const apiKey = await state.cabalStorage.getApiKey();
  state.apiKey = apiKey.apiKey;
  console.log('###', apiKey.apiKey);
  const messagesToBackgroundHandler = handleMessagesToBackground({
    getIsReady,
    getListener,
    getCabalInstance: cabalInstance,
    setActiveTab,
    state: state,
  });

  const tabsOnActivatedHandler = changeTab({
    getListener,
    setActiveTab,
  });

  chrome.runtime.onMessage.addListener(messagesToBackgroundHandler);

  chrome.tabs.onActivated.addListener(tabsOnActivatedHandler);

  chrome.runtime.onInstalled.addListener(async (details) => {
    if (details.reason === 'install') {
      state.cabalStorage?.init();
    }
  });

  chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log('storage changes!');
    if (namespace === 'local' && changes.apiKey) {
      const newApiKey = changes.apiKey.newValue;
      console.log('API-ключ изменен:', newApiKey);
      state.apiKey = newApiKey;
      if (state.apiKey) {
        scheduleReconnect();
      }
      // initializeCabalService();
      // Дополнительная логика, например, обновление настроек API
    }
  });
  initializeCabalService();
};
startApp();
// Optional: Handle extension suspension/unload
