import {
  CabalService,
  CabalUserActivityStreamMessages,
  CabalTradeStreamMessages,
} from './services/cabal-clinet-sdk';

let cabal: CabalService | undefined;

const config = {
  apiKey: '2jaUfUpLFJorLTgMLbGKPz88KEeJstYucei3RuxM5h4V',
  apiUrl: 'https://cabalbot.tech:11111',
};
const events = [
  CabalUserActivityStreamMessages.userActivityConnected,
  CabalUserActivityStreamMessages.userActivityError,

  CabalUserActivityStreamMessages.tradeStats,
  CabalUserActivityStreamMessages.userActivityPong,

  CabalTradeStreamMessages.tradeConnected,
  CabalTradeStreamMessages.tradeError,

  CabalTradeStreamMessages.tradeEvent,
  CabalTradeStreamMessages.tokenStatus,
  CabalTradeStreamMessages.tradePing,
  CabalTradeStreamMessages.tradePong,
];

const eventHandlers: Record<string, () => void> = {};

const eventsBrokerHandler =
  (eventName: string) =>
  (...args: Array<unknown>) => {
    console.log(eventName, ...args);
  };
const subscribeAllEvents = () => {
  for (let eventName of events) {
    eventHandlers[eventName] = eventsBrokerHandler(eventName);

    cabal?.on(eventName, eventHandlers[eventName]);
  }
};

const unSubscribeAllEvents = () => {
  for (let eventName of events) {
    eventHandlers[eventName] = eventsBrokerHandler(eventName);

    cabal?.off(eventName, eventHandlers[eventName]);
  }
};

const start = async () => {
  cabal = new CabalService({
    apiKey: config.apiKey,
    apiUrl: config.apiUrl,
  });
  await cabal.start();

  subscribeAllEvents();
  console.log('start servive!!');
};

start();
