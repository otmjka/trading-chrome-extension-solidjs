import { BackgroundState } from '../../types';

export const getIsReadyState = function (this: BackgroundState): boolean {
  return this.isReady;
};
