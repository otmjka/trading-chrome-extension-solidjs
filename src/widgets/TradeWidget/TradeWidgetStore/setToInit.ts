import { initValue } from './enums';
import { setTradeWidgetState } from './tradeWidgetStateStore';

export const setToInit = () => {
  setTradeWidgetState({ ...initValue });
};
