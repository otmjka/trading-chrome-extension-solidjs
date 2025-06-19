import { Component, createMemo, createSignal, Show } from 'solid-js';
import { Paper } from '../../uikit/CabalExt';
import { contentAppStore } from '../../stores/contentAppStore';
import { tabItems, TWTabValue } from './enums';
import { Tabs } from '@kobalte/core/tabs';
import { TWHeader } from './TWHeader/TWHeader';
import { BuySell } from './BuySell/BuySell';

type TradingWidgetViewProps = {
  // store: SimpleTradeWidgetStore;
};

export const TradingWidgetView: Component<TradingWidgetViewProps> = (props) => {
  const [currentTab, setCurrentTab] = createSignal<string>(tabItems[0].value);
  const isReady = createMemo(
    () =>
      !!contentAppStore.isReady &&
      !!contentAppStore.config &&
      !!contentAppStore.tokenStatus &&
      !!contentAppStore.tradeStats,
  );
  return (
    <Paper p="2" cn="ext-w-[320px] ext-h-[386px]">
      <Show when={isReady}>
        <Tabs value={currentTab()} onChange={setCurrentTab}>
          <TWHeader />
          <Tabs.Content value={TWTabValue.buysell}>
            <BuySell />
          </Tabs.Content>
          <Tabs.Content value={TWTabValue.migration}>
            {/* <Migration /> */}
          </Tabs.Content>
          <Tabs.Content value={TWTabValue.limits}>
            {/* <Limits /> */}
          </Tabs.Content>
        </Tabs>
      </Show>
      <Show when={!isReady}>
        <div>
          {String(!!contentAppStore.isReady)}
          {String(!!contentAppStore.config)}
          {String(!!contentAppStore.tokenStatus)}
          {String(!!contentAppStore.tradeStats)}
          {String(!!contentAppStore.lastTradeEvent)}
        </div>
      </Show>
    </Paper>
  );
};
