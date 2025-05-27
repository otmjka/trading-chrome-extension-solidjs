import { createSignal, onMount } from 'solid-js';

export default function Popup() {
  const [status, setStatus] = createSignal('offline');

  onMount(() => {
    chrome.runtime.sendMessage({ type: 'get-status' }, (res) => {
      setStatus(res.status);
    });

    chrome.runtime.onMessage.addListener((message) => {
      if (message.status) {
        setStatus(message.status);
      }
    });
  });

  const openFull = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('home.html') });
  };

  return (
    <div class="p-4">
      <div>
        Status: <b>{status()}</b>
      </div>
      <button
        onClick={openFull}
        class="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Открыть на полный экран
      </button>
    </div>
  );
}
