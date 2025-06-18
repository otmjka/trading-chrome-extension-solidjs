import { Accessor } from 'solid-js';
import { BuySellSettingsStore } from '../../types/cabalConfigTypes';

export type BuySellSettingsFormState = {
  value: Accessor<BuySellSettingsStore>;
  onSubmit: (value: BuySellSettingsStore) => void;
};

export type SettingsHandlers = {
  onReset: () => void;
};
