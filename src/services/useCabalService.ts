import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from './cabal-clinet-sdk';

const handleUserActivityConnected = () =>
  setCabalUserActivity('status', { isReady: true, count: '' });

const handleUserActivityPong = (eventValue: {
  count: string;
  isReady: boolean;
}) => {
  setCabalUserActivity('status', eventValue);
};

const handleUserActivityError = () => {
  setCabalUserActivity('status', undefined);
};

// Trades

const handleTradeStreamConnected = () =>
  setCabalTradeStream('status', { isReady: true, count: '' });

const handleTradeStreamPong = (eventValue: {
  count: string;
  isReady: boolean;
}) => {
  setCabalTradeStream('status', eventValue);
};

const handleTradeError = () => {
  setCabalTradeStream('status', undefined);
};

export const messageListener = (message, sender, sendResponse) => {
  console.log(`received message: ${message?.type} name: ${message?.eventName}`);
  const messageType = message?.type;
  if (messageType !== 'CABAL_EVENT') {
    return;
  }
  const messageEventName = message?.eventName;

  switch (messageEventName) {
    case CabalUserActivityStreamMessages.userActivityConnected:
      handleUserActivityConnected();
      break;
    case CabalUserActivityStreamMessages.userActivityPong:
      handleUserActivityPong(message.data);
      break;
    case CabalUserActivityStreamMessages.userActivityError:
      handleUserActivityError();
      break;
    // trade streams
    case CabalTradeStreamMessages.tradeConnected:
      handleTradeStreamConnected();
      break;
    case CabalTradeStreamMessages.tradePong:
      handleTradeStreamPong(message.data);
      break;
    case CabalTradeStreamMessages.tradeError:
      handleTradeError();
      break;

    default:
      console.log(`unknown message: ${messageType}`);
  }
};

export function useStartCabalService() {
  return {
    start: () => chrome.runtime.onMessage.addListener(messageListener),
    clean: () => chrome.runtime.onMessage.removeListener(messageListener),
  };
}
