import { setTradeWidgetState, tradeWidgetState } from './tradeWidgetStateStore';

export const onSellInputChange = (value: unknown) => {
  if (typeof value !== 'string') {
    setTradeWidgetState('sellInputValue', tradeWidgetState.sellInputValue);
  }

  const num = parseFloat(value as string);
  if (!isNaN(num) && num.toString() === (value as string).trim()) {
    setTradeWidgetState('sellInputValue', value as string);
    setTradeWidgetState('sellPercents', String(value));
  } else {
    setTradeWidgetState('sellInputValue', tradeWidgetState.sellInputValue);
  }
};
