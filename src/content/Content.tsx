import { createSignal, onCleanup, onMount } from 'solid-js';
import {
  messageListener,
  useStartCabalService,
} from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';

const Content = () => {
  const [status, setStatus] = createSignal<boolean>(false);
  const { start, clean } = useStartCabalService();

  // onCleanup(() => clean());

  const handleStart = () => {
    chrome.runtime.onMessage.addListener(messageListener);

    chrome.runtime.sendMessage({ type: 'INIT_CABAL' }, (res) => {
      setStatus(res.status);
    });
  };

  return (
    <div class="ext-absolute ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <div>{status()}</div>
        <button onClick={() => handleStart()}>start</button>
        <OnlineStatusWidged />
      </div>
    </div>
  );
};
export default Content;
