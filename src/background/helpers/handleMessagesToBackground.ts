import { CabalService } from '../../services/cabal-clinet-sdk';
import {
  BackgroundMessages,
  BuyMarketPayloadMessage,
  MessageToBgPayload,
  SellMarketPayloadMessage,
  SubscribeTokenPayloadMessage,
} from '../../shared/types';
import { BackgroundState, ContentListener } from '../types';
import { handleBuyMarketMessage } from './handleBuyMarketMessage';
import { handleSellMarketMessage } from './handleSellMarketMessage';
import { handleSubscribeTokenMessage } from './handleSubscribeTokenMessage';
import { initCabalOnTab } from './initCabalOnTab';
import { setApiKey } from './setApiKey';

export const handleMessagesToBackground =
  ({
    getIsReady,
    getListener,
    getCabalInstance,
    setActiveTab,
    state,
  }: {
    getListener: (tabId?: number) => ContentListener | undefined;
    getCabalInstance: () => CabalService | null;
    getIsReady: () => boolean;
    setActiveTab: (newActiveTab: number) => void;
    state: BackgroundState;
  }) =>
  (
    message: MessageToBgPayload,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void,
  ) => {
    console.log('%%% %%% receive', message, sender);
    switch (message.type) {
      case BackgroundMessages.SET_APIKEY:
        console.log('!!!', message);
        setApiKey({ sendResponse, message, state });

        return true;
      case BackgroundMessages.INIT_CABAL:
        initCabalOnTab({
          sendResponse,
          message,
          state,
          setActiveTab,
        });
        return true;
      case BackgroundMessages.SUBSCRIBE_TOKEN:
        handleSubscribeTokenMessage({
          sendResponse,
          getListener,
          getCabalInstance,
          getIsReady: getIsReady,
          message: message as SubscribeTokenPayloadMessage,
        });
        return true;
      case BackgroundMessages.BUY_MARKET:
        handleBuyMarketMessage({
          sendResponse,
          getListener,
          getCabalInstance,
          getIsReady,
          message: message as BuyMarketPayloadMessage,
        });
        return true;
      case BackgroundMessages.SELL_MARKET:
        handleSellMarketMessage({
          sendResponse,
          getListener: getListener,
          getCabalInstance,
          getIsReady: getIsReady,
          message: message as SellMarketPayloadMessage,
        });
        return true;
      default:
        console.log(`no handler for event`, message);
        break;
    }
  };
