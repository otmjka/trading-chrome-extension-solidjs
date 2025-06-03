import { defaultState } from './enums';

class CabalStorage {
  async init() {
    return chrome.storage.local.set(defaultState);
  }

  async getApiKey() {
    return chrome.storage.local.get(['apiKey']);
  }

  async setApiKey({ apiKey }: { apiKey: string | null }) {
    return chrome.storage.local.set({ apiKey });
  }
}

export default CabalStorage;
