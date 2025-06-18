import { createStore } from 'solid-js/store';

type ContentAppStore = {
  mint: string | undefined;
  isReady: boolean;
  url: string;
  shouldSetApiKey: boolean;
  apiKeyError?: string;
};

const initValue: ContentAppStore = {
  mint: undefined,
  isReady: false,
  url: '',
  shouldSetApiKey: false,
  apiKeyError: undefined,
};

const [contentAppStore, setContentAppStore] =
  createStore<ContentAppStore>(initValue);

const cleanContentAppStore = () => setContentAppStore({ ...initValue });

export { contentAppStore, setContentAppStore, cleanContentAppStore };
