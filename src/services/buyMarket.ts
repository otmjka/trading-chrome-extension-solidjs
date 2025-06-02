import {
  BackgroundMessages,
  BuyMarketPayloadMessage,
  Mint,
} from '../shared/types';
import { sendMessage } from './sendMessage';

export const buyMarket = ({
  mint,
  amountSol,
  cb,
}: {
  mint: Mint;
  amountSol: number;
  cb: (response: any) => void;
}) => {
  const payload: BuyMarketPayloadMessage = {
    type: BackgroundMessages.BUY_MARKET,
    data: { mint, amountSol },
  };

  sendMessage({ payload, cb });
};
