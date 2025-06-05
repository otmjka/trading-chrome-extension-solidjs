import { BackgroundState } from '../../types';

export const setActiveTabByIdState = function (
  this: BackgroundState,
  tabId: number,
) {
  this.activeTab = tabId;
};
