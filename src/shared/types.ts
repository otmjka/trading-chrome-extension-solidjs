import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
} from '../services/cabal-clinet-sdk';

export enum CabalMessageType {
  CabalEvent = 'CABAL_EVENT',
}

export enum BackgroundMessages {
  INIT_CABAL = 'INIT_CABAL',
  SUBSCRIBE_TOKEN = 'SUBSCRIBE_TOKEN',
}

export type BgInitMessageResponse = {
  url: string;
  mint: string;
  isReady: boolean;
};

// Messages to Background

export type MessageToBgPayload =
  | InitCabalOnTabMessage
  | SubscribeTokenPayloadMessage;

export type InitCabalOnTabMessage = {
  type: BackgroundMessages.INIT_CABAL;
  data: {
    url: string;
  };
};

export type SubscribeTokenPayloadMessage = {
  type: BackgroundMessages.SUBSCRIBE_TOKEN;
};

type BgMessageResponse = BgInitMessageResponse;
export type BgMessageCb = (response: BgMessageResponse) => void;

export type FromBackgroundMessage = {
  type: CabalMessageType;
  eventName: CabalUserActivityStreamMessages | CabalTradeStreamMessages;
  data?: any;
};

export type MessageListener = (
  message: FromBackgroundMessage,
  sender: any,
  sendResponse: SendResponse,
) => void;
// Response to background

export type SendResponse = (params: { ok: boolean }) => void;

export type Mint = string;
