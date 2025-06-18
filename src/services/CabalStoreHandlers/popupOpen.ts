import { setContentAppStore } from '../../stores/contentAppStore';
import {
  BackgroundMessages,
  MessageToBgPayload,
  PopupOpenResponse,
} from '../../shared/types';
import { sendMessage } from '../sendMessage';

export const popupOpen = () => {
  const payload: MessageToBgPayload = {
    type: BackgroundMessages.POPUP_OPEN,
  };

  const cb = (response: PopupOpenResponse) => {
    console.log('### respose', response);
    setContentAppStore('isReady', response.isReady);
    setContentAppStore('shouldSetApiKey', response.shouldSetApiKey);
  };

  sendMessage({ payload, cb });
};
