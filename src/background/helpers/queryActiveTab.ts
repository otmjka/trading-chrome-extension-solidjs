export const queryActiveTab = (): Promise<chrome.tabs.Tab[]> => {
  return new Promise((resolve, reject) => {
    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
      if (chrome.runtime.lastError) {
        console.error('$$$ queryActiveTab', chrome.runtime.lastError);
        return reject(chrome.runtime.lastError);
      }
      resolve(tabs);
    });
  });
};
