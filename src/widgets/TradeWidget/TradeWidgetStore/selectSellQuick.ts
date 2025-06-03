import { QuickItem } from '../types';
import { setTradeWidgetState, tradeWidgetState } from './tradeWidgetStateStore';

export const selectSellQuick = (quickItem: QuickItem) => {
  const activeSellQuickIndex = tradeWidgetState.sellQuicks.findIndex(
    (item) => item.value === quickItem.value,
  );

  setTradeWidgetState('activeSellQuickIndex', activeSellQuickIndex);

  setTradeWidgetState(
    'sellInputValue',
    tradeWidgetState.sellQuicks[activeSellQuickIndex].value,
  );

  const sellPercents = tradeWidgetState.sellQuicks[activeSellQuickIndex].value;
  setTradeWidgetState('sellPercents', sellPercents);
};
