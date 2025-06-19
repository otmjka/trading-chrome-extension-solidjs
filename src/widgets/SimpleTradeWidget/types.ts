import {
  TokenStatusParsed,
  TradeEventParsed,
  TradeStatsParsed,
} from '../../shared/types';
import { CabalConfig } from '../../services/CabalStorage/types';

export type SimpleTradeWidgetStore = {
  isReady: boolean;
  config: CabalConfig | null;
  tokenStatus: null | TokenStatusParsed;
  tradeStats: null | TradeStatsParsed;
  lastTradeEvent: null | TradeEventParsed;
  isWidgetReady: boolean;
};
