import { config } from '../backgroundConfig';
import { BackgroundState } from '../types';

export const changeTab =
  ({ state }: { state: BackgroundState }) =>
  (activeInfo: chrome.tabs.TabActiveInfo) => {
    if (config.showOnChangeTab) {
      console.log('[ON][changeTab]', activeInfo.tabId);
    }
    const listener = state.getTabListener(activeInfo.tabId);

    if (!listener) {
      console.log('[!] tab not registered: ', activeInfo.tabId);
      return;
    }

    state.setActiveTabById(activeInfo.tabId);
    state.subscribeToken(listener.mint);
  };
