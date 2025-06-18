export type BuyPresetsValues = string[];
export type SellPresetsSolValues = string[];
export type SellPresetsPercValues = string[];
export type McParamsValues = string[];

export type BuySellSettingsStore = {
  buyPresets: BuyPresetsValues;
  sellPresetsSol: SellPresetsSolValues;
  sellPresetsPerc: SellPresetsPercValues;
  buyTip: string;
  sellTip: string;
  buyPriorityFee: string;
  sellPriorityFee: string;
  buySlippage: string;
  sellSlippage: string;
};
