type AutoLimitSellItem = {
  type: string; // 'TakeProfit Trailing',
  color?: string; // 'red',
  priorityFee: number; // '0.0005',
  tip: number; //'0.005',
  slippage: number; //'25',
  position: number; //'50',
  profit: number; //'100',
};

type AutoLimitBuyItem = {
  type: string; // 'TakeProfit Trailing',
  color?: string; // 'red',
  priorityFee: number; // '0.0005',
  tip: number; //'0.005',
  slippage: number; //'25',
  amount: number; //'50',
  target: number; //'100',
};

type AutoLimitPreset = {
  name: string;
  sellLimits: Array<AutoLimitSellItem>;
  buyLimits: Array<AutoLimitBuyItem>;
};

type AutoLimitConfig = {
  setAutoLimitIfTrade: boolean;
  presets: Array<AutoLimitPreset>;
};
type Presets = number[];
export type BuySellConfig = {
  buyPresetsSol: Presets; // [0.5, 1, 2, 5];
  sellPresetsSol: Presets; // [0.5, 1, 2, 5];

  buyPresetsPerc: Presets; // [1, 10, 15, 20];
  sellPresetsPerc: Presets; // [1, 10, 15, 20];

  buyTip: number; // 0.001;
  sellTip: number; // 0.001;

  buyPriorityFee: number; // 0.01;
  sellPriorityFee: number; // 0.01;

  buySlippage: number; // 25;
  sellSlippage: number; // 20;
};

export type TXProcessorsConfig = {
  cabal: boolean;
  nozomi: boolean;
  astra_iris: boolean;
  jito_validators: boolean;
  blox_route: boolean;
  next_block: boolean;
  '0slot_trade': boolean;
};

export type LimitConfig = {
  buyTip: number; // 0.001;
  sellTip: number; // 0.001;

  buyPriorityFee: number; // 0.01;
  sellPriorityFee: number; // 0.01;

  buySlippage: number; // 25;
  sellSlippage: number; // 20;

  mcPerc: Array<number>; // [-100, -50, 50, 100];
};

export type MigrationSnipeConfig = {
  buyAmount: number; // 0.005;
  sellAmountPerc: number; // 10;

  buyTip: number; // 0.001;
  sellTip: number; // 0.001;

  buyPriorityFee: number; // 0.01;
  sellPriorityFee: number; // 0.01;

  buySlippage: number; // 25;
  sellSlippage: number; // 20;
};

export type CabalConfig = {
  quickBuyAmount: number;
  autoLimit: AutoLimitConfig;
  buySell: BuySellConfig;
  migrationSnipe: MigrationSnipeConfig;
  limit: LimitConfig;
  txProcessors: TXProcessorsConfig;
};

export type CabalStorageValue = {
  apiKey: null | string;
  config: CabalConfig;
};
