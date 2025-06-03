import { defaultBuyQuicks, defaultSellQuicks, TradeDir } from '../enums';

export const initValue = {
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
  tradeStats: null,
  lastTradeEvent: null,
  //
  loading: true,

  // Trade Stats
  solBalanceLabel: '',
};
