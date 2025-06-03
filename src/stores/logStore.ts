import { createStore } from 'solid-js/store';
import { FromBackgroundMessage } from '../shared/types';

export type LogRecord = { type: string; event: unknown };

type LogStore = {
  logs: LogRecord[];
};

const initValue = {
  logs: [],
};

const [logStore, setLogStore] = createStore<LogStore>(initValue);

const addLogRecord = (message: FromBackgroundMessage) =>
  setLogStore('logs', (prev) => [
    { type: message.eventName, event: message },
    ...prev,
  ]);
export { logStore, setLogStore, addLogRecord };
