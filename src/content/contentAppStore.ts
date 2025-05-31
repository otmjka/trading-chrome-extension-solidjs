import { createStore } from 'solid-js/store';

type ContentAppStore = {
  mint: string | undefined;
  isReady: boolean;
  url: string;
};

const initValue: ContentAppStore = {
  mint: undefined,
  isReady: false,
  url: '',
};

const [contentAppStore, setContentAppStore] =
  createStore<ContentAppStore>(initValue);

export { contentAppStore, setContentAppStore };
