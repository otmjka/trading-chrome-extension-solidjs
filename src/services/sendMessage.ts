import { BgMessageCb, BgMessagePayload } from '../shared/types';

export const sendMessage = ({
  payload,
  cb,
}: {
  payload: BgMessagePayload;
  cb: BgMessageCb;
}) => {
  chrome.runtime.sendMessage(payload, cb);
};
