import { CabalService } from '../services/cabal-clinet-sdk';
import { SubscribeTokenReturn } from '../services/cabal-clinet-sdk/CabalServiceTypes';
import CabalStorage from '../services/CabalStorage/CabalStorage';
import { CabalConfig } from '../services/CabalStorage/types';
import { Mint } from '../shared/types';
import { setActiveTabState } from './helpers/stateHandlers/setActiveTabState';

export type CabalMessage = {
  type: string;
  eventName: string;
  data?: unknown;
};

export type ContentListener = { tabId: number; url: string; mint: string };

export type ContentListeners = Array<ContentListener>;

export type BackgroundState = {
  cabal: CabalService | null;
  config: null | CabalConfig;
  isUserActivityConnected: boolean;
  isTradeConnected: boolean;
  isReady: boolean;
  readyPromise: Promise<undefined> | undefined;
  reconnectTimeout: number | undefined;
  mint: Mint | null;
  activeTab: number | undefined;
  tabListeners: ContentListeners;
  cabalStorage: CabalStorage;
  apiKey: string | null;

  setApiKeyPromise: null | Promise<unknown>;
  _resolveSetApiKey?: (value: unknown) => void;
  _rejectedSetApiKey?: (value: unknown) => void;

  getCabalInstance: () => CabalService | null;

  subscribeToken: (mint: string) => SubscribeTokenReturn;
  getActiveTab: () => number | undefined;
  setActiveTab: () => ReturnType<typeof setActiveTabState>;
  setActiveTabById: (tabId: number) => void;

  addListener: (listenerData: ContentListener) => ContentListener | undefined;
  getTabListener: (tabId?: number) => ContentListener | undefined;

  setIsReady: (value: boolean) => void;
  getIsReady: () => boolean;
};
