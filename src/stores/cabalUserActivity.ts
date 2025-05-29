import { createStore } from 'solid-js/store';

type Status = {
  isReady: boolean;
  count: string;
};

type CabalUserActivityStore = {
  status: Status | undefined;
};

const initValue = {
  status: undefined,
};

const [cabalUserActivity, setCabalUserActivity] =
  createStore<CabalUserActivityStore>(initValue);

export { cabalUserActivity, setCabalUserActivity };
