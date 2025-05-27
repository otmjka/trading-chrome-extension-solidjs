import { Component, createSignal, For, Show } from 'solid-js';

import { Tabs } from '@kobalte/core/tabs';

import StatsCell from './StatsCell';
import StatsContainer from './StatsContainer';
import BottomStatsCell from './BottomStatsCell';
import { BCellColor, statMid, TradeDir } from './enums';
import BuyAmoutInput from './BuyAmoutInput';
import TradeDirSelector from './TradeDirSelector';
import TabsList from './TabsList';
import SellAmoutInput from './SellAmoutInput';
import pin from './icons/pin.svg';
import wallet from './icons/wallet.svg';
import sol from './icons/sol.svg';
import TradeTabButton from './TradeTabButton';
import PnL from './PnL';
import { Card, CardToolbar, CardContent } from './Card';

export const statsBottom = [
  { title: 'Bought', color: BCellColor.green, value: '0' },
  { title: 'Sold', color: BCellColor.red, value: '0' },
  { title: 'Holding', color: BCellColor.white, value: '0' },
];

const TradeWidget: Component = () => {
  const [tradeDirection, setTradeDirection] = createSignal(TradeDir.Sell);
  return (
    <Card cn="ext-max-w-[312px] ext-bg-blue-100 ext-border-gray-400">
      <CardToolbar>
        <div class="ext-flex ext-gap-1 ext-justify-end ext-mb-[6px]">
          <div class="ext-bg-gray-150 ext-border ext-border-gray-200 ext-w-[12px] ext-h-[12px] ext-flex ext-justify-center ext-items-end">
            <div class="ext-bg-white ext-h-[1px] ext-w-[5px] ext-mb-[4px]"></div>
          </div>
          <div class="ext-bg-gray-150 ext-border ext-w-[12px] ext-h-[12px] ext-flex ext-justify-center">
            <img class="ext-w-[5px]" src={pin} alt="pin" />
          </div>
        </div>
      </CardToolbar>
      <CardContent>
        <TradeDirSelector
          value={tradeDirection}
          onSelect={(value) => setTradeDirection(value)}
        />

        <Tabs>
          <div class="ext-flex ext-px-[11px] ext-items-baseline">
            <div class="ext-flex-1">
              <TabsList />
            </div>
            <div class="ext-flex ext-gap-2">
              <div class="ext-flex ext-gap-1 ext-items-baseline">
                <div>
                  <img src={wallet} alt="wallet" />
                </div>
                <div class="ext-text-xs ext-text-white ext-font-medium">1</div>
              </div>
              <div class="ext-flex ext-gap-1 ext-items-baseline">
                <div>
                  <img src={sol} alt="sol" />
                </div>
                <div class="ext-text-xs ext-text-white ext-font-medium">0</div>
              </div>
            </div>
          </div>

          <div class="ext-bg-gray-200 ext-h-[1px] ext-mt-[6px] ext-mb-[15px]"></div>
          <Show when={tradeDirection() === TradeDir.Buy}>
            <BuyAmoutInput />
          </Show>

          <Show when={tradeDirection() === TradeDir.Sell}>
            <SellAmoutInput />
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
          <Tabs.Content class="tabs__content" value="market">
            <div>
              <TradeTabButton
                mode={tradeDirection()}
                active={true}
                onClick={() => {}}
              >
                Buy 2 SOL *Ticker*
              </TradeTabButton>
            </div>

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
          <Tabs.Content class="tabs__content" value="limit">
            Dashboard details
          </Tabs.Content>
          <Tabs.Content class="tabs__content" value="trailing">
            Settings details
          </Tabs.Content>
          <Tabs.Content class="tabs__content" value="autolimit">
            Contact details
          </Tabs.Content>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TradeWidget;
