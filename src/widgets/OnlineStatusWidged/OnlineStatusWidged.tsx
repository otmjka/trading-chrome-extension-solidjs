import { createEffect, createSignal, Show } from 'solid-js';
import cn from 'classnames';

import { cabalUserActivity } from '../../stores/cabalUserActivity';
import { cabalTradeStream } from '../../stores/cabalTradeSreamStore';

export const OnlineStatusWidged = () => {
  const [isPulsingUA, setIsPulsingUA] = createSignal(false);
  const [isPulsingTrade, setIsPulsingTrade] = createSignal(false);
  const [user, setUser] = createSignal(false);
  const [trades, setTrades] = createSignal(false);

  let lastCountUA: string | undefined = cabalUserActivity.status?.count;
  let lastCountTrade: string | undefined = cabalUserActivity.status?.count;

  createEffect(() => {
    setUser(!!cabalUserActivity.status);
    const currentCount = cabalUserActivity.status?.count;
    if (currentCount !== undefined && currentCount !== lastCountUA) {
      lastCountUA = currentCount;
      setIsPulsingUA(true);
      setTimeout(() => setIsPulsingUA(false), 600);
    }
  });

  createEffect(() => {
    setTrades(!!cabalTradeStream.status);
    const currentCount = cabalTradeStream.status?.count;
    if (currentCount !== undefined && currentCount !== lastCountTrade) {
      lastCountTrade = currentCount;
      setIsPulsingTrade(true);
      setTimeout(() => setIsPulsingTrade(false), 600);
    }
  });

  return (
    <div class="e:flex e:gap-4">
      <div class="e:flex e:items-center">
        <span
          class={cn('e:relative e:w-4 e:h-4 e:p-2 e:rounded-full', {
            'e:bg-green-500': !!cabalUserActivity.status,
            'e:bg-red-500': !cabalUserActivity.status,
            'e:animate-pulse-once': isPulsingUA(),
          })}
        />
        <p class="e:ml-2 e:text-gray-700 e:text-md dark:e:text-gray-50">
          <Show when={user()} fallback={'offline'}>
            {' '}
            user
          </Show>
        </p>
      </div>

      <div class="e:flex e:items-center">
        <span
          class={cn('e:relative e:w-4 e:h-4 e:p-2 e:rounded-full', {
            'e:bg-green-500': !!cabalTradeStream.status,
            'e:bg-red-500': !cabalTradeStream.status,
            'e:animate-pulse-once': isPulsingTrade(),
          })}
        />
        <p class="e:ml-2 e:text-gray-700 e:text-md dark:e:text-gray-50">
          <Show when={trades()} fallback={'offline'}>
            {' '}
            trades
          </Show>
        </p>
      </div>
    </div>
  );
};
