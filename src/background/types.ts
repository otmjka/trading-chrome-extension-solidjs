import { CabalService } from '../services/cabal-clinet-sdk';
import { Mint } from '../shared/types';
import CabalStorage from './CabalStorage';

export type CabalMessage = {
  type: string;
  eventName: string;
  data?: unknown;
};

export type ContentListener = { tabId: number; url: string; mint: string };

export type ContentListeners = Array<ContentListener>;

export type BackgroundState = {
  cabal: CabalService | null;
  isUserActivityConnected: boolean;
  isTradeConnected: boolean;
  isReady: boolean;
  reconnectTimeout: number | undefined;
  mint: Mint | null;
  activeTab: number | undefined;
  tabListeners: ContentListeners;
  cabalStorage: CabalStorage;
  apiKey: string | null;

  subscribeToken: (mint: string) => void;
  getActiveTab: () => number | undefined;
  setActiveTab: () => Promise<{ error: null | string }>;
  setActiveTabById: (tabId: number) => void;
  getTabListener: (tabId?: number) => ContentListener | undefined;
};
