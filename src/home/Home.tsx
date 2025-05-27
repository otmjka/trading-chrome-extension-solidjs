import { createSignal, onMount } from 'solid-js';
import { TradeWidget } from '../widgets1/TradeWidget';

export default function Home() {
  const [status, setStatus] = createSignal('offline');

  onMount(() => {
    // chrome.runtime.sendMessage({ type: 'get-status' }, (res) => {
    //   setStatus(res.status);
    // });
    // chrome.runtime.onMessage.addListener((message) => {
    //   if (message.status) {
    //     setStatus(message.status);
    //   }
    // });
  });
  const handleStart = () => {
    chrome.runtime.sendMessage({ type: 'INIT_CABAL' }, (res) => {
      setStatus(res.status);
    });
  };
  return (
    <div class="p-6 text-xl">
      <div>
        Service Status:: <b>{status()}</b>
        <button onClick={handleStart}>start</button>
        <TradeWidget />
      </div>
    </div>
  );
}
