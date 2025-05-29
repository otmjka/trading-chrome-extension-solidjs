import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import {
  CabalTradeStreamMessages,
  CabalUserActivityStreamMessages,
  UserResponse,
} from './cabal-clinet-sdk';

const handleUserActivityConnected = () =>
  setCabalUserActivity('connected', true);

const handleUserActivityPong = (eventValue: UserResponse) => {
  setCabalUserActivity('pong', eventValue.count as { count: bigint });
};

const handleUserActivityError = () => {
  setCabalUserActivity('connected', false);
};

// Trades

const handleTradeStreamConnected = () => setCabalTradeStream('connected', true);

const handleTradeStreamPong = (eventValue: UserResponse) => {
  setCabalTradeStream('pong', eventValue.count as { count: bigint });
};

const handleTradeError = () => {
  setCabalTradeStream('connected', false);
};

const messageListener = (message, sender, sendResponse) => {
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
