import { CabalService } from '../../services/cabal-clinet-sdk';
import {
  BackgroundMessages,
  BuyMarketPayloadMessage,
  MessageToBgPayload,
  SellMarketPayloadMessage,
  SubscribeTokenPayloadMessage,
  SubscribeTokenPromisePayloadMessage,
} from '../../shared/types';
import { BackgroundState, ContentListener } from '../types';
import { buysellSettingsChange } from './buysellSettingsChange';
import { handleBuyMarketMessage } from './handleBuyMarketMessage';
import { getCabalConfigPromise } from './handleMessageToBg/getCabalConfigPromise';
import { setCabalStorageToDefault } from './handleMessageToBg/setCabalStorageToDefault';
import { handleSellMarketMessage } from './handleSellMarketMessage';
import { handleSubscribeTokenMessage } from './handleSubscribeTokenMessage';
import { handleSubscribeTokenPromiseMessage } from './handleSubscribeTokenPromiseMessage';
import { initCabalOnTab } from './initCabalOnTab';
import { setApiKey } from './setApiKey';
import { setApiKeyPromise } from './setApiKeyPromise';

export const handleMessagesToBackground =
  ({ state }: { state: BackgroundState }) =>
  (
    message: MessageToBgPayload,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void,
  ) => {
    console.log('%%% %%% receive', message, sender);
    switch (message.type) {
      case BackgroundMessages.BUY_SELL_SETTINGS_CHANGE:
        buysellSettingsChange({
          sendResponse,
          message,
          state,
        });
        return true;
      case BackgroundMessages.SET_STORAGE_TO_DEFAULT:
        setCabalStorageToDefault({ sendResponse, state });
        return true;
      case BackgroundMessages.GET_CONFIG_PROMISE:
        getCabalConfigPromise({ sendResponse, state });
        return true;
      case BackgroundMessages.POPUP_OPEN:
        sendResponse({
          shouldSetApiKey: !state.apiKey,
          isReady: state.isReady,
        });

        return true;
      case BackgroundMessages.SET_APIKEY:
        console.log('!!!', message);
        setApiKey({ sendResponse, message, state });

        return true;
      case BackgroundMessages.SET_APIKEY_PROMISE:
        console.log('!!! SET_APIKEY_PROMISE', message);
        setApiKeyPromise({ sendResponse, message, state });

        return true;
      case BackgroundMessages.INIT_CABAL:
        initCabalOnTab({
          sendResponse,
          message,
          state,
        });
        return true;
      case BackgroundMessages.SUBSCRIBE_TOKEN_PROMISE:
        handleSubscribeTokenPromiseMessage({
          sendResponse,
          state,
          message: message as SubscribeTokenPromisePayloadMessage,
        });
        return true;
      case BackgroundMessages.SUBSCRIBE_TOKEN:
        handleSubscribeTokenMessage({
          sendResponse,
          state,
          message: message as SubscribeTokenPayloadMessage,
        });
        return true;
      case BackgroundMessages.BUY_MARKET:
        handleBuyMarketMessage({
          sendResponse,
          state,
          message: message as BuyMarketPayloadMessage,
        });
        return true;
      case BackgroundMessages.SELL_MARKET:
        handleSellMarketMessage({
          sendResponse,
          state,
          message: message as SellMarketPayloadMessage,
        });
        return true;
      default:
        console.log(`no handler for event`, message);
        break;
    }
  };
