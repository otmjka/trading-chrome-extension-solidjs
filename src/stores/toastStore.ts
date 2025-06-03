import { createStore } from 'solid-js/store';
import { FromBackgroundMessage } from '../shared/types';

export type ToastRecord = { type: string; event: unknown };

type ToastStore = {
  items: ToastRecord[];
};

const initValue = {
  items: [],
};

const [toastStore, setToastStore] = createStore<ToastStore>(initValue);

const addToast = (message: FromBackgroundMessage) =>
  setToastStore('items', (prev) => [
    { type: message.eventName, event: message },
    ...prev,
  ]);
export { toastStore, setToastStore, addToast };
