import { Component } from 'solid-js';

import { Switch } from '@kobalte/core/switch';

import { FontSize, FW, Typography } from '../../../uikit/CabalExt';

export const SwitchInput: Component<{ item: { label: string } }> = (props) => {
  return (
    <Switch class="e:flex e:items-center e:gap-2">
      <Switch.Label class="e:flex-1">
        <Typography size={FontSize.lg} weight={FW.semi}>
          {props.item.label}
        </Typography>
      </Switch.Label>
      <Switch.Description />
      <Switch.ErrorMessage />
      <div class="e:relative">
        <Switch.Input />
        <Switch.Control class="e:py-0.5 e:px-0.5 e:w-11 e:h-5 e:rounded-full e:bg-black-100 e:transition-colors e:duration-200 e:relative e:outline-none ui-checked:e:bg-green-800 ui-disabled:e:opacity-50 e:cursor-pointer e:block">
          <Switch.Thumb class="e:size-4 e:bg-black-400 e:rounded-[10px] e:transition-transform e:duration-200 e:transform ui-checked:e:translate-x-6 ui-checked:e:bg-green-500" />
        </Switch.Control>
      </div>
    </Switch>
  );
};
