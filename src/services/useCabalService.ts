import { setLogStore } from '../content/logStore';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  PoolKind,
  TokenTradeStats,
  UserResponse,
} from './cabal-clinet-sdk';

const handleUserActivityConnected = () =>
  setCabalUserActivity('status', { isReady: true, count: '' });

const handleUserActivityPong = (eventValue: {
  count: string;
  isReady: boolean;
}) => {
  setCabalUserActivity('status', eventValue);
};

const handleUserActivityTradeStats = (event) => {
  console.log('!!!!!!!handleUserActivityTradeStats', event);
  setLogStore('logs', (prev) => [...prev, { type: 'tokenTradeStats', event }]);
};

const handleUserActivityError = () => {
  setCabalUserActivity('status', undefined);
};

// Trades

const handleTradeStreamConnected = () =>
  setCabalTradeStream('status', { isReady: true, count: '' });

const handleTradeStreamPong = (eventValue: {
  count: string;
  isReady: boolean;
}) => {
  setCabalTradeStream('status', eventValue);
};

const handleTradeEvent = (event: {
  type: string;
  value: {
    timestamp: number;
    amountSol: string;
    baseLiq: string;
    quoteLiq: string;
    poolKind: PoolKind;
  };
}) => {
  const tokenTradeStats = event.value;
  setLogStore('logs', (prev) => [...prev, { type: 'tradeEvent', event }]);
};

const handleTradeTokenStatus = (event: TokenStatus) => {
  setLogStore('logs', (prev) => [...prev, { type: 'tokenStatus', event }]);
};

const handleTradeError = () => {
  setCabalTradeStream('status', undefined);
};

export const messageListener = (message, sender, sendResponse) => {
  console.log(`received message: ${message?.type} name: ${message?.eventName}`);
  const messageType = message?.type;
  if (messageType !== 'CABAL_EVENT') {
    sendResponse({ ok: true });
    return;
  }
  const messageEventName = message?.eventName;

  switch (messageEventName) {
    case CabalUserActivityStreamMessages.userActivityConnected:
      handleUserActivityConnected();
      break;
    case CabalUserActivityStreamMessages.userActivityPong:
      handleUserActivityPong(message.data);
      break;
    case CabalUserActivityStreamMessages.tradeStats:
      handleUserActivityTradeStats(message.data);
      break;
    case CabalUserActivityStreamMessages.userActivityError:
      handleUserActivityError();
      break;
    // trade streams
    case CabalTradeStreamMessages.tradeConnected:
      handleTradeStreamConnected();
      break;
    case CabalTradeStreamMessages.tradePong:
      handleTradeStreamPong(message.data);
      break;
    case CabalTradeStreamMessages.tradeEvent:
      handleTradeEvent(message.data);
      break;
    case CabalTradeStreamMessages.tokenStatus:
      handleTradeTokenStatus(message.data);
      break;
    case CabalTradeStreamMessages.tradeError:
      handleTradeError();
      break;

    default:
      console.log(`unknown message: ${messageType}`);
  }
  sendResponse({ ok: true });
};

export function useStartCabalService() {
  return {
    start: () => chrome.runtime.onMessage.addListener(messageListener),
    clean: () => chrome.runtime.onMessage.removeListener(messageListener),
  };
}
