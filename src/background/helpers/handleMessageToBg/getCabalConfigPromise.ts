import { BackgroundState } from '../../types';

export const getCabalConfigPromise = async ({
  sendResponse,
  state,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
}) => {
  try {
    const config = await state.cabalStorage.getConfig();
    sendResponse({
      config,
    });
  } catch (error) {
    console.error(`getCabalConfigPromise`, error);
  }
};
