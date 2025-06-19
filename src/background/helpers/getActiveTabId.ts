import { queryActiveTab } from './queryActiveTab';

export const getActiveTabId = async (): Promise<number | undefined> => {
  const tabs = await queryActiveTab();
  return tabs[0]?.id;
};
