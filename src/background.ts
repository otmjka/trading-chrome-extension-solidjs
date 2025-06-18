import CabalConnector, {
  type OnMessageParams,
} from './background/CabalConnector';
import { state } from './background/AppState';
import { handleMessagesToBackground } from './background/helpers/handleMessagesToBackground';
import { changeTab } from './background/helpers/changeTab';
import { sendMessageToActiveTab } from './background/helpers/sendMessageToActiveTab';

const start = async () => {
  console.log('cabal background', Date.now());
  const apiKey = await state.cabalStorage.getApiKey();
  state.apiKey = apiKey.apiKey;

  console.log('### apiKey', apiKey.apiKey);
  state.config = await state.cabalStorage.getConfig();
  console.log('### state.config', state.config);

  const cabalConnector = new CabalConnector({
    state,
    onSendMessage: (params: OnMessageParams) => {
      sendMessageToActiveTab(params);
    },
  });

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

      /**
       * 
      chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});
       */
    }
  });

  cabalConnector.initializeCabalService();
};

start();
