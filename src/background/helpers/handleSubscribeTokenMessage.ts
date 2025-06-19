import { SubscribeTokenPayloadMessage } from '../../shared/types';
import { config } from '../backgroundConfig';
import { BackgroundState } from '../types';
import { getMetaByState } from './messagesToContent';

export const handleSubscribeTokenMessage = async ({
  sendResponse,
  state,
  message,
}: {
  sendResponse: (response?: any) => void;
  state: BackgroundState;
  message: SubscribeTokenPayloadMessage;
}) => {
  try {
    const messageMint = message.data.mint;
    const { error, result } = await state.subscribeToken(messageMint);

    if (error) {
      throw error;
    }

    if (config.showSubscribeTokenReceiveMsg) {
      console.log(`[handleSubscribeTokenMessage][result]`, result);
    }

    sendResponse({
      meta: getMetaByState(state),
    });
  } catch (error) {
    sendResponse({
      meta: {
        ...getMetaByState(state),
        error: `subscribe token error: ${(error as Error).message}`,
      },
    });
  }
};
