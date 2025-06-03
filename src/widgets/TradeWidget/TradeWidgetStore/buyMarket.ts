import { stringToFloat } from '../helpers/stringToFloat';
import { tradeWidgetState } from './tradeWidgetStateStore';
import { marketBuy } from '../../../services/useCabalService';

export const buyMarket = async () => {
  try {
    if (!tradeWidgetState.solCount) {
      return;
    }

    if (!tradeWidgetState.tokenStatus) {
      return;
    }

    const amount = stringToFloat(tradeWidgetState.solCount);
    const mintValue = tradeWidgetState.tokenStatus.mint;
    if (!amount || !mintValue) {
      return;
    }

    const result = await marketBuy({ amount, mint: mintValue });
    console.log('$$$#', result);
  } catch (error) {
    console.error(error);
  }
};
