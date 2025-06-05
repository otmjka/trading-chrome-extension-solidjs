import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
} from './cabal-clinet-sdk';
import {
  BackgroundMessages,
  CabalCommonMessages,
  CabalMessageType,
  FromBackgroundMessage,
  FromBackgroundMessageTradeEvent,
  FromBackgroundMessageTradePong,
  FromBackgroundMessageTradeTokenStatus,
  FromBackgroundMessageUAConnected,
  FromBackgroundMessageUAPong,
  FromBackgroundMessageUATradeStats,
  FromBackgroundReadyStatusMessage,
  FromBackgroundTxMessage,
  Mint,
  SendApiKeyPayloadMessage,
  SendResponse,
} from '../shared/types';

/* STORES */

import { addLogRecord, setLogStore } from '../stores/logStore';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import { setTradeWidgetState } from '../widgets/TradeWidget/TradeWidgetStore/tradeWidgetStateStore';
import { setContentAppStore } from '../stores/contentAppStore';
import { addToast } from '../stores/toastStore';

/* Handlers */

import { buyMarket } from './buyMarket';

import { startListnenBackgroundMessages } from './chrome-extension/backgroundMessageHandler';
import { sellMarket } from './sellMarket';
import { sendMessage } from './sendMessage';
import { subscribeToken } from './subscribeToken';
import * as handlers from './CabalStoreHandlers';

const metaToStatus = (message: FromBackgroundMessage) => {
  const { isReady, shouldSetApiKey } = message.meta;
  setContentAppStore('isReady', isReady);
  setContentAppStore('shouldSetApiKey', shouldSetApiKey);
};

const handleUserActivityConnected = () =>
  setCabalUserActivity('status', { isReady: true, count: '' });

const handleUserActivityPong = (eventValue: FromBackgroundMessageUAPong) =>
  setCabalUserActivity('status', {
    isReady: eventValue.meta.isReady,
    count: eventValue.data.count,
  });

const handleUserActivityTradeStats = (
  event: FromBackgroundMessageUATradeStats,
) => {
  console.log('!!!!!!!handleUserActivityTradeStats', event);
  setLogStore('logs', (prev) => [...prev, { type: 'tokenTradeStats', event }]);
  setTradeWidgetState('tradeStats', event.data);
};

const handleUserActivityError = () => setCabalUserActivity('status', undefined);

// Trades

const handleTradeStreamConnected = () =>
  setCabalTradeStream('status', { isReady: true, count: '' });

const handleTradeStreamPong = (eventValue: FromBackgroundMessageTradePong) =>
  setCabalTradeStream('status', {
    isReady: eventValue.meta.isReady,
    count: eventValue.data.count,
  });

const handleTradeEvent = (event: FromBackgroundMessageTradeEvent) => {
  setLogStore('logs', (prev) => [...prev, { type: 'tradeEvent', event }]);
  setTradeWidgetState('lastTradeEvent', event.data);
};

const handleTradeTokenStatus = (
  event: FromBackgroundMessageTradeTokenStatus,
) => {
  setLogStore('logs', (prev) => [...prev, { type: 'tokenStatus', event }]);
  setTradeWidgetState('tokenStatus', event.data);
};

const handleTradeError = () => setCabalTradeStream('status', undefined);

const handleReadyStatus = (message: FromBackgroundReadyStatusMessage) => {
  addLogRecord(message);
  const isReady = message.meta.isReady;
  const status = message.meta.isReady
    ? { isReady, count: String(Date.now()) }
    : undefined;
  setCabalUserActivity('status', status);
  setCabalTradeStream('status', status);
};

const handleUAtxCB = (message: FromBackgroundTxMessage) => {
  addLogRecord(message);
  addToast(message);
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
  metaToStatus(message);
  switch (messageEventName) {
    case CabalCommonMessages.readyStatus:
      console.log(`%%%% %%% ${CabalCommonMessages.readyStatus}`, message);
      handleReadyStatus(message);
      break;
    case CabalUserActivityStreamMessages.txnCb:
      console.log(`$$$ ${CabalCommonMessages.readyStatus}`, message);
      handleUAtxCB(message);
      break;
    case CabalUserActivityStreamMessages.userActivityConnected:
      handleUserActivityConnected();
      break;
    case CabalUserActivityStreamMessages.userActivityPong:
      handleUserActivityPong(message);
      break;
    case CabalUserActivityStreamMessages.tradeStats:
      handleUserActivityTradeStats(message);
      break;
    case CabalUserActivityStreamMessages.userActivityError:
      handleUserActivityError();
      break;
    // trade streams
    case CabalTradeStreamMessages.tradeConnected:
      handleTradeStreamConnected();
      break;
    case CabalTradeStreamMessages.tradePong:
      handleTradeStreamPong(message);
      break;
    case CabalTradeStreamMessages.tradeEvent:
      handleTradeEvent(message);
      break;
    case CabalTradeStreamMessages.tokenStatus:
      handleTradeTokenStatus(message);
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
}) => {
  buyMarket({
    mint,
    amountSol: amount,
    cb: (response) => {
      console.log('marketBuy', response);
    },
  });
};

export const marketSell = async ({
  percents,
  mint,
}: {
  percents: number;
  mint: Mint;
}) => {
  sellMarket({
    mint,
    amountBps: percents,
    cb: (response) => {
      console.log('marketBuy', response);
    },
  });
};

const sendApiKey = (apiKey: string | null) => {
  const payload: SendApiKeyPayloadMessage = {
    type: BackgroundMessages.SET_APIKEY,
    data: { apiKey },
  };

  const cb = (response: any) => {
    console.log('res', response);
  };

  sendMessage({ payload, cb });
};

export function useStartCabalService() {
  return {
    sendApiKey,
    registerTab: handlers.registerTab,
    subscribeToken,
    marketBuy,
    marketSell,
    startListen: () => startListnenBackgroundMessages(messageListener),
    clean: () => chrome.runtime.onMessage.removeListener(messageListener),
    cleanWidget: handlers.cleanWidget,
  };
}
