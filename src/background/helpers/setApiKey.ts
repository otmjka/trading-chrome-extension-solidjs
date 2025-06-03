import { BackgroundState } from '../types';

export const setApiKey = async ({
  sendResponse,
  message,
  state,
}: {
  sendResponse: (response?: any) => void;
  message: any;
  state: BackgroundState;
}) => {
  await state.cabalStorage.setApiKey({ apiKey: message.data.apiKey });
  state.apiKey = message.data.apiKey;
  sendResponse({ status: 'ok' });
};
