export function toLamports(sol: number): bigint {
  return BigInt(Math.round(sol * 1_000_000_000));
}
