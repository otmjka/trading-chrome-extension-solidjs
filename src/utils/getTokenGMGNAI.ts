// https://gmgn.ai/sol/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr

import { SiteWhitelist } from '../enums';

// 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr
export const getTokenGMGNAI = (url: string): string => {
  const result = url.split(SiteWhitelist.gmgnai);
  return result[1];
};
