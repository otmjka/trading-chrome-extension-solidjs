import { CabalService } from '../../services/cabal-clinet-sdk';
import { SubscribeTokenPayloadMessage } from '../../shared/types';
import { config } from '../backgroundConfig';
import { BackgroundState, ContentListener } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleSubscribeTokenMessage = async ({
  sendResponse,
  state,
  message,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
  message: SubscribeTokenPayloadMessage;
}) => {
  try {
    const tabs = await queryActiveTab();
    const tabId = tabs[0]?.id;
    const listener = state.getTabListener(tabId);

    if (config.showSubscribeTokenReceiveMsg) {
      console.log('### SUBSCRIBE_TOKEN ###', tabId, message);
    }
    const cabalValue = state.getCabalInstance();
    const messageMint = message.data.mint;
    console.log(
      '### SUBSCRIBE_TOKEN ### ====>',
      state,
      cabalValue,
      listener,
      messageMint,
    );

    if (cabalValue && listener && messageMint) {
      console.log('### SUBSCRIBE_TOKEN ### ====><====');
      cabalValue.subscribeToken(messageMint);
    }
    sendResponse({ isReady: state.getIsReady() });
  } catch (error) {
    console.error('handleSubscribeTokenMessage error', error);
  }
};
