import { SaveBuySellSettingsMessage } from '../../shared/types';
import { BackgroundState } from '../types';
import { getMetaByState } from './messagesToContent';

const LOG_DOMAIN = '### INIT_CABAL ###';

export const buysellSettingsChange = async ({
  sendResponse,
  message,
  state,
}: {
  sendResponse: (response?: any) => void;
  message: SaveBuySellSettingsMessage;
  state: BackgroundState;
}) => {
  try {
    await state.cabalStorage.setBuySellSettings(message.data);
    const config = await state.cabalStorage.getConfig();
    state.config = config;

    sendResponse({
      meta: getMetaByState(state),
    });
  } catch (error) {
    console.error(`initCabalOnTab`, error);
  }
};
