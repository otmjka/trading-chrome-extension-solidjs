import { stringToFloat } from '../helpers/stringToFloat';
import { tradeWidgetState } from './tradeWidgetStateStore';
import { marketSell } from '../../../services/useCabalService';

export const sellMarket = () => {
  try {
    if (!tradeWidgetState.sellPercents) {
      return;
    }
    if (!tradeWidgetState.tokenStatus) {
      return;
    }
    const amount = stringToFloat(tradeWidgetState.sellPercents);
    const mintValue = tradeWidgetState.tokenStatus.mint;
    if (!amount || !mintValue) {
      return;
    }

    const result = marketSell({ mint: mintValue, percents: amount });
    // const result = placeLimitOrders({ mint: mintValue });

    console.log('#$$$#', result);
  } catch (error) {
    console.error(error);
  }
};
