import { setLogStore } from '../content/logStore';
import {
  CabalMessageType,
  FromBackgroundMessage,
  Mint,
  SendResponse,
} from '../shared/types';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import { setTradeWidgetState } from '../widgets/TradeWidget/tradeWidgetStateStore';
import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  PoolKind,
  TokenStatus,
} from './cabal-clinet-sdk';
import { startListnenBackgroundMessages } from './chrome-extension/backgroundMessageHandler';
import { registerTab } from './registerTab';
import { subscribeToken } from './subscribeToken';

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
  setTradeWidgetState('tokenStatus', event);
};

const handleTradeError = () => {
  setCabalTradeStream('status', undefined);
};

export const messageListener = (
  message: FromBackgroundMessage,
  sender: any,
  sendResponse: SendResponse,
) => {
  console.log(`received message: ${message?.type} name: ${message?.eventName}`);

  const messageType = message?.type;
  if (messageType !== CabalMessageType.CabalEvent) {
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

export const marketBuy = async ({
  amount,
  mint,
}: {
  amount: number;
  mint: Mint;
}) => {};

export const marketSell = async ({
  percents,
  mint,
}: {
  percents: number;
  mint: Mint;
}) => {};

export function useStartCabalService() {
  return {
    registerTab,
    subscribeToken,
    marketBuy,
    marketSell,
    startListen: () => startListnenBackgroundMessages(messageListener),
    clean: () => chrome.runtime.onMessage.removeListener(messageListener),
  };
}
