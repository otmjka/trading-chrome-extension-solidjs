import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from '../services/cabal-clinet-sdk';
import { config } from './backgroundConfig';
import CabalStorage from './CabalStorage';
import { sendMessageToActiveTab } from './helpers/sendMessageToActiveTab';
import { getTabListenerState } from './helpers/stateHandlers/getTabListenerState';
import { setActiveTabByIdState } from './helpers/stateHandlers/setActiveTabByIdState';
import { setActiveTabState } from './helpers/stateHandlers/setActiveTabState';
import { setIsReadyState } from './helpers/stateHandlers/setIsReadyState';
import { subscribeTokenState } from './helpers/stateHandlers/subscribeTokenState';
import { BackgroundState } from './types';
import * as messagesToContent from './helpers/messagesToContent';
import { ConnectError } from '@connectrpc/connect';
import { CabalStreamErrors } from '../services/cabal-clinet-sdk/CabalStream';

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

  setIsReady: setIsReadyState,
};

state.subscribeToken = state.subscribeToken.bind(state);
state.getActiveTab = state.getActiveTab.bind(state);
state.setActiveTab = state.setActiveTab.bind(state);
state.getTabListener = state.getTabListener.bind(state);
state.setActiveTabById = state.setActiveTabById.bind(state);

state.setIsReady = state.setIsReady.bind(state);

class CabalConnector {
  cabal: CabalService | null = null;

  constructor() {
    this.scheduleReconnect = this.scheduleReconnect.bind(this);
    this.initializeCabalService = this.initializeCabalService.bind(this);
    this.cleanCabalService = this.cleanCabalService.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.eventDict = this.eventDict.bind(this);
    this.checkConnectionStatus = this.checkConnectionStatus.bind(this);

    this.handleUserActivityConnected =
      this.handleUserActivityConnected.bind(this);
    this.handleUserActivityPong = this.handleUserActivityPong.bind(this);
    this.handleUAError = this.handleUAError.bind(this);
    this.handleTradeStreamConnected =
      this.handleTradeStreamConnected.bind(this);
    this.handleTradeStreamPong = this.handleTradeStreamPong.bind(this);
    this.handleTradeError = this.handleTradeError.bind(this);
  }

  scheduleReconnect() {
    this.cleanCabalService();

    // Schedule reconnect
    state.reconnectTimeout = setTimeout(() => {
      console.log('Attempting to reconnect...');
      this.initializeCabalService();
    }, config.reconnectTimeout);
  }

  async initializeCabalService() {
    try {
      state.apiKey = '2jaUfUpLFJorLTgMLbGKPz88KEeJstYucei3RuxM5h4V';
      console.log('initializeCabalService', state.apiKey);

      this.cleanCabalService();

      // const apiKey = await state.cabalStorage.getApiKey();
      // state.apiKey = apiKey.apiKey;
      console.log('###', state.apiKey);

      if (!state.apiKey) {
        console.log('no api key');
        return;
      }
      this.cabal = new CabalService({
        apiKey: state.apiKey,
        apiUrl: config.apiUrl,
      });

      this.subscribe();
      this.cabal.start();
    } catch (error) {
      console.error(`initializeCabalService`, error);
    }
  }

  cleanCabalService() {
    try {
      state.isReady = false;
      // Clear any existing reconnect timeout
      if (state.reconnectTimeout) {
        clearTimeout(state.reconnectTimeout);
      }

      // Reset connection flags
      state.isUserActivityConnected = false;
      state.isTradeConnected = false;

      if (this.cabal) {
        this.unsubscribe();
        this.cabal.stop();
        this.cabal = null;
      }
      // TODO: replace
      sendMessageToActiveTab({
        state,
        message: messagesToContent.readyStatus({ state }),
      });
    } catch (error) {
      console.error(`cleanCabalService`, error);
    }
  }

  subscribe() {
    if (!this.cabal) {
      console.log('no cabal instance');
      return;
    }
    for (let [eventName, eventHandler] of Object.entries(this.eventDict())) {
      this.cabal.on(eventName, eventHandler);
    }
  }

  unsubscribe() {
    if (!this.cabal) {
      console.log('no cabal instance');
      return;
    }
    for (let [eventName, eventHandler] of Object.entries(this.eventDict())) {
      this.cabal.off(eventName, eventHandler);
    }
  }

  checkConnectionStatus() {
    if (state.isUserActivityConnected && state.isTradeConnected) {
      state.setIsReady(true);
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

  eventDict() {
    return {
      [CabalUserActivityStreamMessages.userActivityConnected]:
        this.handleUserActivityConnected,
      [CabalUserActivityStreamMessages.userActivityPong]:
        this.handleUserActivityPong,
      [CabalUserActivityStreamMessages.userActivityError]: this.handleUAError,

      // trade streams
      [CabalTradeStreamMessages.tradeConnected]:
        this.handleTradeStreamConnected,
      [CabalTradeStreamMessages.tradePong]: this.handleTradeStreamPong,

      [CabalTradeStreamMessages.tradeError]: this.handleTradeError,
    };
  }

  handleUserActivityConnected() {
    if (config.showUAConnected) {
      console.log('UA CONNECTED');
    }
    state.isUserActivityConnected = true;
    this.checkConnectionStatus();
  }

  handleUserActivityPong(eventValue: UserResponse) {
    try {
      console.log('------handleUserActivityPong', eventValue);
      sendMessageToActiveTab({
        state,
        message: messagesToContent.pongUA({ state, eventValue }),
      });
    } catch (error) {
      console.error('error in handleUserActivityPong', error);
    }
  }

  async handleUAError(error: Error) {
    console.error('User Activity Stream Error', error);
    if (
      error instanceof ConnectError &&
      error.rawMessage === CabalStreamErrors.BadAuth
    ) {
      await state.cabalStorage.setApiKey({ apiKey: null });
    } else {
      this.scheduleReconnect();
    }
    console.log('state::::', state);
    sendMessageToActiveTab({
      state,
      message: messagesToContent.errorUA({ state }),
    });
  }

  handleTradeStreamConnected() {
    if (config.showTradesConnected) {
      console.log('Trades CONNECTED');
    }
    state.isTradeConnected = true;
    this.checkConnectionStatus();
    sendMessageToActiveTab({
      state,
      message: messagesToContent.tradesConnected({ state }),
    });
  }

  handleTradeStreamPong(eventValue: UserResponse) {
    const message = messagesToContent.pongTrades({ state, eventValue });
    sendMessageToActiveTab({ state, message });
  }

  handleTradeError = () => {
    console.error('Trade Stream Error');
    this.scheduleReconnect();
    const message = messagesToContent.tradeError({ state });
    sendMessageToActiveTab({ state, message });
  };
}

export default CabalConnector;
