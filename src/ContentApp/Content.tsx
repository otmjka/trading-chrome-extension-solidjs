import { createEffect, createSignal, Show } from 'solid-js';

import { TradeWidget } from '../widgets/TradeWidget';
import { tradeWidgetState } from '../widgets/TradeWidget/tradeWidgetStateStore';

import { DragContainer } from './DragContainer';
import { ContentContainer } from './ContentContainer';

const Content = () => {
  const [allSourcesReady, setAllSourcesReady] = createSignal<boolean>(false);

  createEffect(() => {
    console.log(
      '### ###',
      tradeWidgetState.tokenStatus,
      tradeWidgetState.tradeStats,
    );
    const value = !!(
      tradeWidgetState.tokenStatus && tradeWidgetState.tradeStats
    );

    setAllSourcesReady(value);
  });

  return (
    <DragContainer>
      <ContentContainer>
        <Show when={allSourcesReady()}>
          <TradeWidget />
        </Show>
      </ContentContainer>
    </DragContainer>
  );
};
export default Content;
