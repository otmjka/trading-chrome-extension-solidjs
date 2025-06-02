import { ContentListener } from '../types';

export const changeTab =
  ({
    getListener,
    setActiveTab,
  }: {
    getListener: (tabId?: number) => ContentListener | undefined;
    setActiveTab: (newActiveTab: number) => void;
  }) =>
  (activeInfo: chrome.tabs.TabActiveInfo) => {
    console.log('Активная вкладка сменилась. ID вкладки:', activeInfo.tabId);

    const listener = getListener(activeInfo.tabId);
    if (!listener) {
      return;
    }
    setActiveTab(listener.tabId);

    chrome.tabs.get(activeInfo.tabId, function (tab) {
      console.log('URL новой активной вкладки:', tab.url);
      console.log('URL listener', listener.url);
      console.log('mint', listener.mint);
    });
  };
