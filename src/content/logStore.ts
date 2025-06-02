import { createStore } from 'solid-js/store';

export type LogRecord = { type: string; event: unknown };

type LogStore = {
  logs: LogRecord[];
};

const initValue = {
  logs: [],
};

const [logStore, setLogStore] = createStore<LogStore>(initValue);

export { logStore, setLogStore };
