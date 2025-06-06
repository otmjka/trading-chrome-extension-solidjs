import { BuyMarketPayloadMessage } from '../../shared/types';
import { BackgroundState } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleBuyMarketMessage = async ({
  sendResponse,
  state,
  message,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
  message: BuyMarketPayloadMessage;
}) => {
  const tabs = await queryActiveTab();
  const tabId = tabs[0]?.id;
  const listener = state.getTabListener(tabId);

  console.log('### Buy Market ###', tabId, listener?.mint);
  const cabalValue = state.getCabalInstance();
  const { mint: messageMint, amountSol } = message.data;
  if (cabalValue && messageMint && amountSol) {
    cabalValue.marketBuy({
      amount: amountSol,
      mint: messageMint,
    });
  }
  sendResponse({ isReady: state.getIsReady() });
};
