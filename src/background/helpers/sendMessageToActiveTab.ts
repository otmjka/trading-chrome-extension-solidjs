import { FromBackgroundMessage } from '../../shared/types';
import { config } from '../backgroundConfig';
import { BackgroundState } from '../types';

export const sendMessageToActiveTab = ({
  message,
  state,
}: {
  message: FromBackgroundMessage;
  state: BackgroundState;
}) => {
  const activeTab = state.getActiveTab();
  console.log('#-# sendMessageToActiveTab', activeTab);
  if (!activeTab) {
    return;
  }
  chrome.tabs.sendMessage(activeTab, message, (response) => {
    if (chrome.runtime.lastError) {
      console.error('Error sending message:', chrome.runtime.lastError.message);
    } else {
      if (config.showSendMessageResponseLog) {
        console.log('Message sent to active tab:', message);
      }
    }
  });
};
