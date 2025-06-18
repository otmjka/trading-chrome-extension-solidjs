export enum TabNames {
  buysell = 'buysell',
  autolimits = 'autolimits',
  migrationsnipe = 'migrationsnipe',
  limit = 'limit',
  txproc = 'txproc',
  others = 'others',
}

export const navItems = [
  { label: 'Buy/Sell Settings', value: TabNames.buysell },
  { label: 'AutoLimits Settings', value: TabNames.autolimits },
  { label: 'Migration Snipe Settings', value: TabNames.migrationsnipe },
  { label: 'Limit Settings', value: TabNames.limit },
  { label: 'Transaction processors', value: TabNames.txproc },
  { label: 'Others', value: TabNames.others },
];
