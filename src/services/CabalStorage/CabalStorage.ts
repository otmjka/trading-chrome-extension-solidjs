import { defaultCabalConfig } from './defaultCabalStorageValue';
import { BuySellConfig, CabalConfig } from './types';

class CabalStorage {
  async init() {
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['migrationSnipe'])
    // chrome.storage.local.get(['limit'])
    // chrome.storage.local.get(['txProcessors'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    return chrome.storage.local.set({ config: defaultCabalConfig });
  }

  async setToDefault() {
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['migrationSnipe'])
    // chrome.storage.local.get(['limit'])
    // chrome.storage.local.get(['txProcessors'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    return chrome.storage.local.set({ config: defaultCabalConfig });
  }

  async getConfig(): Promise<CabalConfig> {
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['migrationSnipe'])
    // chrome.storage.local.get(['limit'])
    // chrome.storage.local.get(['txProcessors'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    // chrome.storage.local.get(['buySell'])
    const result = await chrome.storage.local.get<{ config: CabalConfig }>([
      'config',
    ]);
    return result.config;
  }

  async getApiKey() {
    return chrome.storage.local.get(['apiKey']);
  }

  async setApiKey({ apiKey }: { apiKey: string | null }) {
    return chrome.storage.local.set({ apiKey });
  }

  async setBuySellSettings(value: BuySellConfig) {
    const { config } = await chrome.storage.local.get<{ config: CabalConfig }>([
      'config',
    ]);
    const newBuySellValue = { ...config.buySell, ...value };
    const newConfig = { ...config, buySell: newBuySellValue };
    await chrome.storage.local.set({ config: newConfig });
  }
}

export default CabalStorage;
