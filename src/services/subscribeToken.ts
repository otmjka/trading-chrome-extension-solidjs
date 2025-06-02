import {
  BackgroundMessages,
  Mint,
  SubscribeTokenPayloadMessage,
  SubscribeTokenResponse,
} from '../shared/types';
import { sendMessage } from './sendMessage';

export const subscribeToken = ({
  mint,
  cb,
}: {
  mint: Mint;
  cb: (response: SubscribeTokenResponse) => void;
}) => {
  const payload: SubscribeTokenPayloadMessage = {
    type: BackgroundMessages.SUBSCRIBE_TOKEN,
    data: { mint },
  };

  sendMessage({ payload, cb });
};
