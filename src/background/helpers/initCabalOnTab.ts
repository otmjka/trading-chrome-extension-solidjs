import { BgInitMessageResponse } from '../../shared/types';
import { getTokenGMGNAI } from '../../utils/getTokenGMGNAI';
import { ContentListeners } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const initCabalOnTab = async ({
  sendResponse,
  message,
  state,
}: {
  sendResponse: (response?: BgInitMessageResponse) => void;
  message: any;
  state: {
    isReady: boolean;
    listeners: ContentListeners;
    setActiveTab: (newActiveTab: number) => void;
  };
}) => {
  const tabs = await queryActiveTab();
  const tabId = tabs[0]?.id;
  console.log('### INIT_CABAL ###', tabId);
  if (!tabId) {
    return;
  }

  state.setActiveTab(tabId);

  const mint = getTokenGMGNAI(message.data.url);
  console.log(message.data.url);
  console.log(mint);

  state.listeners.push({
    tabId,
    url: message.data.url,
    mint,
  });

  sendResponse({ isReady: state.isReady, url: message?.data?.url, mint });
};
