import { Component, createEffect, createSignal, For } from 'solid-js';
import {
  BColor,
  Button,
  BV,
  FontSize,
  FW,
  IColor,
  IconButton,
  IIcon,
  InputSize,
  ModeIcon,
  NumberInput,
  Paper,
  PaperColor,
  TextColor,
  Typography,
} from '../../../uikit/CabalExt';

import { Title } from './Title';
import { QuickButton } from './QuickButton';
import { QuickInput } from './QuickInput';
import { ShareButton } from './ShareButton';
import { SolAmount } from '../../../widgets/SolAmount/SolAmount';
import { TWTabValue } from '../enums';
import { contentAppStore } from '../../../stores/contentAppStore';
import { formatLamports } from '../../../utils/formatLamports';

export type TradingWidgetState = {
  tabValue: TWTabValue;
};

export const BuySell: Component = () => {
  const [solBalanceLabel, setSolBalanceLabel] = createSignal<string>('');
  const [buysCount, setBuysCount] = createSignal<string>('-');
  const [ticker, setTicker] = createSignal<string>('-');
  createEffect(() => {
    const solBalance = contentAppStore.tradeStats?.solBalance;
    if (!solBalance) {
      return;
    }
    setSolBalanceLabel(formatLamports({ solBalance, tokenDecimals: 9 }));
  });

  createEffect(() => {
    setBuysCount(String(contentAppStore.tradeStats?.buys) || '-');
  });

  createEffect(() => {
    setTicker(String(contentAppStore.tokenStatus?.ticker) || '-');
  });

  return (
    <div>
      <Paper color={PaperColor.green} cn={'e:mt-3'} p="2">
        <div class="e:flex e:items-center">
          <div class="e:flex-1">
            <Title color="green" left="Quick" right="Buy" />
          </div>
          <div class="e:flex e:gap-2">
            <div>
              <Typography children={`Buys: ${buysCount}`} />
            </div>
            <div>
              <SolAmount amount={solBalanceLabel()} />
            </div>
          </div>
        </div>
        <div class="e:flex e:gap-[10px]">
          <For each={contentAppStore.config?.buySell.buyPresetsSol}>
            {(presetItem) => (
              <QuickButton
                icon={'sol'}
                amount={String(presetItem)}
                color={BColor.green}
              />
            )}
          </For>
        </div>
        <QuickInput />
      </Paper>
      <Paper color={PaperColor.red} cn={'e:mt-3'} p="2">
        <div class="e:flex e:items-center">
          <div class="e:flex-1">
            <Title left="Quick" right="Sell" />
          </div>
          <div class="e:flex e:gap-2 e:items-center">
            <div>
              <Typography children={`${ticker} 8M`} />
            </div>
            <div>
              <SolAmount amount="5" />
            </div>
            <div>
              <Typography children="+60%" />
            </div>
            <div>
              <IconButton>
                <ModeIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div class="e:flex e:gap-[10px]">
          <For each={contentAppStore.config?.buySell.sellPresetsSol}>
            {(presetItem) => (
              <QuickButton
                icon={'sol'}
                amount={String(presetItem)}
                color={BColor.red}
                onClick={() => setAmountBuySol(String(presetItem))}
              />
            )}
          </For>
        </div>
        <div class="e:flex e:items-end e:gap-2 e:mt-3">
          <div>
            <div>
              <Button color={BColor.red} full clipped={true}>
                <div class="e:px-4 e:py-1.5">
                  <Typography
                    weight={FW.semi}
                    nowrap
                    size={FontSize.sm}
                    color={TextColor.black}
                    children={'Sell initials'}
                  />
                </div>
              </Button>
            </div>
          </div>
          <div class="e:flex-1">
            <NumberInput
              placeholder="Enter"
              size={InputSize.sm}
              color={IColor.red}
              icon={IIcon.perc}
              onChange={() => {}}
            />
          </div>
          <div>
            <div>
              <Button color={BColor.red} full clipped={true}>
                <div class="e:px-4 e:py-1.5">
                  <Typography
                    weight={FW.semi}
                    nowrap
                    size={FontSize.sm}
                    color={TextColor.black}
                    children={'Sell'}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Paper>
      <div class="e:mt-6">
        <div class="e:flex">
          <div class="e:w-[167px]">
            <Button color={BColor.green} full variant={BV.contained}>
              <div class="e:flex e:items-center e:gap-2 e:px-2 e:py-1.5">
                <div class="e:bg-black e:size-2 e:rounded-full"></div>
                <Typography
                  weight={FW.semi}
                  nowrap
                  size={FontSize.sm}
                  color={TextColor.black}
                  children={'AutoLimits Activated'}
                />
              </div>
            </Button>
          </div>
          <div class="e:flex e:flex-1 e:justify-end">
            <div>
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
