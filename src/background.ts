import CabalConnector from './background/CabalConnector';
import { state } from './background/AppState';
import { handleMessagesToBackground } from './background/helpers/handleMessagesToBackground';
import { changeTab } from './background/helpers/changeTab';

const cabalConnector = new CabalConnector({ state });

const start = async () => {
  console.log('cabal background', Date.now());
  const apiKey = await state.cabalStorage.getApiKey();
  state.apiKey = apiKey.apiKey;

  console.log('###', apiKey.apiKey);
  const messagesToBackgroundHandler = handleMessagesToBackground({ state });

  const tabsOnActivatedHandler = changeTab({ state });

  chrome.runtime.onMessage.addListener(messagesToBackgroundHandler);

  chrome.tabs.onActivated.addListener(tabsOnActivatedHandler);

  chrome.runtime.onInstalled.addListener(async (details) => {
    if (details.reason === 'install') {
      state.cabalStorage?.init();
    }
  });

  chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log('storage changes!');
    if (namespace === 'local' && changes.apiKey) {
      const newApiKey = changes.apiKey.newValue;
      console.log('API-ключ изменен:', newApiKey);
      state.apiKey = newApiKey;
      if (state.apiKey) {
        cabalConnector.scheduleReconnect();
      }

      if (!state.apiKey) {
        cabalConnector.cleanCabalService();
      }
      // initializeCabalService();
      // Дополнительная логика, например, обновление настроек API
    }
  });

  cabalConnector.initializeCabalService();
};

start();
