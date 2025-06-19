import { BackgroundState, ContentListener } from '../../types';

export const addListenerState = function (
  this: BackgroundState,
  listenerData: ContentListener,
): ContentListener | undefined {
  this.tabListeners = [...this.tabListeners, { ...listenerData }];
  return this.getTabListener(listenerData.tabId);
};
