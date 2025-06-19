import { createSignal } from 'solid-js';

import { TabNames } from './Settings.enums';
import { initValue } from './BuySellSettingsForm/createBuySellStore';
import { BuySellSettingsStore } from '../../shared/cabalConfigTypes';
import { SettingsHandlers } from './types';
import { BuySellConfig } from '../../services/CabalStorage/types';
import { configStore } from '../../stores/configStore';

const parseBSConfig = (
  value: BuySellConfig | undefined,
): BuySellSettingsStore | undefined => {
  if (!value) {
    return;
  }

  return {
    buyPresets: value.buyPresetsSol.map((value) => String(value)),
    sellPresetsSol: value.sellPresetsSol.map((value) => String(value)),

    // buyPresetsPerc: value.buyPresetsPerc.map((value) => String(value)),

    sellPresetsPerc: value.sellPresetsPerc.map((value) => String(value)),

    buyTip: String(value.buyTip),
    sellTip: String(value.sellTip),

    buyPriorityFee: String(value.buyPriorityFee),
    sellPriorityFee: String(value.sellPriorityFee),

    buySlippage: String(value.buySlippage),
    sellSlippage: String(value.sellSlippage),
  };
};

export const useSettingsStore = ({
  saveBSConfig,
  handlers,
}: {
  handlers: SettingsHandlers;
  saveBSConfig: (value: BuySellConfig) => void;
}) => {
  const [selectedTab, setSelectedTab] = createSignal(TabNames.buysell);
  const [bsValue, setBSValue] = createSignal<BuySellSettingsStore>(
    parseBSConfig(configStore.config?.buySell) || initValue,
  );

  const handleSubmitBuySell = (value: BuySellSettingsStore) => {
    console.log('### # # #### # #. ####', value);
    const result: BuySellConfig = {
      buyPresetsSol: value.buyPresets.map((value) => Number(value)),
      sellPresetsSol: value.sellPresetsSol.map((value) => Number(value)),

      buyPresetsPerc: [1, 10, 15, 20],
      sellPresetsPerc: value.sellPresetsPerc.map((value) => Number(value)),

      buyTip: Number(value.buyTip),
      sellTip: Number(value.sellTip),

      buyPriorityFee: Number(value.buyPriorityFee),
      sellPriorityFee: Number(value.sellPriorityFee),

      buySlippage: Number(value.buySlippage),
      sellSlippage: Number(value.sellSlippage),
    };

    /*
    buyPresetsSol: [0.5, 1, 2, 5],
    sellPresetsSol: [0.5, 1, 2, 5],

    buyPresetsPerc: [1, 10, 15, 20],
    sellPresetsPerc: [1, 10, 15, 20],

    buyTip: 0.001,
    sellTip: 0.001,

    buyPriorityFee: 0.01,
    sellPriorityFee: 0.01,

    buySlippage: 25,
    sellSlippage: 20,
    */
    console.log(result);
    saveBSConfig(result);
    setBSValue(value);
  };

  const handleSetStorageToDefault = () => {
    console.log('!handleSetStorageToDefault');
    handlers.onReset();
  };

  return {
    selectedTab,
    setSelectedTab,

    bsState: {
      value: bsValue,
      onSubmit: handleSubmitBuySell,
    },

    others: {
      onSetStorageToDefault: handleSetStorageToDefault,
    },
  };
};
