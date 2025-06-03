import { createStore } from 'solid-js/store';
import { QuickItem } from '../types';
import { createEffect } from 'solid-js';
import { TokenStatus } from '../../../services/cabal-clinet-sdk';
import { stringToFloat } from '../helpers/stringToFloat';
import { marketBuy, marketSell } from '../../../services/useCabalService';
import { TradeWidgetState } from './types';
import { initValue } from './enums';
import { selectBuyQuick } from './selectBuyQuick';
import { buyMarket } from './buyMarket';
import { onBuyInputChange } from './onBuyInputChange';
import { selectSellQuick } from './selectSellQuick';
import { sellMarket } from './sellMarket';
import { onSellInputChange } from './onSellInputChange';
import { TokenStatusParsed } from '../../../shared/types';
import { formatLamports } from '../helpers/formatLamports';

const [tradeWidgetState, setTradeWidgetState] =
  createStore<TradeWidgetState>(initValue);

export { tradeWidgetState, setTradeWidgetState };

// calculate Buy button label
createEffect(() => {
  if (!tradeWidgetState.tokenStatus) {
    return;
  }

  if (tradeWidgetState.activeBuyQuickIndex === null) {
    return;
  }

  // {tradeWidgetState.dir} {amountSol()} SOL *{ticker()}*
  setTradeWidgetState(
    'buySellButtonLabel',
    `${tradeWidgetState.dir} ${tradeWidgetState.solCount} SOL | ${tradeWidgetState.tokenStatus.ticker}`,
  );

  const disablebuySellButton = false;
  setTradeWidgetState('disablebuySellButton', disablebuySellButton);
});

// sell

// calculate Sell button label
createEffect(() => {
  if (!tradeWidgetState.tokenStatus) {
    return;
  }

  if (tradeWidgetState.activeSellQuickIndex === null) {
    return;
  }

  // {tradeWidgetState.dir} {amountSol()} SOL *{ticker()}*
  setTradeWidgetState(
    'sellButtonLabel',
    `!${tradeWidgetState.dir} ${tradeWidgetState.sellPercents}% | ${tradeWidgetState.tokenStatus.ticker}`,
  );

  const disableSellButton = false;
  setTradeWidgetState('disableSellButton', disableSellButton);
});

createEffect(() => {
  if (!tradeWidgetState.tradeStats) {
    return;
  }

  const solBalanceLabel = formatLamports({
    solBalance: tradeWidgetState.tradeStats.solBalance,
    tokenDecimals: 9,
  });
  const tokenDecimals = tradeWidgetState.tradeStats.tokenDecimals;

  const labelBuyToken = formatLamports({
    solBalance: tradeWidgetState.tradeStats.buyBase,
    tokenDecimals,
  });

  const labelSellToken = formatLamports({
    solBalance: tradeWidgetState.tradeStats.sellBase,
    tokenDecimals,
  });

  const labelTokenBalance = formatLamports({
    solBalance: tradeWidgetState.tradeStats.tokenBalance,
    tokenDecimals,
  });

  setTradeWidgetState('solBalanceLabel', solBalanceLabel);
  setTradeWidgetState('labelBuyToken', labelBuyToken);
  setTradeWidgetState('labelSellToken', labelSellToken);
  setTradeWidgetState('labelTokenBalance', labelTokenBalance);
});

export const handlers = {
  selectBuyQuick,
  buyMarket,
  onBuyInputChange,

  selectSellQuick,
  sellMarket,
  onSellInputChange,
};

// external connectors

export const setTokenStatus = (tokenStatus: TokenStatusParsed) => {
  setTradeWidgetState('tokenStatus', tokenStatus);
};
