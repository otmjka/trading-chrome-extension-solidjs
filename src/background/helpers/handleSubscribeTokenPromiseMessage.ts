import { CabalService } from '../../services/cabal-clinet-sdk';
import { SubscribeTokenPromisePayloadMessage } from '../../shared/types';
import { config } from '../backgroundConfig';
import { BackgroundState, ContentListener } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleSubscribeTokenPromiseMessage = async ({
  sendResponse,
  state,
  message,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
  message: SubscribeTokenPromisePayloadMessage;
}) => {
  try {
    const messageMint = message.data.mint;

    const { tabId, error: errorActiveTab } = await state.setActiveTab();
    if (errorActiveTab) {
    }
    if (!tabId) {
      throw new Error(`no active tab [tabid][${tabId}]`);
    }
    let listener = state.getTabListener(tabId);
    if (!listener) {
      listener = state.addListener({
        url: 'from handleSubscribeTokenPromiseMessage',
        tabId,
        mint: messageMint,
      });
    }

    if (!listener) {
      throw new Error(
        '[handleSubscribeTokenPromiseMessage] cant create listener',
      );
    }

    listener.mint = messageMint;

    if (!state.readyPromise) {
      throw new Error(
        'use before installation state.readyPromise is undefined',
      );
    }

    await state.readyPromise;
    const stateActiveTab = state.getActiveTab();
    if (stateActiveTab !== listener.tabId) {
      console.log(stateActiveTab, listener.tabId);
      throw new Error('tab changes');
    }

    if (listener.mint !== messageMint) {
      console.log(listener.mint, messageMint);
      throw new Error('listener mint !== messageMint');
    }

    if (config.showSubscribeTokenReceiveMsg) {
      console.log(
        'handleMessagesToBackground -> handleSubscribeTokenMessage -> ### SUBSCRIBE_TOKEN ###',
        `[message mint][${message.data.mint}]`,
        tabId,
        message,
      );

      console.log(
        '### SUBSCRIBE_TOKEN ### ====>',
        `activeTabId: ${state.getActiveTab()}`,
        `listener.mint: ${listener.mint}`,
        `state.mint: ${state.mint}`,
        `message mint: ${messageMint}`,
        state,
        listener,
      );
    }

    if (config.showSubscribeTokenReceiveMsg) {
      console.log('### SUBSCRIBE_TOKEN ### ====><====');
    }

    state.subscribeToken(messageMint);

    sendResponse({ isReady: state.getIsReady() });
  } catch (error) {
    console.error('handleSubscribeTokenMessage error', error);
  }
};
