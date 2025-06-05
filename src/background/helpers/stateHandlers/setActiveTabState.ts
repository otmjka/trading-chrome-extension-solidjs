import { BackgroundState } from '../../types';
import { getActiveTab } from '../getActiveTab';

export const setActiveTabState = async function (
  this: BackgroundState,
): Promise<{ error: null | string }> {
  try {
    const tabId = await getActiveTab();
    if (!tabId) {
      this.activeTab = undefined;
      throw new Error('no active tab');
    }

    this.activeTab = tabId;

    return { error: null };
  } catch (error) {
    console.error(error);
    return { error: (error as unknown as Error).message };
  }
};
