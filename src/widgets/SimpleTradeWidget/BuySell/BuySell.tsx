import { Component, For } from 'solid-js';
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

export type TradingWidgetState = {
  tabValue: TWTabValue;
};

export const BuySell: Component = () => {
  return (
    <div>
      <Paper color={PaperColor.green} cn={'ext-mt-3'} p="2">
        <div class="ext-flex ext-items-center">
          <div class="ext-flex-1">
            <Title color="green" left="Quick" right="Buy" />
          </div>
          <div class="ext-flex ext-gap-2">
            <div>
              <Typography children="Buys: 1" />
            </div>
            <div>
              <SolAmount amount="5" />
            </div>
          </div>
        </div>
        <div class="ext-flex ext-gap-[10px]">
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
      <Paper color={PaperColor.red} cn={'ext-mt-3'} p="2">
        <div class="ext-flex ext-items-center">
          <div class="ext-flex-1">
            <Title left="Quick" right="Sell" />
          </div>
          <div class="ext-flex ext-gap-2 ext-items-center">
            <div>
              <Typography children="$Alpha 8M" />
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
        <div class="ext-flex ext-gap-[10px]">
          <QuickButton icon={'sol'} amount="0.5" color={BColor.red} />
          <QuickButton icon={'sol'} amount="0.5" color={BColor.red} />
          <QuickButton icon={'sol'} amount="0.5" color={BColor.red} />
          <QuickButton icon={'sol'} amount="0.5" color={BColor.red} />
        </div>
        <div class="ext-flex ext-items-end ext-gap-2 ext-mt-3">
          <div>
            <div>
              <Button color={BColor.red} full clipped={true}>
                <div class="ext-px-4 ext-py-1.5">
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
          <div class="ext-flex-1">
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
                <div class="ext-px-4 ext-py-1.5">
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
      <div class="ext-mt-6">
        <div class="ext-flex">
          <div class="ext-w-[167px]">
            <Button color={BColor.green} full variant={BV.contained}>
              <div class="ext-flex ext-items-center ext-gap-2 ext-px-2 ext-py-1.5">
                <div class="ext-bg-black ext-size-2 ext-rounded-full"></div>
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
          <div class="ext-flex ext-flex-1 ext-justify-end">
            <div>
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
