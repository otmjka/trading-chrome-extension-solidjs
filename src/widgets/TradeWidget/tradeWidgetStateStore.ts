import { createStore } from 'solid-js/store';
import { defaultBuyQuicks, defaultSellQuicks, TradeDir } from './enums';
import { QuickItem } from './types';
import { createEffect } from 'solid-js';
import { TokenStatus } from '../../services/cabal-clinet-sdk';
import { stringToFloat } from './helpers/stringToFloat';
import { marketBuy, marketSell } from '../../services/useCabalService';

type TradeWidgetState = {
  dir: TradeDir;

  // buy/sell button
  buyQuicks: Array<QuickItem>;
  activeBuyQuickIndex: null | number;
  buySellButtonLabel: string;
  disablebuySellButton: boolean;
  buyInputValue: null | string;
  // buy value
  solCount: string | null;

  // sell
  sellQuicks: Array<QuickItem>;
  activeSellQuickIndex: null | number;
  sellPercents: string | null;
  sellButtonLabel: string;
  disableSellButton: boolean;
  sellInputValue: null | string;

  // external

  tokenStatus: null | TokenStatus;

  //
  loading: boolean;
};

const initValue = {
  dir: TradeDir.Buy,

  // buy
  buyQuicks: defaultBuyQuicks,
  activeBuyQuickIndex: null,
  solCount: null,
  buySellButtonLabel: '',
  disablebuySellButton: true,
  buyInputValue: null,

  // sell
  sellQuicks: defaultSellQuicks,
  activeSellQuickIndex: null,
  sellPercents: null,
  sellButtonLabel: '',
  disableSellButton: true,
  sellInputValue: null,

  // external
  tokenStatus: null,

  //
  loading: true,
};

const [tradeWidgetState, setTradeWidgetState] =
  createStore<TradeWidgetState>(initValue);

export { tradeWidgetState, setTradeWidgetState };

const selectBuyQuick = (quickItem: QuickItem) => {
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

const buyMarket = async () => {
  debugger;
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
  try {
    const result = await marketBuy({ amount, mint: mintValue });
    console.log('$$$#', result);
  } catch (error) {
    console.error(error);
  }
};

const onBuyInputChange = (value: unknown) => {
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

// sell

const selectSellQuick = (quickItem: QuickItem) => {
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

const onSellInputChange = (value: unknown) => {
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

const sellMarket = () => {
  debugger;
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

  try {
    const result = marketSell({ mint: mintValue, percents: amount });
    // const result = placeLimitOrders({ mint: mintValue });

    console.log('#$$$#', result);
  } catch (error) {
    console.error(error);
  }
};

export const handlers = {
  selectBuyQuick,
  buyMarket,
  onBuyInputChange,

  selectSellQuick,
  sellMarket,
  onSellInputChange,
};

// external connectors

export const setTokenStatus = (tokenStatus: TokenStatus) => {
  setTradeWidgetState('tokenStatus', tokenStatus);
};

// direction: buy/sell

// type: market | limit | trailing | auto limit

// wallets
//   name: // wallet 1
//   secret key
//   // wallet address
//   // balance

// ===
// solBalance // tradeStats

// ===
// defaultsButtons
// 0.001 | 1 | 2 | 5

// selectedQuickAmount
// solAmount

// slippage
// tip
// ? auto
// ? MEV
// ? calc
