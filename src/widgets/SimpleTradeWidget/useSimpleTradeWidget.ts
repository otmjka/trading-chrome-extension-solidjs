import { createEffect } from 'solid-js';
import { contentAppStore } from '../../stores/contentAppStore';
import { createStore } from 'solid-js/store';
import { SimpleTradeWidgetStore } from './types';

const init: SimpleTradeWidgetStore = {
  isReady: false,
  config: null,
  tokenStatus: null,
  tradeStats: null,
  lastTradeEvent: null,
  isWidgetReady: false,
};

export const useSimpleTradeWidget = () => {
  const [store, setStore] = createStore<SimpleTradeWidgetStore>(init);
  createEffect(() => {
    const isWidgetReady = !!(
      contentAppStore.isReady &&
      contentAppStore.config &&
      contentAppStore.tokenStatus &&
      contentAppStore.tradeStats &&
      contentAppStore.lastTradeEvent
    );

    setStore({
      isWidgetReady,
      isReady: contentAppStore.isReady,
      config: contentAppStore.config,
      tokenStatus: contentAppStore.tokenStatus,
      tradeStats: contentAppStore.tradeStats,
      lastTradeEvent: contentAppStore.lastTradeEvent,
    });
  });

  createEffect(() => {
    console.log(`[content-script][simple widget][store]`, store);
  });

  return store;
};
