import { SellMarketPayloadMessage } from '../../shared/types';
import { BackgroundState } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleSellMarketMessage = async ({
  sendResponse,
  state,
  message,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
  message: SellMarketPayloadMessage;
}) => {
  const tabs = await queryActiveTab();
  const tabId = tabs[0]?.id;
  const listener = state.getTabListener(tabId);

  console.log('### Buy Market ###', tabId, listener?.mint);
  const cabalValue = state.getCabalInstance();
  const { mint: messageMint, amountBps } = message.data;
  if (cabalValue && messageMint && amountBps) {
    cabalValue.marketSell({
      percents: amountBps,
      mint: messageMint,
    });
  }
  sendResponse({ isReady: state.getIsReady() });
};
