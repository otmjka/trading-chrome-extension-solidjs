import CabalConnector, {
  type OnMessageParams,
} from './background/CabalConnector';
import { state } from './background/AppState';
import { handleMessagesToBackground } from './background/helpers/handleMessagesToBackground';
import { changeTab } from './background/helpers/changeTab';
import { sendMessageToActiveTab } from './background/helpers/sendMessageToActiveTab';
import * as messagesToContent from './background/helpers/messagesToContent';

const start = async () => {
  console.log('cabal background', Date.now());
  const apiKey = await state.cabalStorage.getApiKey();
  state.apiKey = apiKey.apiKey;

  console.log('### apiKey', apiKey.apiKey);
  state.config = await state.cabalStorage.getConfig();
  console.log('### state.config', state.config);
  if (!state.config) {
    console.log(`[background] no config, will init`);
    await state.cabalStorage?.init();
    const config = await state.cabalStorage.getConfig();
    state.config = config;
    console.log(`[background] state config`, state.config);
  }

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

  chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log('[background] storage changes!', namespace, changes);

    if (namespace === 'local' && changes.config) {
      console.log(`[background] send config changed`);
      state.config = changes.config.newValue;

      sendMessageToActiveTab({
        message: messagesToContent.configChanged({ state }),
        state,
      });
    }

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
