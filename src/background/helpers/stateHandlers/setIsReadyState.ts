import { BackgroundState } from '../../types';

export const setIsReadyState = function (
  this: BackgroundState,
  value: boolean,
) {
  this.isReady = value;
};
