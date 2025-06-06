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

import { handleMessagesToBackground } from './background/helpers/handleMessagesToBackground';
import { changeTab } from './background/helpers/changeTab';
import { sendMessageToActiveTab } from './background/helpers/sendMessageToActiveTab';
import { BackgroundState } from './background/types';
import CabalStorage from './background/CabalStorage';
import * as messagesToContent from './background/helpers/messagesToContent';
import { LandedTxnState } from './services/cabal-clinet-sdk/cabal/CabalRpc/txncb_pb';
import { subscribeTokenState } from './background/helpers/stateHandlers/subscribeTokenState';
import { setActiveTabState } from './background/helpers/stateHandlers/setActiveTabState';
import { getTabListenerState } from './background/helpers/stateHandlers/getTabListenerState';
import { setActiveTabByIdState } from './background/helpers/stateHandlers/setActiveTabByIdState';
import { CabalStreamErrors } from './services/cabal-clinet-sdk/CabalStream';
import { ConnectError } from '@connectrpc/connect';

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
  subscribeToken: subscribeTokenState,
  getActiveTab: function () {
    return this.activeTab;
  },
  setActiveTab: setActiveTabState,
  setActiveTabById: setActiveTabByIdState,
  getTabListener: getTabListenerState,
};

state.subscribeToken = state.subscribeToken.bind(state);
state.getActiveTab = state.getActiveTab.bind(state);
state.setActiveTab = state.setActiveTab.bind(state);
state.getTabListener = state.getTabListener.bind(state);
state.setActiveTabById = state.setActiveTabById.bind(state);

const getIsReady = () => state.isReady;
const cabalInstance = () => state.cabal;
const setCabalInstance = (value: CabalService | null) => (state.cabal = value);
const setActiveTab = (newActiveTab: number) => {
  state.activeTab = newActiveTab;
};
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
    console.log('------handleUserActivityPong', eventValue);
    sendMessageToActiveTab({
      state,
      message: messagesToContent.pongUA({ state, eventValue }),
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

    sendMessageToActiveTab({
      state,
      message: messagesToContent.tradeStatsUA({ event, state }),
    });
  } catch (error) {
    console.error(`error in handleUserActivityTradeStats`, error);
  }
};

const handleUAtxnCB = (event: { case: string; value: LandedTxnState }) => {
  try {
    console.log('#### #### #### handleUAtxnCB', event);
    const message = messagesToContent.txnCB({ event, state });
    console.log('#### #### #### handleUAtxnCB-message', message);
    if (!message) {
      throw new Error('message cant parsed');
    }
    sendMessageToActiveTab({
      state,
      message,
    });
  } catch (error) {
    console.error(`error in handleUserActivityTradeStats`, error);
  }
};

const handleUAError = async (error: Error) => {
  console.error('User Activity Stream Error', error);
  if (
    error instanceof ConnectError &&
    error.rawMessage === CabalStreamErrors.BadAuth
  ) {
    await state.cabalStorage.setApiKey({ apiKey: null });
  } else {
    scheduleReconnect();
  }
  console.log('state::::', state);
  sendMessageToActiveTab({
    state,
    message: messagesToContent.errorUA({ state }),
  });
};

// Trades

const handleTradeStreamConnected = () => {
  if (config.showTradesConnected) {
    console.log('Trades CONNECTED');
  }
  state.isTradeConnected = true;
  checkConnectionStatus();
  sendMessageToActiveTab({
    state,
    message: messagesToContent.tradesConnected({ state }),
  });
};

const handleTradeStreamPong = (eventValue: UserResponse) => {
  const message = messagesToContent.pongTrades({ state, eventValue });
  sendMessageToActiveTab({ state, message });
};

const handleTradeTokenStatus = (eventValue: {
  value: { value: TokenStatus };
}) => {
  try {
    if (config.showTokenStatus) {
      console.log('handleTradeTokenStatus', eventValue);
    }
    const message = messagesToContent.tradeTokenStates({ state, eventValue });
    sendMessageToActiveTab({ state, message });
  } catch (error) {
    console.error(`error in handleTradeTokenStatus`, error);
  }
};

const handleTradeEvent = (eventValue: TradeEvent) => {
  try {
    const message = messagesToContent.tradeEvent({ state, eventValue });
    sendMessageToActiveTab({ state, message });
  } catch (error) {
    console.error(`error in handleTradeEvent`, error);
  }
};

const handleTradeError = () => {
  console.error('Trade Stream Error');
  scheduleReconnect();
  const message = messagesToContent.tradeError({ state });
  sendMessageToActiveTab({ state, message });
};

const eventDict = {
  [CabalUserActivityStreamMessages.userActivityConnected]:
    handleUserActivityConnected,
  [CabalUserActivityStreamMessages.userActivityPong]: handleUserActivityPong,
  [CabalUserActivityStreamMessages.tradeStats]: handleUserActivityTradeStats,
  [CabalUserActivityStreamMessages.txnCb]: handleUAtxnCB,
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
    if (config.showStreamConnected) {
      console.log('Both streams connected successfully');
    }
    sendMessageToActiveTab({
      state,
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
      state,
      message: messagesToContent.readyStatus({ state }),
    });
  } catch (error) {
    console.error(`cleanCabalService`, error);
  }
};

const initializeCabalService = () => {
  try {
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
  } catch (error) {
    console.error(`initializeCabalService`, error);
  }
};

function scheduleReconnect() {
  cleanCabalService();

  // Schedule reconnect
  state.reconnectTimeout = setTimeout(() => {
    console.log('Attempting to reconnect...');
    initializeCabalService();
  }, config.reconnectTimeout);
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
    state,
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

      if (!state.apiKey) {
        cleanCabalService();
      }
      // initializeCabalService();
      // Дополнительная логика, например, обновление настроек API
    }
  });
  initializeCabalService();
};
startApp();
// Optional: Handle extension suspension/unload
