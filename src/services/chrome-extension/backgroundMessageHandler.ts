import { MessageListener } from '../../shared/types';

export const startListnenBackgroundMessages = (
  messageListener: MessageListener,
) => chrome.runtime.onMessage.addListener(messageListener);
