import { createEffect, createSignal, Show } from 'solid-js';
import cn from 'classnames';

import { cabalUserActivity } from '../../stores/cabalUserActivity';
import { cabalTradeStream } from '../../stores/cabalTradeSreamStore';

export const OnlineStatusWidged = () => {
  const [isPulsingUA, setIsPulsingUA] = createSignal(false);
  const [isPulsingTrade, setIsPulsingTrade] = createSignal(false);

  let lastCountUA: bigint | undefined = cabalUserActivity.pong?.count;
  let lastCountTrade: bigint | undefined = cabalUserActivity.pong?.count;

  createEffect(() => {
    const currentCount = cabalUserActivity.pong?.count;
    if (currentCount !== undefined && currentCount !== lastCountUA) {
      lastCountUA = currentCount;
      setIsPulsingUA(true);
      setTimeout(() => setIsPulsingUA(false), 600);
    }
  });

  createEffect(() => {
    const currentCount = cabalTradeStream.pong?.count;
    if (currentCount !== undefined && currentCount !== lastCountTrade) {
      lastCountTrade = currentCount;
      setIsPulsingTrade(true);
      setTimeout(() => setIsPulsingTrade(false), 600);
    }
  });

  return (
    <div class="ext-flex ext-gap-4">
      <div class="ext-flex ext-items-center">
        <span
          class={cn('ext-relative ext-w-4 ext-h-4 ext-p-2 ext-rounded-full', {
            'ext-bg-green-500': cabalUserActivity.connected,
            'ext-bg-red-500': !cabalUserActivity.connected,
            'ext-animate-pulse-once': isPulsingUA(),
          })}
        />
        <p class="ext-ml-2 ext-text-gray-700 ext-text-md dark:ext-text-gray-50">
          <Show when={cabalUserActivity.connected} fallback={'offline'}>
            {' '}
            user
          </Show>
        </p>
      </div>

      <div class="ext-flex ext-items-center">
        <span
          class={cn('ext-relative ext-w-4 ext-h-4 ext-p-2 ext-rounded-full', {
            'ext-bg-green-500': cabalTradeStream.connected,
            'ext-bg-red-500': !cabalTradeStream.connected,
            'ext-animate-pulse-once': isPulsingTrade(),
          })}
        />
        <p class="ext-ml-2 ext-text-gray-700 ext-text-md dark:ext-text-gray-50">
          <Show when={cabalTradeStream.connected} fallback={'offline'}>
            {' '}
            trades
          </Show>
        </p>
      </div>
    </div>
  );
};
