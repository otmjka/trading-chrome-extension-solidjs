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
import { queryActiveTab } from './background/helpers/queryActiveTab';
import { ContentListeners } from './background/types';
import { initCabalOnTab } from './background/helpers/initCabalOnTab';
import {
  BackgroundMessages,
  CabalMessageType,
  FromBackgroundMessage,
  MessageToBgPayload,
  SubscribeTokenPayloadMessage,
} from './shared/types';

console.log('start background service 5');

type CabalMessage = {
  type: string;
  eventName: string;
  data?: unknown;
};

let cabal: CabalService | null = null;

let isUserActivityConnected = false;
let isTradeConnected = false;
let isReady = false;
let reconnectTimeout: number | undefined = undefined;

const cabalInstance = () => cabal;
const setCabalInstance = (value: CabalService | null) => (cabal = value);

let activeTab: number | undefined;
const listeners: ContentListeners = [];

const setActiveTab = (newActiveTab: number) => {
  activeTab = newActiveTab;
};

const handleMessagesToBackground = (
  message: MessageToBgPayload,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void,
) => {
  console.log('%%% %%% receive', message, sender);
  switch (message.type) {
    case BackgroundMessages.INIT_CABAL:
      initCabalOnTab({
        sendResponse,
        message,
        state: { isReady, listeners, setActiveTab },
      });
      return true;
    case BackgroundMessages.SUBSCRIBE_TOKEN:
      handleSubscribeTokenMessage({
        sendResponse,
        message: message as SubscribeTokenPayloadMessage,
      });
      return true;
    default:
      console.log(`no handler for event`, message);
      break;
  }
};

const handleSubscribeTokenMessage = async ({
  sendResponse,
  message,
}: {
  sendResponse: (response?: any) => void;
  message: any;
}) => {
  const tabs = await queryActiveTab();
  const tabId = tabs[0]?.id;
  const listener = getListener(tabId);

  console.log('### SUBSCRIBE_TOKEN ###', tabId, listener?.mint);
  const cabalValue = cabalInstance();
  if (cabalValue && listener && listener.mint) {
    cabalValue.subscribeToken(listener?.mint);
  }
  sendResponse({ isReady });
};

const getListener = (tabId?: number) =>
  tabId ? listeners.find((item) => item.tabId === tabId) : undefined;

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
    console.log('mint', listener.mint);
  });
};

chrome.runtime.onMessage.addListener(handleMessagesToBackground);
chrome.tabs.onActivated.addListener(changeTab);

function sendMessageToActiveTab(message: FromBackgroundMessage) {
  if (!activeTab) {
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

const handleUserActivityTradeStats = (event: TokenTradeStats) => {
  const tokenTradeStats = event.value as TokenTradeStats;
  console.log('handleUserActivityTradeStats', tokenTradeStats);
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalUserActivityStreamMessages.tradeStats,
    data: {
      mint: tokenTradeStats.mint,
      tokenBalance: tokenTradeStats.tokenBalance.toString(),
      buyQoute: tokenTradeStats.buyQoute.toString(),
      sellQoute: tokenTradeStats.sellQoute.toString(),
      buyBase: tokenTradeStats.buyBase.toString(),
      sellBase: tokenTradeStats.sellBase.toString(),
      buys: tokenTradeStats.buys,
      sells: tokenTradeStats.sells,
      solBalance: tokenTradeStats.solBalance.toString(),
      lastTradedSlot: tokenTradeStats.lastTradedSlot.toString(),
      tokenDecimals: tokenTradeStats.tokenDecimals,
      qouteKind: tokenTradeStats.qouteKind,
    },
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

const handleTradeTokenStatus = (eventValue: TokenStatus) => {
  const tokenStatus = eventValue.value.value as TokenStatus;
  console.log('handleTradeTokenStatus', tokenStatus);
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalTradeStreamMessages.tokenStatus,
    data: {
      mint: tokenStatus.mint,
      poolId: tokenStatus.poolId,
      poolKind: tokenStatus.poolKind,
      migrationStatus: tokenStatus.migrationStatus,
      supply: tokenStatus.supply.toString(),
      baseLiq: tokenStatus.baseLiq.toString(),
      quoteLiq: tokenStatus.quoteLiq.toString(),
      qouteKind: tokenStatus.qouteKind,
      taxBps: tokenStatus.taxBps,
      ticker: tokenStatus.ticker,
    },
  });
};

const handleTradeEvent = (eventValue: TradeEvent) => {
  const timestamp = Date.now();
  const data = eventValue.value.value;
  const {
    amountSol, // : bigint;
    baseLiq, // : bigint;
    quoteLiq, // : bigint;
    poolKind, // : PoolKind;
  } = data;
  const eventDataValue = {
    type: eventValue.value.case,
    value: {
      timestamp,
      amountSol: amountSol.toString(), // : bigint;
      baseLiq: baseLiq.toString(), // : bigint;
      quoteLiq: quoteLiq.toString(), // : bigint;
      poolKind: poolKind, // : PoolKind;
    },
  };
  console.log('handleTradeEvent', eventDataValue);
  sendMessageToActiveTab({
    type: CabalMessageType.CabalEvent,
    eventName: CabalTradeStreamMessages.tokenStatus,
    data: eventDataValue,
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
