import { QuickItem } from '../types';
import { setTradeWidgetState, tradeWidgetState } from './tradeWidgetStateStore';

export const selectBuyQuick = (quickItem: QuickItem) => {
  const activeBuyQuickIndex = tradeWidgetState.buyQuicks.findIndex(
    (item) => item.value === quickItem.value,
  );
  setTradeWidgetState('activeBuyQuickIndex', activeBuyQuickIndex);
  setTradeWidgetState(
    'buyInputValue',
    tradeWidgetState.buyQuicks[activeBuyQuickIndex].value,
  );
  const solCount = tradeWidgetState.buyQuicks[activeBuyQuickIndex].value;
  setTradeWidgetState('solCount', solCount);
};
