import { createEffect, createSignal, onCleanup, onMount, Show } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { onUrlChange } from './onUrlChange';
import { contentAppStore } from './contentAppStore';
import { TradeWidget } from '../widgets/TradeWidget';
import { LogWidget } from '../log/LogWidget';
import { tradeWidgetState } from '../widgets/TradeWidget/tradeWidgetStateStore';

const Content = () => {
  const [status, setStatus] = createSignal<boolean>(false);
  const { startListen, registerTab, subscribeToken, clean } =
    useStartCabalService();
  const [urlValue, setUrlValue] = createSignal<string>('');
  const [isReady, seIsReady] = createSignal<boolean>(false);
  const [allSourcesReady, setAllSourcesReady] = createSignal<boolean>(false);
  const [showDebug, setShowDebug] = createSignal<boolean>(false);
  createEffect(() => {
    const value = !!(
      tradeWidgetState.tokenStatus && tradeWidgetState.tradeStats
    );
    console.log(
      '### ### ###',
      tradeWidgetState.tokenStatus,
      tradeWidgetState.tradeStats,
      value,
    );
    setAllSourcesReady(value);
  });

  createEffect(() => {
    seIsReady(contentAppStore.isReady);
    if (!contentAppStore.isReady || !contentAppStore.mint) {
      return;
    }

    handleSubscribe();
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
    console.log(
      'subscribe token',
      contentAppStore.mint,
      contentAppStore.isReady,
    );
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
        <OnlineStatusWidged />
        <div>{status()}</div>
        <button class="ext-bg-blue-500" onClick={() => handleSubscribe()}>
          start
        </button>
        <button
          class="ext-bg-blue-500"
          onClick={() => setShowDebug((prev) => !prev)}
        >
          log
        </button>
      </div>
      <Show when={showDebug()}>
        <div>
          <div class="ext-flex">url: {urlValue()}</div>
          <div class="ext-flex">mint: {contentAppStore.mint}</div>
          <LogWidget />
        </div>
      </Show>
      <Show when={allSourcesReady()}>
        <TradeWidget />
      </Show>
    </div>
  );
};
export default Content;
