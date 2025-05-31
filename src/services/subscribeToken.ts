import { BackgroundMessages, Mint } from '../shared/types';
import { sendMessage } from './sendMessage';

export const subscribeToken = ({
  mint,
  cb,
}: {
  mint: Mint;
  cb: (response: any) => void;
}) => {
  const payload = {
    type: BackgroundMessages.SUBSCRIBE_TOKEN,
    data: { mint },
  };

  sendMessage({ payload, cb });
};
