import { Component, createSignal, For, Show, createEffect } from 'solid-js';

import { Tabs } from '@kobalte/core/tabs';

import StatsCell from './StatsCell';
import StatsContainer from './StatsContainer';
import BottomStatsCell from './BottomStatsCell';
import { BCellColor, statMid, TradeDir } from './enums';
import BuyAmoutInput from './BuyAmoutInput';
import TradeDirSelector from './TradeDirSelector';
import SellAmoutInput from './SellAmoutInput';

import TradeTabButton from './TradeTabButton';
import PnL from './PnL';

import {
  handlers,
  setTradeWidgetState,
  tradeWidgetState,
} from './TradeWidgetStore/tradeWidgetStateStore';
import { isBuy, isSell } from './helpers';
import * as TW from './TradeWidget.parts';
import { QuickItem } from './types';

export const statsBottom = [
  { title: 'Bought', color: BCellColor.green, value: '0' },
  { title: 'Sold', color: BCellColor.red, value: '0' },
  { title: 'Holding', color: BCellColor.white, value: '0' },
];

const TradeWidget: Component = () => {
  const [buyInputValue, setBuyInputValue] = createSignal<string | null>(null);
  const [sellInputValue, setSellInputValue] = createSignal<string | null>(null);

  const [isShowBuyButton, setIsShowBuyButton] = createSignal<boolean>(false);
  const [isShowSellButton, setIsShowSellButton] = createSignal<boolean>(false);

  createEffect(() => {
    setBuyInputValue(tradeWidgetState.buyInputValue);
  });

  createEffect(() => {
    setSellInputValue(tradeWidgetState.sellInputValue);
  });

  createEffect(() => {
    setIsShowBuyButton(
      isBuy(tradeWidgetState.dir) && !tradeWidgetState.disablebuySellButton,
    );
  });

  createEffect(() => {
    setIsShowSellButton(
      isSell(tradeWidgetState.dir) && !tradeWidgetState.disableSellButton,
    );
  });

  return (
    <TW.Container>
      <TW.Header />

      <TW.Body>
        <TradeDirSelector
          getDir={() => tradeWidgetState.dir}
          onSelect={(value) => setTradeWidgetState('dir', value)}
        />

        <Tabs>
          <TW.TabsHeader>
            <TW.TabsList />
            <TW.Settings />
          </TW.TabsHeader>

          <TW.Hr />

          {/*
           *  Market + Buy + Quicks + Input
           */}

          <Show when={isBuy(tradeWidgetState.dir)}>
            <BuyAmoutInput
              getQuicks={() => tradeWidgetState.buyQuicks}
              getActiveQuick={() => tradeWidgetState.activeBuyQuickIndex}
              onSelectQuick={(value: QuickItem) =>
                handlers.selectBuyQuick(value)
              }
              getInputValue={buyInputValue}
              onChange={handlers.onBuyInputChange}
            />
          </Show>

          <Show when={isSell(tradeWidgetState.dir)}>
            <SellAmoutInput
              getQuicks={() => tradeWidgetState.sellQuicks}
              getActiveQuick={() => tradeWidgetState.activeSellQuickIndex}
              onSelectQuick={(value: QuickItem) =>
                handlers.selectSellQuick(value)
              }
              getInputValue={sellInputValue}
              onChange={handlers.onSellInputChange}
            />
          </Show>

          <StatsContainer>
            <For each={statMid}>
              {(statsItem) => (
                <StatsCell
                  icon={statsItem.icon}
                  color={statsItem.color}
                  value={statsItem.value}
                />
              )}
            </For>
          </StatsContainer>
          <Tabs.Content class="ext-tabs__content" value="market">
            <Show when={isShowBuyButton()}>
              <div>
                <TradeTabButton
                  mode={TradeDir.Buy}
                  active={true}
                  onClick={() => handlers.buyMarket()}
                >
                  {tradeWidgetState.buySellButtonLabel}
                </TradeTabButton>
              </div>
            </Show>

            {/* Sell button */}

            <Show when={isShowSellButton()}>
              <div>
                <TradeTabButton
                  mode={TradeDir.Sell}
                  active={true}
                  onClick={() => handlers.sellMarket()}
                >
                  {tradeWidgetState.sellButtonLabel}
                </TradeTabButton>
              </div>
            </Show>

            {/* <Show when={oneTokenPriceInSol() > 0}>
              <div class="ext-text-[9px] ext-text-white">
                {amountSol()} SOL ≈{' '}
                {(amountSol() / oneTokenPriceInSol()).toFixed(2)} {ticker()}
              </div>
            </Show> */}

            <div class="ext-flex ext-w-full ext-justify-between ext-mt-[10px]">
              <For each={statsBottom}>
                {({ title, color, value }) => (
                  <BottomStatsCell title={title} color={color} value={value} />
                )}
              </For>
              <BottomStatsCell
                title={<PnL color="purple" />}
                color={BCellColor.green}
                value={'+0 (+0%)'}
                cn="flex-2"
              />
            </div>
          </Tabs.Content>
          <Tabs.Content class="ext-tabs__content" value="limit">
            Dashboard details
          </Tabs.Content>
          <Tabs.Content class="ext-tabs__content" value="trailing">
            Settings details
          </Tabs.Content>
          <Tabs.Content class="ext-tabs__content" value="autolimit">
            Contact details
          </Tabs.Content>
        </Tabs>
      </TW.Body>
    </TW.Container>
  );
};

export default TradeWidget;
