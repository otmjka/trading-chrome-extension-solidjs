import { Component } from 'solid-js';
import {
  FontSize,
  IconButton,
  MinIcon,
  PreferencesIcon,
  Typography,
} from '../../../uikit/CabalExt';

import { Tabs } from '@kobalte/core/tabs';

export const TWHeader: Component<{ openFull: () => void }> = (props) => {
  return (
    <div class="ext-flex">
      <div>
        <div class="ext-relative">
          <Tabs.List>
            <Tabs.Trigger class="ext-px-2 ext-py-[2px]" value="buysell">
              <Typography size={FontSize.sm} children="Buy/Sell" />
            </Tabs.Trigger>
            <Tabs.Trigger class="ext-px-2 ext-py-[2px]" value="migration">
              <Typography size={FontSize.sm} children="Migration" />
            </Tabs.Trigger>
            <Tabs.Trigger class="ext-px-2 ext-py-[2px]" value="limits">
              <Typography size={FontSize.sm} children="Limits" />
            </Tabs.Trigger>
            <Tabs.Indicator class="ext-h-[1px] ext-bg-white ext-absolute ext-bottom-[-2px] ext-transition-all" />
          </Tabs.List>
        </div>
      </div>
      <div class="ext-flex ext-flex-1 ext-items-center">
        <div class="ext-flex ext-flex-1 ext-justify-end ext-gap-2">
          <div class="ext-size-7.5">
            <IconButton cn="ext-bg-black-100" onClick={props.openFull}>
              <PreferencesIcon size="7.5" />
            </IconButton>
          </div>
          <div class="ext-size-7.5 ext-bg-green-100">
            <IconButton cn="ext-bg-black-100">
              <MinIcon size="7.5" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
