import { SubscribeTokenReturn } from '../../../services/cabal-clinet-sdk/CabalServiceTypes';
import { BackgroundState } from '../../types';

export const subscribeTokenState = async function (
  this: BackgroundState,
  mint: string,
): SubscribeTokenReturn {
  try {
    if (!this.cabal) {
      throw new Error('cabal service is undefined');
    }
    this.mint = mint;
    const { result, error } = await this.cabal.subscribeToken(mint);
    if (error) {
      throw error;
    }
    return { result };
  } catch (error) {
    console.error(error);
    return { error: error as Error };
  }
};
