import { createEffect, createSignal, onCleanup, onMount, Show } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { onUrlChange } from './onUrlChange';
import { contentAppStore } from './contentAppStore';
import { TradeWidget } from '../widgets/TradeWidget';
import { LogWidget } from '../log/LogWidget';
import { tradeWidgetState } from '../widgets/TradeWidget/tradeWidgetStateStore';

import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  DragOverlay,
} from '@thisbeyond/solid-dnd';
import { Draggable } from '../uikit/Draggable';

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
  let transform = { x: 0, y: 0 };

  const onDragMove: DragEventHandler = ({ overlay }) => {
    if (overlay) {
      transform = { ...overlay.transform };
    }
  };

  const onDragEnd: DragEventHandler = ({ draggable }) => {
    const node = draggable.node;
    node.style.setProperty('top', node.offsetTop + transform.y + 'px');
    node.style.setProperty('left', node.offsetLeft + transform.x + 'px');
  };
  return (
    <DragDropProvider onDragMove={onDragMove} onDragEnd={onDragEnd}>
      <DragDropSensors />
      <Draggable id={2}>
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
      </Draggable>
      <DragOverlay>
        {(draggable) => (
          <div class="ext-draggable ext-bg-red-800 ext-w-[400px] ext-h-[400px]">
            Draggable {draggable && draggable.id}
          </div>
        )}
      </DragOverlay>
    </DragDropProvider>
  );
};
export default Content;
