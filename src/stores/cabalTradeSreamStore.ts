import { createStore } from 'solid-js/store';

type Status = {
  isReady: boolean;
  count: string;
};

type CabalTradeStreamStore = {
  status: Status | undefined;
};

const initValue = {
  status: undefined,
};

const [cabalTradeStream, setCabalTradeStream] =
  createStore<CabalTradeStreamStore>(initValue);

export { cabalTradeStream, setCabalTradeStream };
