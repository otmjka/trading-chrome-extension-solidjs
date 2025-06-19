import { createStore } from 'solid-js/store';
import { CabalConfig } from '../services/CabalStorage/types';

type ConfigStore = {
  config: CabalConfig | null;
};

const initValue = {
  config: null,
};

const [configStore, setConfigStore] = createStore<ConfigStore>(initValue);

export { configStore, setConfigStore };
