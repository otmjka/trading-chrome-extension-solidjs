import { BackgroundState } from '../../types';
import { getActiveTabId } from '../getActiveTabId';

export const setActiveTabState = async function (
  this: BackgroundState,
): Promise<{ tabId?: number; error: null | string }> {
  try {
    const tabId = await getActiveTabId();

    if (!tabId) {
      this.activeTab = undefined;
      throw new Error('no active tab');
    }

    this.activeTab = tabId;

    return { tabId, error: null };
  } catch (error) {
    console.error(error);
    return { error: (error as unknown as Error).message };
  }
};
