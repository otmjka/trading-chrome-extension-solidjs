import { Component } from 'solid-js';
import cn from 'classnames';

import {
  FontSize,
  IconButton,
  MinIcon,
  PreferencesIcon,
  Typography,
} from '../../../uikit/CabalExt';

import { Tabs } from '@kobalte/core/tabs';

export const TWHeader: Component<{ openFull: () => void }> = (props) => {
  const trCN = 'e:px-2 e:py-[2px] epx2 epy2px';
  return (
    <div class="e:flex">
      <div>
        <div class="e:relative">
          <Tabs.List>
            <Tabs.Trigger class={cn(trCN)} value="buysell">
              <Typography size={FontSize.sm} children="Buy/Sell" />
            </Tabs.Trigger>
            <Tabs.Trigger class={cn(trCN)} value="migration">
              <Typography size={FontSize.sm} children="Migration" />
            </Tabs.Trigger>
            <Tabs.Trigger class={cn(trCN)} value="limits">
              <Typography size={FontSize.sm} children="Limits" />
            </Tabs.Trigger>
            <Tabs.Indicator class="e:h-[1px] e:bg-white e:absolute e:bottom-[-2px] e:transition-all" />
          </Tabs.List>
        </div>
      </div>
      <div class="e:flex e:flex-1 e:items-center">
        <div class="e:flex e:flex-1 e:justify-end e:gap-2">
          <div class="e:size-7.5">
            <IconButton cn="e:bg-black-100" onClick={props.openFull}>
              <PreferencesIcon size="7.5" />
            </IconButton>
          </div>
          <div class="e:size-7.5 e:bg-green-100">
            <IconButton cn="e:bg-black-100">
              <MinIcon size="7.5" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
