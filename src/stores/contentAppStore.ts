import { createStore } from 'solid-js/store';
import { CabalConfig } from '../services/CabalStorage/types';
import {
  TokenStatusParsed,
  TradeEventParsed,
  TradeStatsParsed,
} from '../shared/types';

type ContentAppStore = {
  tabMint: string | undefined;
  mint: string | undefined;
  isReady: boolean;
  url: string;
  shouldSetApiKey: boolean;
  apiKeyError?: string;
  config: CabalConfig | null;
  tokenStatus: null | TokenStatusParsed;
  tradeStats: null | TradeStatsParsed;
  lastTradeEvent: null | TradeEventParsed;
};

const initValue: ContentAppStore = {
  tabMint: undefined,
  mint: undefined,
  isReady: false,
  url: '',
  shouldSetApiKey: false,
  apiKeyError: undefined,
  config: null,
  tokenStatus: null,
  tradeStats: null,
  lastTradeEvent: null,
};

const [contentAppStore, setContentAppStore] =
  createStore<ContentAppStore>(initValue);

const cleanContentAppStore = () => setContentAppStore({ ...initValue });

export { contentAppStore, setContentAppStore, cleanContentAppStore };
