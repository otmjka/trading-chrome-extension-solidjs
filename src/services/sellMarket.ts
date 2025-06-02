import {
  BackgroundMessages,
  Bps,
  SellMarketPayloadMessage,
  Mint,
} from '../shared/types';
import { sendMessage } from './sendMessage';

export const sellMarket = ({
  mint,
  amountBps,
  cb,
}: {
  mint: Mint;
  amountBps: Bps;
  cb: (response: any) => void;
}) => {
  const payload: SellMarketPayloadMessage = {
    type: BackgroundMessages.SELL_MARKET,
    data: { mint, amountBps },
  };

  sendMessage({ payload, cb });
};
