import { BackgroundState } from '../../types';

export const subscribeTokenState = function (
  this: BackgroundState,
  mint: string,
) {
  try {
    if (!this.cabal) {
      return;
    }
    this.cabal.subscribeToken(mint);
  } catch (error) {
    console.error(error);
  }
};
