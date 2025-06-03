import { createEffect, createSignal, Show } from 'solid-js';

import { TradeWidget } from '../widgets/TradeWidget';
import { tradeWidgetState } from '../widgets/TradeWidget/tradeWidgetStateStore';

import { DragContainer } from './DragContainer';
import { ContentContainer } from './ContentContainer';
import { ApiKeyWidget } from '../uikit/ApiKeyWidget';
import { useStartCabalService } from '../services/useCabalService';
import { contentAppStore } from '../stores/contentAppStore';

const Content = () => {
  const [allSourcesReady, setAllSourcesReady] = createSignal<boolean>(false);
  const [shouldPromptApiKey, setShouldPromptApiKey] =
    createSignal<boolean>(false);

  const { sendApiKey } = useStartCabalService();

  createEffect(() => {
    setShouldPromptApiKey(contentAppStore.shouldSetApiKey);
  });
  createEffect(() => {
    console.log(
      '### ###',
      tradeWidgetState.tokenStatus,
      tradeWidgetState.tradeStats,
    );
    const value = !!(
      tradeWidgetState.tokenStatus &&
      tradeWidgetState.tradeStats &&
      contentAppStore.isReady
    );

    setAllSourcesReady(value);
  });

  const handleApiKey = (apiKey: string) => {
    sendApiKey(apiKey);
  };

  return (
    <DragContainer>
      <ContentContainer>
        <Show when={shouldPromptApiKey()}>
          <ApiKeyWidget onApiKey={handleApiKey} />
        </Show>
        <Show when={allSourcesReady()}>
          <TradeWidget />
        </Show>
      </ContentContainer>
    </DragContainer>
  );
};
export default Content;
