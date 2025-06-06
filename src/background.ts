import CabalConnector from './background/CabalConnector';
const cabalConnector = new CabalConnector();

const start = () => {
  console.log('proba', Date.now());
  cabalConnector.initializeCabalService();
};

start();
