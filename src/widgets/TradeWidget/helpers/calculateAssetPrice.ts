export const calculateAssetPrice = ({
  baseLiq,
  quoteLiq,
  baseDecimals,
  quoteDecimals = 9,
}: {
  baseLiq: bigint;
  quoteLiq: bigint;
  baseDecimals: number;
  quoteDecimals?: number;
}): number => {
  // Проверка на валидность входных данных
  if (baseLiq <= 0n || quoteLiq <= 0n) {
    throw new Error('Ликвидность должна быть больше 0');
  }

  // Перевод ликвидности в целые токены с учетом десятичных разрядов
  const baseTokens = Number(baseLiq) / Math.pow(10, baseDecimals);
  const quoteTokens = Number(quoteLiq) / Math.pow(10, quoteDecimals);

  // Расчет цены: quoteLiq / baseLiq
  const price = quoteTokens / baseTokens;

  return price;
};
