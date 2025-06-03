import { TradeDir } from '../enums';
import { QuickItem } from '../types';
import {
  TokenStatusParsed,
  TradeEventParsed,
  TradeStatsParsed,
} from '../../../shared/types';

export type TradeWidgetState = {
  dir: TradeDir;

  // buy/sell button
  buyQuicks: Array<QuickItem>;
  activeBuyQuickIndex: null | number;
  buySellButtonLabel: string;
  disablebuySellButton: boolean;
  buyInputValue: null | string;
  // buy value
  solCount: string | null;

  // sell
  sellQuicks: Array<QuickItem>;
  activeSellQuickIndex: null | number;
  sellPercents: string | null;
  sellButtonLabel: string;
  disableSellButton: boolean;
  sellInputValue: null | string;

  // external

  tokenStatus: null | TokenStatusParsed;
  tradeStats: null | TradeStatsParsed;
  lastTradeEvent: null | TradeEventParsed;
  //
  loading: boolean;

  // tradeStats update
  solBalanceLabel: string;
};
