import { SetApiKeyPromiseResponse } from '../../shared/types';
import { BackgroundState } from '../types';

export const setApiKey = async ({
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
  sendResponse({
    meta: {
      isReady: state.isReady,
      shouldSetApiKey: !state.apiKey,
    },
  });
};
