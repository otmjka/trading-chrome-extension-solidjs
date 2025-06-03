import { addLogRecord, setLogStore } from '../stores/logStore';
import {
  BackgroundMessages,
  CabalCommonMessages,
  CabalMessageType,
  FromBackgroundMessage,
  FromBackgroundMessageTradeEvent,
  FromBackgroundMessageTradeTokenStatus,
  FromBackgroundMessageUATradeStats,
  FromBackgroundReadyStatusMessage,
  Mint,
  SendApiKeyPayloadMessage,
  SendResponse,
} from '../shared/types';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import { setTradeWidgetState } from '../widgets/TradeWidget/TradeWidgetStore/tradeWidgetStateStore';
import { buyMarket } from './buyMarket';
import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
} from './cabal-clinet-sdk';
import { startListnenBackgroundMessages } from './chrome-extension/backgroundMessageHandler';
import { registerTab } from './registerTab';
import { sellMarket } from './sellMarket';
import { sendMessage } from './sendMessage';
import { subscribeToken } from './subscribeToken';
import { setContentAppStore } from '../stores/contentAppStore';

const handleUserActivityConnected = () =>
  setCabalUserActivity('status', { isReady: true, count: '' });

const handleUserActivityPong = (eventValue: {
  count: string;
  isReady: boolean;
}) => {
  setCabalUserActivity('status', eventValue);
};

const handleUserActivityTradeStats = (
  event: FromBackgroundMessageUATradeStats,
) => {
  console.log('!!!!!!!handleUserActivityTradeStats', event);
  setLogStore('logs', (prev) => [...prev, { type: 'tokenTradeStats', event }]);
  setTradeWidgetState('tradeStats', event.data);
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

const handleTradeError = () => {
  setCabalTradeStream('status', undefined);
};

const handleReadyStatus = (message: FromBackgroundReadyStatusMessage) => {
  addLogRecord(message);
  const isReady = message.data.isReady;
  const shouldSetApiKey = message.data.shouldSetApiKey;
  setContentAppStore('isReady', isReady);
  setContentAppStore('shouldSetApiKey', shouldSetApiKey);
  const status = message.data.isReady
    ? { isReady, count: String(Date.now()) }
    : undefined;
  setCabalUserActivity('status', status);
  setCabalTradeStream('status', status);
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
    case CabalCommonMessages.readyStatus:
      console.log(`%%%% %%% ${CabalCommonMessages.readyStatus}`, message);
      handleReadyStatus(message);
      break;
    case CabalUserActivityStreamMessages.userActivityConnected:
      handleUserActivityConnected();
      break;
    case CabalUserActivityStreamMessages.userActivityPong:
      handleUserActivityPong(message.data);
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
      handleTradeStreamPong(message.data);
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
    registerTab,
    subscribeToken,
    marketBuy,
    marketSell,
    startListen: () => startListnenBackgroundMessages(messageListener),
    clean: () => chrome.runtime.onMessage.removeListener(messageListener),
  };
}
