import { BackgroundState } from '../../types';

export const setCabalStorageToDefault = async ({
  sendResponse,
  state,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
}) => {
  try {
    await state.cabalStorage.setToDefault();
    sendResponse({});
  } catch (error) {
    console.error(`setCabalStorageToDefault`, error);
  }
};
