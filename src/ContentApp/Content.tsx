import { Component, createEffect, createSignal, Show } from 'solid-js';

import { TradeWidget } from '../widgets/TradeWidget';
import { tradeWidgetState } from '../widgets/TradeWidget/TradeWidgetStore/tradeWidgetStateStore';

import { DragContainer } from './DragContainer';
import { ContentContainer } from './ContentContainer';
import { ApiKeyWidget } from '../uikit/ApiKeyWidget';
import { useStartCabalService } from '../services/useCabalService';
import { contentAppStore } from '../stores/contentAppStore';
import { Mint } from '../shared/types';
import { useContentManager } from './useContentManager';
import { configStore } from '../stores/configStore';
import { SimpleTradeWidget } from '../widgets/SimpleTradeWidget/SimpleTradeWidget';

const Content: Component<{ mint: Mint }> = ({ mint }) => {
  const contentState = useContentManager({ mint });
  // const [allSourcesReady, setAllSourcesReady] = createSignal<boolean>(false);
  // const [shouldPromptApiKey, setShouldPromptApiKey] =
  //   createSignal<boolean>(false);

  // createEffect(() => {
  //   setShouldPromptApiKey(contentAppStore.shouldSetApiKey);
  // });
  // createEffect(() => {
  //   console.log(
  //     '### ###',
  //     tradeWidgetState.tokenStatus,
  //     tradeWidgetState.tradeStats,
  //     contentAppStore.isReady,
  //     contentAppStore.shouldSetApiKey,
  //   );
  //   const value = !!(
  //     tradeWidgetState.tokenStatus &&
  //     tradeWidgetState.tradeStats &&
  //     contentAppStore.isReady
  //   );

  //   setAllSourcesReady(value);
  // });

  // const handleApiKey = (apiKey: string) => {
  //   sendApiKey(apiKey);
  // };

  // createEffect(() => {
  //   console.log(configStore.config);
  // });
  return (
    <div class="ext-absolute ext-top-0 ext-right-0 ext-z-[200]">
      <SimpleTradeWidget />
    </div>
    // <div class="ext-absolute ext-z-[100] ext-top-0 ext-bg-green-100 ext-rounded-md ext-p-1 ext-min-w-[312px] ext-min-h-[343px]">
    //   {/* !!! */}
    //   {/* <DragContainer>
    //     <ContentContainer>
    //       <Show when={shouldPromptApiKey()}>
    //         <ApiKeyWidget onApiKey={handleApiKey} />
    //       </Show>
    //       <Show when={allSourcesReady()}>
    //         <TradeWidget />
    //       </Show>
    //       <Show when={!shouldPromptApiKey() && !allSourcesReady()}>
    //         <div class="ext-flex ext-justify-center ext-items-center">
    //           <div class="ext-text-green-300">loading...</div>
    //         </div>
    //       </Show>
    //     </ContentContainer>
    //   </DragContainer>
    //   <div class="ext-w-300 ext-bg-green-100">
    //     {JSON.stringify(configStore.config, null, 2)}
    //   </div> */}
    // </div>
  );
};
export default Content;
