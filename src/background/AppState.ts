import CabalStorage from '../services/CabalStorage/CabalStorage';
import { addListenerState } from './helpers/stateHandlers/addListenerState';
import { getIsReadyState } from './helpers/stateHandlers/getIsReadyState';
import { getTabListenerState } from './helpers/stateHandlers/getTabListenerState';
import { setActiveTabByIdState } from './helpers/stateHandlers/setActiveTabByIdState';
import { setActiveTabState } from './helpers/stateHandlers/setActiveTabState';
import { setIsReadyState } from './helpers/stateHandlers/setIsReadyState';
import { subscribeTokenState } from './helpers/stateHandlers/subscribeTokenState';
import { BackgroundState } from './types';

export const state: BackgroundState = {
  cabal: null,
  isUserActivityConnected: false,
  isTradeConnected: false,
  isReady: false,
  reconnectTimeout: undefined,
  mint: null,
  activeTab: undefined,
  tabListeners: [],
  cabalStorage: new CabalStorage(),
  apiKey: null,

  setApiKeyPromise: null,
  _resolveSetApiKey: undefined,
  _rejectedSetApiKey: undefined,

  getCabalInstance: () => state.cabal,

  subscribeToken: subscribeTokenState,
  getActiveTab: function () {
    return this.activeTab;
  },
  setActiveTab: setActiveTabState,
  setActiveTabById: setActiveTabByIdState,

  addListener: addListenerState,
  getTabListener: getTabListenerState,

  setIsReady: setIsReadyState,
  getIsReady: getIsReadyState,
};

state.subscribeToken = state.subscribeToken.bind(state);
state.getActiveTab = state.getActiveTab.bind(state);
state.setActiveTab = state.setActiveTab.bind(state);

state.addListener = state.addListener.bind(state);
state.getTabListener = state.getTabListener.bind(state);
state.setActiveTab = state.setActiveTab.bind(state);
state.setActiveTabById = state.setActiveTabById.bind(state);

state.setIsReady = state.setIsReady.bind(state);
state.getIsReady = state.getIsReady.bind(state);
