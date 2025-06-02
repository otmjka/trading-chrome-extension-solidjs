import {
  BgMessageCb,
  BgMessageResponse,
  MessageToBgPayload,
} from '../shared/types';

export const sendMessage = <Response = BgMessageResponse>({
  payload,
  cb,
}: {
  payload: MessageToBgPayload;
  cb: (response: Response) => void;
}) => {
  chrome.runtime.sendMessage(payload, cb);
};
