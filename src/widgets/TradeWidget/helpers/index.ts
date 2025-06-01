import { TradeDir } from '../enums';

export const isBuy = (value: TradeDir): boolean => value === TradeDir.Buy;

export const isSell = (value: TradeDir): boolean => value === TradeDir.Sell;
