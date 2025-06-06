import CabalConnector from './background/CabalConnector';
import { state } from './background/AppState';

const cabalConnector = new CabalConnector({ state });

const start = async () => {
  console.log('cabal background', Date.now());
  // const apiKey = await state.cabalStorage.getApiKey();
  // state.apiKey = apiKey.apiKey;

  cabalConnector.initializeCabalService();
};

start();
