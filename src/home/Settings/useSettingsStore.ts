import { createSignal } from 'solid-js';

import { TabNames } from './Settings.enums';
import { initValue } from './BuySellSettingsForm/createBuySellStore';
import { BuySellSettingsStore } from '../../shared/cabalConfigTypes';
import { SettingsHandlers } from './types';

export const useSettingsStore = ({
  saveBSConfig,
  handlers,
}: {
  handlers: SettingsHandlers;
  saveBSConfig: (value: BuySellSettingsStore) => void;
}) => {
  const [selectedTab, setSelectedTab] = createSignal(TabNames.buysell);
  const [bsValue, setBSValue] = createSignal<BuySellSettingsStore>(initValue);

  const handleSubmitBuySell = (value: BuySellSettingsStore) => {
    console.log('### # # #### # #. ####', value);
    const result = {
      buyPresets: value.buyPresets.map((value) => value),
      sellPresetsSol: value.sellPresetsSol.map((value) => value),
      sellPresetsPerc: value.sellPresetsPerc.map((value) => value),

      buyTip: value.buyTip,
      sellTip: value.sellTip,

      buyPriorityFee: value.buyPriorityFee,
      sellPriorityFee: value.sellPriorityFee,

      buySlippage: value.buySlippage,
      sellSlippage: value.sellSlippage,
    };
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
