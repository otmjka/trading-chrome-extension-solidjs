// store/buySellSettingsStore.ts
import { createStore } from 'solid-js/store';
import { BuySellSettingsStore } from '../../../types/cabalConfigTypes';

export const initValue = {
  buyPresets: ['0.5', '1', '2', '5'],
  sellPresetsSol: ['0.25', '0.5', '0.2', '0.3'],
  sellPresetsPerc: ['10', '20', '40', '80'],
  buyTip: '0.005',
  sellTip: '0.006',
  buyPriorityFee: '0.0003',
  sellPriorityFee: '0.0004',
  buySlippage: '25',
  sellSlippage: '35',
};

export const createBuySellSettingsStore = (
  initialValue: BuySellSettingsStore,
) => {
  const [store, setStore] = createStore<BuySellSettingsStore>(initialValue);

  return { store, setStore };
};
