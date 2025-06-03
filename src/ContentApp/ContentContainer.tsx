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
import { contentAppStore } from '../stores/contentAppStore';
import { LogWidget } from '../log/LogWidget';
import { Btn } from '../uikit';

export const ContentContainer: Component<{ children: JSX.Element }> = ({
  children,
}) => {
  const { startListen, registerTab, subscribeToken, clean, sendApiKey } =
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

  const logout = () => {
    sendApiKey(null);
  };

  return (
    <div class="ext-absolute ext-z-[100] ext-top-0 ext-bg-green-100 ext-rounded-md ext-p-1 ext-min-w-[312px] ext-min-h-[343px]">
      <div class="ext-flex ext-gap-2">
        <OnlineStatusWidged />
        <Btn onClick={() => handleSubscribe()}>start</Btn>
        <Btn onClick={() => setShowDebug((prev) => !prev)}>log</Btn>
        <Btn onClick={() => logout()}>logout</Btn>
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
