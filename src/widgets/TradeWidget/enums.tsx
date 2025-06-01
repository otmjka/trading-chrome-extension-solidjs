import stats from './icons/stats.svg';
import tips from './icons/tips.svg';
import gas from './icons/gas.svg';
import burger from './icons/burger.svg';

export enum TradeDir {
  Buy = 'Buy',
  Sell = 'Sell',
}

export const statIcons = {
  stats,
  tips,
  gas,
  burger,
  calc: chrome.runtime.getURL('assets2/calc.svg'),
};

export type IconName = keyof typeof statIcons;
export type CellColor = 'gray' | 'purple';

export type StatItem = {
  icon: IconName;
  color: CellColor;
  value: string;
};

export enum BCellColor {
  green = 'green',
  red = 'red',
  white = 'white',
}

export const statMid: Array<StatItem> = [
  { icon: 'stats', color: 'gray', value: '20%' },
  { icon: 'tips', color: 'gray', value: '0.001' },
  { icon: 'gas', color: 'gray', value: 'Auto' },
  { icon: 'burger', color: 'gray', value: 'On' },
  { icon: 'calc', color: 'gray', value: '5' },
];

export const defaultBuyQuicks = [
  { value: '0.0026' },
  { value: '1' },
  { value: '2' },
  { value: '5' },
];

export const defaultSellQuicks = [
  { value: '10' },
  { value: '25' },
  { value: '40' },
  { value: '75' },
];
