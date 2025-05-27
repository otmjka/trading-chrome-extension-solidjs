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
    <Card cn="max-w-[312px] bg-blue-100 border-gray-400">
      <CardToolbar>
        <div class="flex gap-1 justify-end mb-[6px]">
          <div class="bg-gray-150 border border-gray-200 w-[12px] h-[12px] flex justify-center items-end">
            <div class="bg-white h-[1px] w-[5px] mb-[4px]"></div>
          </div>
          <div class="bg-gray-150 border w-[12px] h-[12px] flex justify-center">
            <img class="w-[5px]" src={pin} alt="pin" />
          </div>
        </div>
      </CardToolbar>
      <CardContent>
        <TradeDirSelector
          value={tradeDirection}
          onSelect={(value) => setTradeDirection(value)}
        />

        <Tabs>
          <div class="flex px-[11px] items-baseline">
            <div class="flex-1">
              <TabsList />
            </div>
            <div class="flex gap-2">
              <div class="flex gap-1 items-baseline">
                <div>
                  <img src={wallet} alt="wallet" />
                </div>
                <div class="text-xs text-white font-medium">1</div>
              </div>
              <div class="flex gap-1 items-baseline">
                <div>
                  <img src={sol} alt="sol" />
                </div>
                <div class="text-xs text-white font-medium">0</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-200 h-[1px] mt-[6px] mb-[15px]"></div>
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

            <div class="flex w-full justify-between mt-[10px]">
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
