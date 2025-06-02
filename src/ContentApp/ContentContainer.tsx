import {
  Component,
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
} from 'solid-js';

import { useStartCabalService } from '../services/useCabalService';

import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { onUrlChange } from './onUrlChange';
import { contentAppStore } from './contentAppStore';
import { LogWidget } from '../log/LogWidget';

export const ContentContainer: Component<{ children: JSX.Element }> = ({
  children,
}) => {
  const { startListen, registerTab, subscribeToken, clean } =
    useStartCabalService();
  const [urlValue, setUrlValue] = createSignal<string>('');
  const [showDebug, setShowDebug] = createSignal<boolean>(false);
  const handleStart = () => {
    startListen();
    registerTab({ locationHref: location.href });
  };

  const handleOnUrlChange = (url: string) => {
    setUrlValue(url);
  };

  onMount(() => {
    setTimeout(() => handleStart(), 100);
    onUrlChange(handleOnUrlChange);
  });

  const handleSubscribe = () => {
    if (!contentAppStore.mint) {
      return;
    }
    subscribeToken({
      mint: contentAppStore.mint,
      cb: (res) => {},
    });
  };
  createEffect(() => {
    if (!contentAppStore.isReady || !contentAppStore.mint) {
      return;
    }

    handleSubscribe();
  });

  onCleanup(() => clean());
  return (
    <div class="ext-absolute ext-z-100 ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <OnlineStatusWidged />
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
      {children}
    </div>
  );
};
