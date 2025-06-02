import { CabalService } from '../../services/cabal-clinet-sdk';
import { BuyMarketPayloadMessage } from '../../shared/types';
import { ContentListener } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleBuyMarketMessage = async ({
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
  message: BuyMarketPayloadMessage;
}) => {
  const tabs = await queryActiveTab();
  const tabId = tabs[0]?.id;
  const listener = getListener(tabId);

  console.log('### Buy Market ###', tabId, listener?.mint);
  const cabalValue = getCabalInstance();
  const { mint: messageMint, amountSol } = message.data;
  if (cabalValue && messageMint && amountSol) {
    cabalValue.marketBuy({
      amount: amountSol,
      mint: messageMint,
    });
  }
  sendResponse({ isReady: getIsReady() });
};
