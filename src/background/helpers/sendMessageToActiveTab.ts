import { FromBackgroundMessage } from '../../shared/types';
import { config } from '../backgroundConfig';

export const sendMessageToActiveTab = ({
  message,
  getActiveTab,
}: {
  message: FromBackgroundMessage;
  getActiveTab: () => number | undefined;
}) => {
  const activeTab = getActiveTab();
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
