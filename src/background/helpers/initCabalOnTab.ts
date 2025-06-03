import { BgInitMessageResponse } from '../../shared/types';
import { getTokenGMGNAI } from '../../utils/getTokenGMGNAI';
import { BackgroundState, ContentListeners } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const initCabalOnTab = async ({
  sendResponse,
  message,
  state,
  setActiveTab,
}: {
  sendResponse: (response?: BgInitMessageResponse) => void;
  message: any;
  state: BackgroundState;

  setActiveTab: (newActiveTab: number) => void;
}) => {
  try {
    const tabs = await queryActiveTab();
    const tabId = tabs[0]?.id;
    console.log('### INIT_CABAL ###', tabId, message);
    if (!tabId) {
      return;
    }
    setActiveTab(tabId);
    const mint = getTokenGMGNAI(message.data.url);
    const { apiKey } = await state.cabalStorage.getApiKey();
    state.tabListeners.push({
      tabId,
      url: message.data.url,
      mint,
    });

    sendResponse({
      apiKey,
      isReady: state.isReady,
      url: message?.data?.url,
      mint,
    });
  } catch (error) {
    console.error(`initCabalOnTab`, error);
  }
};
