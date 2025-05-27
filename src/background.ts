import { config } from './backgroundConfig';
import {
  CabalService,
  CabalUserActivityStreamMessages,
  CabalTradeStreamMessages,
  UserResponse,
  TokenTradeStats,
  TradeEvent,
  TokenStatus,
} from './services/cabal-clinet-sdk';

let cabal: CabalService | null = null;
const cabalInstance = () => cabal;
const setCabalInstance = (newCabal: CabalService | null) => (cabal = newCabal);

const handleUserActivityConnected = () => {
  // setCabalUserActivity('connected', true);
  console.log(`handleUserActivityConnected 'connected', true`);
};

const handleUserActivityPong = (eventValue: UserResponse) => {
  console.log(
    `setCabalUserActivity('pong', eventValue.count as { count: bigint });`,
  );
};

const handleTradeStreamConnected = () =>
  console.log(`setCabalTradeStream('connected', true);`);

const handleTradeStreamPong = (eventValue: UserResponse) => {
  console.log(
    `setCabalTradeStream('pong', eventValue.count as { count: bigint });`,
  );
};

const handleUserActivityDisconnected = () => {
  console.log(`setCabalUserActivity('connected', false);`);
};

const handleUserActivityTradeStats = (event: TokenTradeStats) => {
  console.log(`const tokenTradeStats = event.value as TokenTradeStats;
  addTokenTradeStats(tokenTradeStats);`);
};

const handleTradeEvent = (eventValue: TradeEvent) => {
  console.log(`addTrade({
    tradeEvent: {
      value: eventValue.value.value,
      type: eventValue.value.case,
    },
  });`);
};

const handleTradeTokenStatus = (eventValue: TokenStatus) => {
  console.log(`const tokenStatus = eventValue.value.value as TokenStatus;
  setTradeEventsStore('trades', []);
  setTokenStatusStore('tokenStatus', tokenStatus);`);
};

const handleTradeError = () => {};

const eventDict = {
  [CabalUserActivityStreamMessages.userActivityConnected]:
    handleUserActivityConnected,

  [CabalUserActivityStreamMessages.userActivityPong]: handleUserActivityPong,

  [CabalUserActivityStreamMessages.userActivityError]:
    handleUserActivityDisconnected,

  [CabalUserActivityStreamMessages.tradeStats]: handleUserActivityTradeStats,

  // trade streams
  [CabalTradeStreamMessages.tradeConnected]: handleTradeStreamConnected,
  [CabalTradeStreamMessages.tradePong]: handleTradeStreamPong,
  [CabalTradeStreamMessages.tradeEvent]: handleTradeEvent,
  [CabalTradeStreamMessages.tokenStatus]: handleTradeTokenStatus,

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

const initializeCabalService = () => {
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
    cabal = newCabal;
    setCabalInstance(newCabal);
  }
};

// const start = async () => {
//   initializeCabalService();
// };

// start();
console.log('start background service');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'INIT_CABAL') {
    console.log('!!! INIT_CABAL !!!');
    initializeCabalService();
    sendResponse({ status: 'CabalService initialized' });
  }
  return true;
});
