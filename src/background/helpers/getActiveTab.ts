import { queryActiveTab } from './queryActiveTab';

export const getActiveTab = async () => {
  const tabs = await queryActiveTab();
  return tabs[0]?.id;
};
