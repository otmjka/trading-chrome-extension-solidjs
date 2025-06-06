import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from '../services/cabal-clinet-sdk';
import { config } from './backgroundConfig';
import { sendMessageToActiveTab } from './helpers/sendMessageToActiveTab';

import * as messagesToContent from './helpers/messagesToContent';
import { ConnectError } from '@connectrpc/connect';
import { CabalStreamErrors } from '../services/cabal-clinet-sdk/CabalStream';
import { BackgroundState } from './types';

class CabalConnector {
  cabal: CabalService | null = null;
  state: BackgroundState;
  constructor({ state }: { state: BackgroundState }) {
    this.state = state;
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
    this.state.reconnectTimeout = setTimeout(() => {
      console.log('Attempting to reconnect...');
      this.initializeCabalService();
    }, config.reconnectTimeout);
  }

  async initializeCabalService() {
    try {
      console.log('initializeCabalService', this.state.apiKey);

      this.cleanCabalService();

      // const apiKey = await state.cabalStorage.getApiKey();
      // state.apiKey = apiKey.apiKey;
      console.log('###', this.state.apiKey);

      if (!this.state.apiKey) {
        console.log('no api key');
        return;
      }
      this.cabal = new CabalService({
        apiKey: this.state.apiKey,
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
      this.state.isReady = false;
      // Clear any existing reconnect timeout
      if (this.state.reconnectTimeout) {
        clearTimeout(this.state.reconnectTimeout);
      }

      // Reset connection flags
      this.state.isUserActivityConnected = false;
      this.state.isTradeConnected = false;

      if (this.cabal) {
        this.unsubscribe();
        this.cabal.stop();
        this.cabal = null;
      }
      // TODO: replace
      sendMessageToActiveTab({
        state: this.state,
        message: messagesToContent.readyStatus({ state: this.state }),
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
    if (this.state.isUserActivityConnected && this.state.isTradeConnected) {
      this.state.setIsReady(true);
      if (config.showStreamConnected) {
        console.log('Both streams connected successfully');
      }
      sendMessageToActiveTab({
        state: this.state,
        message: messagesToContent.readyStatus({ state: this.state }),
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
    this.state.isUserActivityConnected = true;
    this.checkConnectionStatus();
  }

  handleUserActivityPong(eventValue: UserResponse) {
    try {
      console.log('------handleUserActivityPong', eventValue);
      sendMessageToActiveTab({
        state: this.state,
        message: messagesToContent.pongUA({ state: this.state, eventValue }),
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
      await this.state.cabalStorage.setApiKey({ apiKey: null });
    } else {
      this.scheduleReconnect();
    }
    console.log('state::::', this.state);
    sendMessageToActiveTab({
      state: this.state,
      message: messagesToContent.errorUA({ state: this.state }),
    });
  }

  handleTradeStreamConnected() {
    if (config.showTradesConnected) {
      console.log('Trades CONNECTED');
    }
    this.state.isTradeConnected = true;
    this.checkConnectionStatus();
    sendMessageToActiveTab({
      state: this.state,
      message: messagesToContent.tradesConnected({ state: this.state }),
    });
  }

  handleTradeStreamPong(eventValue: UserResponse) {
    const message = messagesToContent.pongTrades({
      state: this.state,
      eventValue,
    });
    sendMessageToActiveTab({ state: this.state, message });
  }

  handleTradeError = () => {
    console.error('Trade Stream Error');
    this.scheduleReconnect();
    const message = messagesToContent.tradeError({ state: this.state });
    sendMessageToActiveTab({ state: this.state, message });
  };
}

export default CabalConnector;
