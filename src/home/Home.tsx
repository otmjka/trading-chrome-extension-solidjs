import { createSignal, onMount } from 'solid-js';

export default function Home() {
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

  return (
    <div class="p-6 text-xl">
      <div>
        Service Status: <b>{status()}</b>
      </div>
    </div>
  );
}
