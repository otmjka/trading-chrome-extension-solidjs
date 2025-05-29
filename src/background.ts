import {
  CabalService,
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
} from './services/cabal-clinet-sdk';
import { config } from './background/backgroundConfig';

console.log('start background service 5');

const TIMEOUT = 500;

let cabal: CabalService | null = null;

let isUserActivityConnected = false;
let isTradeConnected = false;
let reconnectTimeout: number | undefined = undefined;

const cabalInstance = () => cabal;
const setCabalInstance = (value: CabalService | null) => (cabal = value);

const handleUserActivityConnected = () => {
  isUserActivityConnected = true;
  checkConnectionStatus();
};

const handleTradeStreamConnected = () => {
  isTradeConnected = true;
  checkConnectionStatus();
};

const handleUAError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  console.error('User Activity Stream Error');
  scheduleReconnect();
};

const handleTradeError = () => {
  isUserActivityConnected = false;
  isTradeConnected = false;
  console.error('Trade Stream Error');
  scheduleReconnect();
};

const eventDict = {
  [CabalUserActivityStreamMessages.userActivityConnected]:
    handleUserActivityConnected,
  [CabalUserActivityStreamMessages.userActivityError]: handleUAError,

  // trade streams
  [CabalTradeStreamMessages.tradeConnected]: handleTradeStreamConnected,
  [CabalTradeStreamMessages.tradeError]: handleTradeError,
};

const subscribe = (cabal: CabalService) => {
  for (let [eventName, eventHandler] of Object.entries(eventDict)) {
    cabal.on(eventName, eventHandler);
  }
};

const unsubscribe = (cabal: CabalService) => {
  for (let [eventName, eventHandler] of Object.entries(eventDict)) {
    cabal.off(eventName, eventHandler);
  }
};

function checkConnectionStatus() {
  if (isUserActivityConnected && isTradeConnected) {
    console.log('Both streams connected successfully');
    // Additional logic for successful connection if needed
  }
}

const initializeCabalService = () => {
  console.log('initializeCabalService');
  const currentInstance = cabalInstance();

  if (currentInstance) {
    unsubscribe(currentInstance);
    currentInstance.stop();
    setCabalInstance(null);
  }

  if (config.apiKey) {
    const newCabal = new CabalService({
      apiKey: config.apiKey,
      apiUrl: config.apiUrl,
    });

    subscribe(newCabal);
    newCabal.start();
    setCabalInstance(newCabal);
  }
};

function scheduleReconnect() {
  // Clear any existing reconnect timeout
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout);
  }

  // Reset connection flags
  isUserActivityConnected = false;
  isTradeConnected = false;

  // Schedule reconnect
  reconnectTimeout = setTimeout(() => {
    console.log('Attempting to reconnect...');
    initializeCabalService();
  }, TIMEOUT);
}

const autoConnector = () => {
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout);
  }

  // Initialize connection
  initializeCabalService();

  return () => {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
    }
    const currentInstance = cabalInstance();
    if (currentInstance) {
      unsubscribe(currentInstance);
      currentInstance.stop();
      setCabalInstance(null);
    }
  };
};

// Start the auto connector
const cleanup = autoConnector();

// Optional: Handle extension suspension/unload
chrome.runtime.onSuspend.addListener(() => {
  cleanup();
});

// new ConnectToCabalService()

// chrome.runtime.onMessage.addListener()
// <<<- принимаем
/*
// type: subscribe token


когда
при появлении 
при изменении урла
при явной смене токена


// show
возобновляем посылку событий

// hide
останавливаем посылку событий
// close



*/
