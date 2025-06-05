import {
  BgInitMessageResponse,
  InitCabalOnTabMessage,
} from '../../shared/types';
import { BackgroundState } from '../types';

const LOG_DOMAIN = '### INIT_CABAL ###';

export const initCabalOnTab = async ({
  sendResponse,
  message,
  state,
}: {
  sendResponse: (response?: BgInitMessageResponse) => void;
  message: InitCabalOnTabMessage;
  state: BackgroundState;
}) => {
  try {
    console.log(LOG_DOMAIN, message);
    const messageMint = message.data.mint;
    if (!messageMint) {
      console.log(`${LOG_DOMAIN} no mint`);
      return;
    }
    await state.setActiveTab();

    if (!state.activeTab) {
      console.log(`${LOG_DOMAIN} no active tab`);
      return;
    }

    console.log(LOG_DOMAIN, state.activeTab);
    // TODO: state.updateListener()
    let listener = state.getTabListener(state.activeTab);

    if (listener) {
      listener.mint = messageMint;
      listener.url = message.data.url;
    } else {
      listener = {
        tabId: state.activeTab,
        url: message.data.url,
        mint: messageMint,
      };
      state.tabListeners.push(listener);
    }

    if (state.isReady && listener.mint) {
      state.subscribeToken(listener.mint);
    }

    sendResponse({
      apiKey: state.apiKey,
      isReady: state.isReady,
      url: listener.url,
      mint: listener.mint,
    });
  } catch (error) {
    console.error(`initCabalOnTab`, error);
  }
};
