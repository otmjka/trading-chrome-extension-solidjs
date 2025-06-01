import { createEffect, createSignal, For, onCleanup, onMount } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { onUrlChange } from './onUrlChange';
import { logStore } from './logStore';
import { contentAppStore } from './contentAppStore';
import { TradeWidget } from '../widgets/TradeWidget';

const Content = () => {
  const [status, setStatus] = createSignal<boolean>(false);
  const { startListen, registerTab, subscribeToken, clean } =
    useStartCabalService();
  const [urlValue, setUrlValue] = createSignal<string>('');
  const [isReady, seIsReady] = createSignal<boolean>(false);

  createEffect(() => {
    seIsReady(contentAppStore.isReady);
    if (!contentAppStore.isReady || !contentAppStore.mint) {
      return;
    }
  });

  const handleStart = () => {
    startListen();
    registerTab({ locationHref: location.href });
  };

  const handleOnUrlChange = (url) => {
    setUrlValue(url);
  };

  onMount(() => {
    setTimeout(() => handleStart(), 100);
    onUrlChange(handleOnUrlChange);
  });

  onCleanup(() => clean());

  const handleSubscribe = () => {
    if (!contentAppStore.mint) {
      return;
    }
    subscribeToken({
      mint: contentAppStore.mint,
      cb: (res) => {
        console.log('$$$', res);
      },
    });
  };

  return (
    <div class="ext-absolute ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <div>{status()}</div>
        <button onClick={() => handleSubscribe()}>start</button>
        <OnlineStatusWidged />
      </div>
      <div class="ext-flex">url: {urlValue()}</div>
      <div class="ext-flex">mint: {contentAppStore.mint}</div>
      <div class="ext-flex">
        <For each={logStore.logs}>{(logItem) => <div>{logItem.type}</div>}</For>
      </div>
      <TradeWidget />
    </div>
  );
};
export default Content;
