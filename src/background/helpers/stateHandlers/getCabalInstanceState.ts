import { CabalService } from '../../../services/cabal-clinet-sdk';
import { BackgroundState, ContentListener } from '../../types';

export const getCabalInstanceState = function (
  this: BackgroundState,
): CabalService | null {
  return this.cabal;
};
