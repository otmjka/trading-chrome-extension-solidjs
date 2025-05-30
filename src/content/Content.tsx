import { createSignal, For, onCleanup, onMount } from 'solid-js';
import {
  messageListener,
  useStartCabalService,
} from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { onUrlChange } from './onUrlChange';
import { setCabalUserActivity } from '../stores/cabalUserActivity';
import { setCabalTradeStream } from '../stores/cabalTradeSreamStore';
import { logStore } from './logStore';
import { BackgroundMessages } from '../background/enums';

const Content = () => {
  const [status, setStatus] = createSignal<boolean>(false);
  const { start, clean } = useStartCabalService();
  const [urlValue, setUrlValue] = createSignal<string>('');
  const [mint, setMint] = createSignal<string>('');
  const handleStart = () => {
    chrome.runtime.onMessage.addListener(messageListener);

    chrome.runtime.sendMessage(
      {
        type: BackgroundMessages.INIT_CABAL,
        data: {
          url: location.href,
        },
      },
      (res) => {
        console.log('###', res);
        setUrlValue(res.url);
        setMint(res.mint);

        if (res.isReady) {
          setCabalUserActivity('status', {
            isReady: true,
            count: String(Date.now()),
          });
          setCabalTradeStream('status', {
            isReady: true,
            count: String(Date.now()),
          });
        }
      },
    );
  };

  const handleOnUrlChange = (url) => {
    setUrlValue(url);
  };

  onMount(() => {
    setTimeout(() => handleStart(), 500);
    onUrlChange(handleOnUrlChange);
  });

  onCleanup(() => clean());
  const handleSubscribe = () => {
    chrome.runtime.sendMessage(
      {
        type: BackgroundMessages.SUBSCRIBE_TOKEN,
      },
      (res) => {
        console.log('$$$', BackgroundMessages.SUBSCRIBE_TOKEN, res);
      },
    );
  };
  return (
    <div class="ext-absolute ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <div>{status()}</div>
        <button onClick={() => handleSubscribe()}>start</button>
        <OnlineStatusWidged />
      </div>
      <div class="ext-flex">url: {urlValue()}</div>
      <div class="ext-flex">mint: {mint()}</div>
      <div class="ext-flex">
        <For each={logStore.logs}>{(logItem) => <div>{logItem.type}</div>}</For>
      </div>
    </div>
  );
};
export default Content;
