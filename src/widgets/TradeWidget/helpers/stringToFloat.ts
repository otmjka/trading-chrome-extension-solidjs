export const stringToFloat = (input: string): number | null => {
  const num = parseFloat(input);
  return isNaN(num) ? null : num;
};
