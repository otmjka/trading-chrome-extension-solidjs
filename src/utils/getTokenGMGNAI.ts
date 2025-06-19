// https://gmgn.ai/sol/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr

import { SiteWhitelist } from '../enums';

// 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr
export const getTokenGMGNAI = (url: string): string | undefined => {
  if (!url.startsWith(SiteWhitelist.gmgnai)) {
    return;
  }
  // const result = url.split(SiteWhitelist.gmgnai);
  const urlData = new URL(url);

  const pathname = urlData.pathname; // /sol/token/DgeyeE6JNt6TbbcPKBnQCXGoomudr96ETiFtZ5kvTgQ4
  const mint = pathname.split('/sol/token/')[1];
  return mint;
};
