import { CabalService } from '../../services/cabal-clinet-sdk';
import { SubscribeTokenPayloadMessage } from '../../shared/types';
import { config } from '../backgroundConfig';
import { ContentListener } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleSubscribeTokenMessage = async ({
  sendResponse,
  getListener,
  getCabalInstance,
  getIsReady,
  message,
}: {
  sendResponse: (response?: any) => void;
  getListener: (tabId?: number) => ContentListener | undefined;
  getCabalInstance: () => CabalService | null;
  getIsReady: () => boolean;
  message: SubscribeTokenPayloadMessage;
}) => {
  try {
    const tabs = await queryActiveTab();
    const tabId = tabs[0]?.id;
    const listener = getListener(tabId);

    if (config.showSubscribeTokenReceiveMsg)
      console.log('### SUBSCRIBE_TOKEN ###', tabId, message);
    const cabalValue = getCabalInstance();
    const messageMint = message.data.mint;
    if (cabalValue && listener && messageMint) {
      cabalValue.subscribeToken(messageMint);
    }
    sendResponse({ isReady: getIsReady() });
  } catch (error) {
    console.error('handleSubscribeTokenMessage error', error);
  }
};
