export const formatLamports = ({
  solBalance,
  tokenDecimals,
}: {
  solBalance: string;
  tokenDecimals: number;
}) => Number(Number(solBalance) / Math.pow(10, tokenDecimals)).toFixed(2);
