export const queryActiveTab = (): Promise<chrome.tabs.Tab[]> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        console.log('$$$');
        return reject(chrome.runtime.lastError);
      }
      resolve(tabs);
    });
  });
};
