import {
  BgInitMessageResponse,
  InitCabalOnTabMessage,
} from '../../shared/types';
import { BackgroundState } from '../types';
import { getMetaByState } from './messagesToContent';

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
      listener = state.addListener({
        tabId: state.activeTab,
        url: message.data.url,
        mint: messageMint,
      });
    }

    if (!listener) {
      throw new Error('cant create listener');
    }

    if (state.isReady && listener.mint) {
      state.subscribeToken(listener.mint);
    }

    sendResponse({
      meta: getMetaByState(state),
    });
  } catch (error) {
    console.error(`initCabalOnTab`, error);
  }
};
