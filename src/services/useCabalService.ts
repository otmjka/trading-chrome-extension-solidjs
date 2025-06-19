import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
} from './cabal-clinet-sdk';
import {
  BackgroundMessages,
  BgInitMessageResponse,
  CabalCommonMessages,
  CabalMessageType,
  CabalMeta,
  FromBackgroundConfigChanged,
  FromBackgroundMessage,
  FromBackgroundMessageTradeEvent,
  FromBackgroundMessageTradePong,
  FromBackgroundMessageTradeTokenStatus,
  FromBackgroundMessageUAPong,
  FromBackgroundMessageUATradeStats,
  FromBackgroundReadyStatusMessage,
  FromBackgroundTxMessage,
  GetConfigPromisePayloadMessage,
  GetConfigPromiseResponse,
  InitCabalOnTabMessage,
  Mint,
  SendApiKeyPayloadMessage,
  SendApiKeyPromisePayloadMessage,
  SendResponse,
  SetApiKeyPromiseResponse,
  SetConfigToDefaultPayloadMessage,
  SetConfigToDefaultResponse,
  SubscribeTokenPayloadMessage,
  SubscribeTokenPromisePayloadMessage,
  SubscribeTokenPromiseResponse,
  SubscribeTokenResponse,
} from '../shared/types';

/* STORES */

import { addLogRecord, setLogStore } from '../stores/logStore';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import { setTradeWidgetState } from '../widgets/TradeWidget/TradeWidgetStore/tradeWidgetStateStore';
import { setContentAppStore } from '../stores/contentAppStore';
import { addToast } from '../stores/toastStore';
import { setConfigStore } from '../stores/configStore';
/* Handlers */

import { buyMarket } from './buyMarket';

import { startListnenBackgroundMessages } from './chrome-extension/backgroundMessageHandler';
import { sellMarket } from './sellMarket';
import { sendMessage } from './sendMessage';
import * as handlers from './CabalStoreHandlers';
import { BuySellConfig } from './CabalStorage/types';

const metaToStores = (meta: CabalMeta) => {
  setContentAppStore('isReady', meta.isReady);
  setContentAppStore('shouldSetApiKey', meta.shouldSetApiKey);
  setContentAppStore('config', meta.config);
  setConfigStore('config', meta.config);
};

const metaToStatus = (message: FromBackgroundMessage) => {
  metaToStores(message.meta);
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
  setContentAppStore('tradeStats', event.data);
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
  setContentAppStore('lastTradeEvent', event.data);
};

const handleTradeTokenStatus = (
  event: FromBackgroundMessageTradeTokenStatus,
) => {
  setLogStore('logs', (prev) => [...prev, { type: 'tokenStatus', event }]);
  setTradeWidgetState('tokenStatus', event.data);
  setContentAppStore('tokenStatus', event.data);
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

const handleConfigChangedMessageFromBg = (
  message: FromBackgroundConfigChanged,
) => {
  metaToStores(message.meta);
};

export const messageListener = (
  message: FromBackgroundMessage,
  sender: any,
  sendResponse: SendResponse,
) => {
  if (
    ![
      CabalUserActivityStreamMessages.userActivityPong,
      CabalTradeStreamMessages.tradePong,
    ].includes(message?.eventName)
  ) {
    console.log(`received message: name: ${message?.eventName}`, message);
  }

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
    case CabalCommonMessages.configChanged:
      handleConfigChangedMessageFromBg(message);
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
  if (!apiKey) {
    metaToStores({ isReady: false, shouldSetApiKey: true });
  }

  const cb = (response: any) => {
    console.log('res', response);
  };

  sendMessage({ payload, cb });
};

const sendApiKeyPromise = (apiKey: string | null) => {
  const payload: SendApiKeyPromisePayloadMessage = {
    type: BackgroundMessages.SET_APIKEY_PROMISE,
    data: { apiKey },
  };

  const cb = (response: SetApiKeyPromiseResponse) => {
    console.log('res PROMISE', response);
    if (response?.meta) {
      metaToStores(response?.meta);

      if (response?.meta.error) {
        setContentAppStore('apiKeyError', response?.meta.error);
      }
    }
  };

  sendMessage({ payload, cb });
};

const getConfig = () => {
  const payload: GetConfigPromisePayloadMessage = {
    type: BackgroundMessages.GET_CONFIG_PROMISE,
  };
  const cb = (response: GetConfigPromiseResponse) => {
    console.log('config', response);
    setConfigStore('config', response.config);
  };

  sendMessage({ payload, cb });
};

const resetConfig = () => {
  const payload: SetConfigToDefaultPayloadMessage = {
    type: BackgroundMessages.SET_STORAGE_TO_DEFAULT,
  };
  const cb = (response: SetConfigToDefaultResponse) => {
    console.log('resetConfig response', response);
  };

  sendMessage({ payload, cb });
};

const subscribeTokenPromise = ({ mint }: { mint: string }) => {
  const payload: SubscribeTokenPromisePayloadMessage = {
    type: BackgroundMessages.SUBSCRIBE_TOKEN_PROMISE,
    data: {
      mint,
    },
  };
  const cb = (response: SubscribeTokenPromiseResponse) => {
    console.log('subscribeTokenPromise response', response);
  };

  sendMessage({ payload, cb });
};

export const subscribeToken = ({ mint }: { mint: Mint }) => {
  const payload: SubscribeTokenPayloadMessage = {
    type: BackgroundMessages.SUBSCRIBE_TOKEN,
    data: { mint },
  };

  const cb = (response: SubscribeTokenResponse) => {
    console.log(`[cabal-content]: response subscribe token`, response);
  };

  sendMessage({ payload, cb });
};
export const registerTab = ({
  mint,
  locationHref,
}: {
  mint: Mint;
  locationHref: string;
}) => {
  const payload: InitCabalOnTabMessage = {
    type: BackgroundMessages.INIT_CABAL,
    data: {
      url: locationHref,
      mint,
    },
  };

  const cb = (response: BgInitMessageResponse) => {
    console.log('[cabal-content][registerTab response]:', response);

    // setContentAppStore('url', response.url);
    // setContentAppStore('mint', response.mint);
    setContentAppStore('isReady', response.meta.isReady);
    setContentAppStore('config', response.meta.config);
    // setContentAppStore('shouldSetApiKey', !response.apiKey);

    // if (response.isReady) {
    //   setCabalUserActivity('status', {
    //     isReady: true,
    //     count: String(Date.now()),
    //   });
    //   setCabalTradeStream('status', {
    //     isReady: true,
    //     count: String(Date.now()),
    //   });
    // }
  };

  sendMessage({ payload, cb });
};

const saveBuySellSettings = (value: BuySellConfig) => {
  const payload: SaveBuySellSettingsMessage = {
    type: BackgroundMessages.BUY_SELL_SETTINGS_CHANGE,
    data: value,
  };
  sendMessage({
    payload,
    cb: (response) => {
      console.log(`saveBuySellSettings response`, response);
    },
  });
};

export function useStartCabalService() {
  return {
    saveBuySellSettings,
    subscribeTokenPromise,
    resetConfig,
    getConfig,
    sendApiKey,
    sendApiKeyPromise,
    popupOpen: handlers.popupOpen,
    registerTab,
    subscribeToken,
    marketBuy,
    marketSell,
    startListen: () => startListnenBackgroundMessages(messageListener),
    clean: () => chrome.runtime.onMessage.removeListener(messageListener),
    cleanWidget: handlers.cleanWidget,
  };
}
