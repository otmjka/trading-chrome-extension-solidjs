import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  MigrationStatus,
  PoolKind,
} from '../services/cabal-clinet-sdk';
import { QuoteKind } from '../services/cabal-clinet-sdk/cabal/CabalRpc/common_pb';

export enum CabalMessageType {
  CabalEvent = 'CABAL_EVENT',
}

export enum BackgroundMessages {
  INIT_CABAL = 'INIT_CABAL',
  SUBSCRIBE_TOKEN = 'SUBSCRIBE_TOKEN',
  BUY_MARKET = 'BUY_MARKET',
  SELL_MARKET = 'SELL_MARKET',
}

export type BgInitMessageResponse = {
  url: string;
  mint: string;
  isReady: boolean;
};

// Messages to Background

export type MessageToBgPayload =
  | InitCabalOnTabMessage
  | SubscribeTokenPayloadMessage
  | BuyMarketPayloadMessage
  | SellMarketPayloadMessage;

export type InitCabalOnTabMessage = {
  type: BackgroundMessages.INIT_CABAL;
  data: {
    url: string;
  };
};

export type SubscribeTokenPayloadMessage = {
  type: BackgroundMessages.SUBSCRIBE_TOKEN;
  data: {
    mint: Mint;
  };
};

export type SubscribeTokenResponse = {
  isReady: boolean;
};

export type BuyMarketPayloadMessage = {
  type: BackgroundMessages.BUY_MARKET;
  data: {
    mint: Mint;
    amountSol: number;
  };
};

export type BuyMarketResponse = {
  isReady: boolean;
};

export type SellMarketPayloadMessage = {
  type: BackgroundMessages.SELL_MARKET;
  data: {
    mint: Mint;
    amountBps: Bps;
  };
};

export type SellMarketResponse = {
  isReady: boolean;
};

type BgMessageResponse =
  | BgInitMessageResponse
  | SubscribeTokenResponse
  | BuyMarketResponse
  | SellMarketResponse;

export type BgMessageCb = (response: BgMessageResponse) => void;

// Response to background

export type SendResponse = (params: { ok: boolean }) => void;

export type Mint = string;
export type Bps = number; // 100% 100_00 Bps

export type TokenStatusParsed = {
  mint: string;
  poolId: string;
  poolKind: PoolKind;
  migrationStatus: MigrationStatus;
  supply: string; // bigint;
  baseLiq: string; // bigint;
  quoteLiq: string; // bigint;
  qouteKind: QuoteKind;
  taxBps?: number;
  ticker: string;
};

export type TradeStatsParsed = {
  mint: Mint;
  tokenBalance: string;
  buyQoute: string;
  sellQoute: string;
  buyBase: string;
  sellBase: string;
  buys: number;
  sells: number;
  solBalance: string;
  lastTradedSlot: string;
  tokenDecimals: number;
  qouteKind: QuoteKind;
};

export type TradeEventParsed = {
  type: TradeType;
  value: {
    mint: Mint;
    timestamp: number;
    amountSol: string;
    baseLiq: string;
    quoteLiq: string;
    poolKind: PoolKind;
  };
};

type FromBackgroundMessageUAConnected = {
  type: CabalMessageType;
  eventName: CabalUserActivityStreamMessages.userActivityConnected;
};

type FromBackgroundMessageUAError = {
  type: CabalMessageType;
  eventName: CabalUserActivityStreamMessages.userActivityError;
};

type FromBackgroundMessageUAPong = {
  type: CabalMessageType;
  eventName: CabalUserActivityStreamMessages.userActivityPong;
  data: {
    count: string;
    isReady: boolean;
  };
};

export type FromBackgroundMessageUATradeStats = {
  type: CabalMessageType;
  eventName: CabalUserActivityStreamMessages.tradeStats;
  data: TradeStatsParsed;
};

type FromBackgroundMessageTradeConnected = {
  type: CabalMessageType;
  eventName: CabalTradeStreamMessages.tradeConnected;
};

export type FromBackgroundMessageTradeEvent = {
  type: CabalMessageType;
  eventName: CabalTradeStreamMessages.tradeEvent;
  data: TradeEventParsed;
};

export type FromBackgroundMessageTradePong = {
  type: CabalMessageType;
  eventName: CabalTradeStreamMessages.tradePong;
  data: {
    count: string;
    isReady: boolean;
  };
};

export type FromBackgroundMessageTradeTokenStatus = {
  type: CabalMessageType;
  eventName: CabalTradeStreamMessages.tokenStatus;
  data: TokenStatusParsed;
};

export type FromBackgroundMessageTradeError = {
  type: CabalMessageType;
  eventName: CabalTradeStreamMessages.tradeError;
};

export type FromBackgroundMessage =
  | FromBackgroundMessageUAError
  | FromBackgroundMessageUAConnected
  | FromBackgroundMessageUAPong
  | FromBackgroundMessageUATradeStats
  | FromBackgroundMessageTradeConnected
  | FromBackgroundMessageTradePong
  | FromBackgroundMessageTradeTokenStatus
  | FromBackgroundMessageTradeEvent
  | FromBackgroundMessageTradeError;

export type MessageListener = (
  message: FromBackgroundMessage,
  sender: any,
  sendResponse: SendResponse,
) => void;

export enum TradeType {
  buy = 'buy',
  sell = 'sell',
  deposit = 'deposit',
  withdraw = 'withdraw',
  migrationStart = 'migrationStart',
  migrationEnd = 'migrationEnd',
  burnLiq = 'burnLiq',
  burnMint = 'burnMint',
}
