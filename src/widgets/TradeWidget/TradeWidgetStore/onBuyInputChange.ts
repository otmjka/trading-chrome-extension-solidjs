import { setTradeWidgetState, tradeWidgetState } from './tradeWidgetStateStore';

export const onBuyInputChange = (value: unknown) => {
  if (typeof value !== 'string') {
    setTradeWidgetState('buyInputValue', tradeWidgetState.buyInputValue);
  }

  const num = parseFloat(value as string);
  if (!isNaN(num) && num.toString() === (value as string).trim()) {
    setTradeWidgetState('buyInputValue', value as string);
    setTradeWidgetState('solCount', String(value));
  } else {
    setTradeWidgetState('buyInputValue', tradeWidgetState.buyInputValue);
  }
};
