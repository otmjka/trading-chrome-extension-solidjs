import { BackgroundState } from '../types';

export const changeTab =
  ({ state }: { state: BackgroundState }) =>
  (activeInfo: chrome.tabs.TabActiveInfo) => {
    console.log('Активная вкладка сменилась. ID вкладки:', activeInfo.tabId);

    const listener = state.getTabListener(activeInfo.tabId);
    console.log(listener);
    if (!listener) {
      console.log('Не зарегестрировал слушатель', activeInfo.tabId);
      return;
    }

    state.setActiveTabById(activeInfo.tabId);
    state.subscribeToken(listener.mint);
    console.log(state);
    chrome.tabs.get(activeInfo.tabId, function (tab) {
      console.log('URL новой активной вкладки:', tab.url);
      // console.log('URL listener', listener.url);
      // console.log('mint', listener.mint);
    });
  };
