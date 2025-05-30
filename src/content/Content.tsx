import { createSignal, onCleanup, onMount } from 'solid-js';
import {
  messageListener,
  useStartCabalService,
} from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { onUrlChange } from './onUrlChange';

const Content = () => {
  const [status, setStatus] = createSignal<boolean>(false);
  const { start, clean } = useStartCabalService();
  const [urlValue, setUrlValue] = createSignal<string>('');
  const handleStart = () => {
    chrome.runtime.onMessage.addListener(messageListener);

    chrome.runtime.sendMessage({ type: 'INIT_CABAL' }, (res) => {
      setStatus(res.status);
    });
  };

  const handleOnUrlChange = (url) => {
    setUrlValue(url);
  };

  onMount(() => {
    setTimeout(() => handleStart(), 500);
    onUrlChange(handleOnUrlChange);
  });

  onCleanup(() => clean());

  return (
    <div class="ext-absolute ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <div>{status()}</div>
        <button onClick={() => handleStart()}>start</button>
        <OnlineStatusWidged />
      </div>
      <div class="ext-flex">url: {urlValue()}</div>
    </div>
  );
};
export default Content;
