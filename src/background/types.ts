export type CabalMessage = {
  type: string;
  eventName: string;
  data?: unknown;
};

export type ContentListener = { tabId: number; url: string; mint: string };

export type ContentListeners = Array<ContentListener>;
