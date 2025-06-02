import { BgMessageCb, MessageToBgPayload } from '../shared/types';

export const sendMessage = ({
  payload,
  cb,
}: {
  payload: MessageToBgPayload;
  cb: BgMessageCb;
}) => {
  chrome.runtime.sendMessage(payload, cb);
};
