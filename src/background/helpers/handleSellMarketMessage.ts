import { CabalService } from '../../services/cabal-clinet-sdk';
import { SellMarketPayloadMessage } from '../../shared/types';
import { ContentListener } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleSellMarketMessage = async ({
  sendResponse,
  getListener,
  getCabalInstance,
  getIsReady,
  message,
}: {
  sendResponse: (response?: any) => void;
  getListener: (tabId?: number) => ContentListener | undefined;
  getCabalInstance: () => CabalService | null;
  getIsReady: () => boolean;
  message: SellMarketPayloadMessage;
}) => {
  const tabs = await queryActiveTab();
  const tabId = tabs[0]?.id;
  const listener = getListener(tabId);

  console.log('### Buy Market ###', tabId, listener?.mint);
  const cabalValue = getCabalInstance();
  const { mint: messageMint, amountBps } = message.data;
  if (cabalValue && messageMint && amountBps) {
    cabalValue.marketSell({
      percents: amountBps,
      mint: messageMint,
    });
  }
  sendResponse({ isReady: getIsReady() });
};
