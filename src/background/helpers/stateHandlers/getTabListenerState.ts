import { BackgroundState, ContentListener } from '../../types';

export const getTabListenerState = function (
  this: BackgroundState,
  tabId?: number,
): ContentListener | undefined {
  return tabId
    ? this.tabListeners.find((item) => item.tabId === tabId)
    : undefined;
};
