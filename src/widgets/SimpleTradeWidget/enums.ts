export enum TWTabValue {
  buysell = 'buysell',
  migration = 'migration',
  limits = 'limits',
}

export const tabItems = [
  { value: TWTabValue.buysell, label: 'Market' },
  { value: TWTabValue.migration, label: 'Limit' },
  { value: TWTabValue.limits, label: 'Trailing' },
];
