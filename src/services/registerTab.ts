import { setContentAppStore } from '../stores/contentAppStore';
import {
  BackgroundMessages,
  BgInitMessageResponse,
  BgMessageCb,
  InitCabalOnTabMessage,
} from '../shared/types';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import { sendMessage } from './sendMessage';

export const registerTab = ({ locationHref }: { locationHref: string }) => {
  const payload: InitCabalOnTabMessage = {
    type: BackgroundMessages.INIT_CABAL,
    data: { url: locationHref },
  };

  const cb = (response: BgInitMessageResponse) => {
    console.log('### respose', response);
    setContentAppStore('url', response.url);
    setContentAppStore('mint', response.mint);
    setContentAppStore('isReady', response.isReady);
    setContentAppStore('shouldSetApiKey', !response.apiKey);

    if (response.isReady) {
      setCabalUserActivity('status', {
        isReady: true,
        count: String(Date.now()),
      });
      setCabalTradeStream('status', {
        isReady: true,
        count: String(Date.now()),
      });
    }
  };

  sendMessage({ payload, cb });
};
