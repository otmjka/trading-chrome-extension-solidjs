import {
  CabalCommonMessages,
  CabalMessageType,
  FromBackgroundReadyStatusMessage,
} from '../../shared/types';
import { BackgroundState } from '../types';

export const readyStatus = ({
  state,
}: {
  state: BackgroundState;
}): FromBackgroundReadyStatusMessage => ({
  type: CabalMessageType.CabalEvent,
  eventName: CabalCommonMessages.readyStatus,
  data: { isReady: state.isReady, shouldSetApiKey: !state.apiKey },
});
