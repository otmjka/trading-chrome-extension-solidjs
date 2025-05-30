import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from '../services/cabal-clinet-sdk';
import { config } from './backgroundConfig';
import {
  BackgroundAppConfig,
  BackgroundMessages,
  CabalMessageType,
} from './enums';
import { CabalMessage } from './types';
const max_attempts = 1;
class BackgroundApp {
  reconnectTimeout: number | undefined;
  cabal: CabalService | null;
  cleanup: undefined | (() => void);
  eventDict: Record<string, (arg: any) => void> = {};
  isUserActivityConnected: boolean = false;
  isTradeConnected: boolean = false;
  isReady: boolean = false;
  activeTab: number | null;
  listeners: Array<number> = [];
  reconnectAttempt = 0;

  constructor() {
    this.cabal = null;
    this.activeTab = null;

    this.handleUserActivityConnected =
      this.handleUserActivityConnected.bind(this);
    this.handleUserActivityPong = this.handleUserActivityPong.bind(this);
    this.handleUAError = this.handleUAError.bind(this);

    // trades
    this.handleTradeStreamConnected =
      this.handleTradeStreamConnected.bind(this);
    this.handleTradeStreamPong = this.handleTradeStreamPong.bind(this);
    this.handleTradeError = this.handleTradeError.bind(this);

    this.eventDict = {
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

    // chrome Events
    this.handleMessagesToBackground =
      this.handleMessagesToBackground.bind(this);

    this.changeTab = this.changeTab.bind(this);

    chrome.runtime.onMessage.addListener(this.handleMessagesToBackground);

    chrome.tabs.onActivated.addListener(this.changeTab);
  }

  handleMessagesToBackground(
    message: any,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void,
  ) {
    switch (message.type) {
      case BackgroundMessages.INIT_CABAL:
        this.initCabalOnTab({ sendResponse });
        break;
      default:
        console.log(`no handler for event ${message.type}`);
        break;
    }
  }

  initCabalOnTab({ sendResponse }: { sendResponse: (response?: any) => void }) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0]?.id;
      console.log('### INIT_CABAL ###', tabId);
      if (!tabId) {
        return;
      }
      this.activeTab = tabId;
      this.listeners.push(tabId);
    });

    sendResponse({ status: 'online' });
    return true;
  }

  changeTab(activeInfo: chrome.tabs.TabActiveInfo) {
    console.log('Активная вкладка сменилась. ID вкладки:', activeInfo.tabId);

    if (this.listeners.includes(activeInfo.tabId)) {
      this.activeTab = activeInfo.tabId;
    }

    chrome.tabs.get(activeInfo.tabId, function (tab) {
      console.log('URL новой активной вкладки:', tab.url);
    });
  }

  start() {
    this.initializeCabalService();
    chrome.runtime.onSuspend.addListener(() => this.destoryCabal());
  }

  destoryCabal() {
    this.isUserActivityConnected = false;
    this.isTradeConnected = false;
    this.isReady = false;

    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }
    if (!this.cabal) {
      return;
    }
    this.unsubscribe();
    this.cabal.stop();
    this.cabal = null;
  }

  initializeCabalService() {
    console.log('initializeCabalService');
    this.destoryCabal();

    if (!config.apiKey) {
      console.error('no Apikey');
      return;
    }
    this.cabal = new CabalService({
      apiKey: config.apiKey,
      apiUrl: config.apiUrl,
    });

    this.subscribe();
    this.cabal.start();
  }

  scheduleReconnect() {
    this.destoryCabal();
    this.reconnectAttempt = this.reconnectAttempt + 1;
    console.log('$$$', this.reconnectAttempt);
    if (this.reconnectAttempt > max_attempts) {
      console.log('maximum attemps');
      return;
    }
    // Schedule reconnect
    this.reconnectTimeout = setTimeout(() => {
      console.log('Attempting to reconnect...');
      this.initializeCabalService();
    }, BackgroundAppConfig.reconnectTimeout);
  }

  unsubscribe() {
    if (!this.cabal) {
      return;
    }
    for (let [eventName, eventHandler] of Object.entries(this.eventDict)) {
      this.cabal.off(eventName, eventHandler);
    }
  }

  subscribe() {
    if (!this.cabal) {
      return;
    }
    for (let [eventName, eventHandler] of Object.entries(this.eventDict)) {
      this.cabal.on(eventName, eventHandler);
    }
  }

  sendMessageToActiveTab(message: CabalMessage) {
    if (!this.activeTab) {
      console.error('no active tab');
      return;
    }
    chrome.tabs.sendMessage(this.activeTab, message, (response) => {
      if (chrome.runtime.lastError) {
        console.error(
          'Error sending message:',
          chrome.runtime.lastError.message,
        );
      } else {
        console.log('Message sent to active tab:', message);
      }
    });
  }

  checkConnectionStatus() {
    if (this.isUserActivityConnected && this.isTradeConnected) {
      this.isReady = true;
      console.log('Both streams connected successfully');
      // Additional logic for successful connection if needed
    }
  }

  handleUserActivityConnected() {
    console.info('UA CONNECTED');
    this.isUserActivityConnected = true;
    this.checkConnectionStatus();

    this.sendMessageToActiveTab({
      type: CabalMessageType.CabalEvent,
      eventName: CabalUserActivityStreamMessages.userActivityConnected,
    });
  }

  handleUserActivityPong = (eventValue: UserResponse) => {
    this.sendMessageToActiveTab({
      type: CabalMessageType.CabalEvent,
      eventName: CabalUserActivityStreamMessages.userActivityPong,
      data: { count: eventValue.count.count.toString(), isReady: this.isReady },
    });
  };

  handleUAError() {
    console.error('User Activity Stream Error');
    this.scheduleReconnect(); // destroy inside
    this.sendMessageToActiveTab({
      type: CabalMessageType.CabalEvent,
      eventName: CabalUserActivityStreamMessages.userActivityError,
    });
  }

  // trades

  handleTradeStreamConnected() {
    this.isTradeConnected = true;
    this.checkConnectionStatus();
    this.sendMessageToActiveTab({
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tradeConnected,
    });
  }

  handleTradeStreamPong(eventValue: UserResponse) {
    this.sendMessageToActiveTab({
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tradePong,
      data: { count: eventValue.count.count.toString(), isReady },
    });
  }

  handleTradeError() {
    console.error('Trade Stream Error');
    this.scheduleReconnect(); // destroy inside
    this.sendMessageToActiveTab({
      type: CabalMessageType.CabalEvent,
      eventName: CabalTradeStreamMessages.tradeError,
    });
  }
}

export default BackgroundApp;
