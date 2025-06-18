import { SetApiKeyPromiseResponse } from '../../shared/types';
import { BackgroundState } from '../types';

export const setApiKeyPromise = async ({
  sendResponse,
  message,
  state,
}: {
  sendResponse: (response?: SetApiKeyPromiseResponse) => void;
  message: any;
  state: BackgroundState;
}) => {
  await state.cabalStorage.setApiKey({ apiKey: message.data.apiKey });
  state.apiKey = message.data.apiKey;

  state.setApiKeyPromise = new Promise((resolve, rejected) => {
    state._resolveSetApiKey = resolve;
    state._rejectedSetApiKey = rejected;
  });

  state.setApiKeyPromise
    .then(() => {
      console.log('!!! succeesssss');
      sendResponse({
        meta: {
          isReady: state.isReady,
          shouldSetApiKey: !state.apiKey,
        },
      });
    })
    .catch((message) => {
      console.log('!!! catch', message);
      sendResponse({
        meta: {
          isReady: state.isReady,
          shouldSetApiKey: true,
          error: 'Invalid APY key',
        },
      });
    });
};
