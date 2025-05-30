const splitter = 'https://gmgn.ai/sol/token/';
// https://gmgn.ai/sol/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr
// 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr
export const getTokenGMGNAI = (url: string): string => {
  const result = url.split(splitter);
  return result[1];
};
