import { Component } from 'solid-js';

import { Switch } from '@kobalte/core/switch';

import { FontSize, FW, Typography } from '../../../uiKit/CabalExt';

export const SwitchInput: Component<{ item: { label: string } }> = (props) => {
  return (
    <Switch class="ext-flex ext-items-center ext-gap-2">
      <Switch.Label class="ext-flex-1">
        <Typography size={FontSize.lg} weight={FW.semi}>
          {props.item.label}
        </Typography>
      </Switch.Label>
      <Switch.Description />
      <Switch.ErrorMessage />
      <div class="ext-relative">
        <Switch.Input />
        <Switch.Control class="ext-py-0.5 ext-px-0.5 ext-w-11 ext-h-5 ext-rounded-full ext-bg-black-100 ext-transition-colors ext-duration-200 ext-relative ext-outline-none ui-checked:ext-bg-green-800 ui-disabled:ext-opacity-50 ext-cursor-pointer ext-block">
          <Switch.Thumb class="ext-size-4 ext-bg-black-400 ext-rounded-[10px] ext-transition-transform ext-duration-200 ext-transform ui-checked:ext-translate-x-6 ui-checked:ext-bg-green-500" />
        </Switch.Control>
      </div>
    </Switch>
  );
};
