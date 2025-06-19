import { Component, For } from 'solid-js';
import cn from 'classnames';

import { ToggleGroup } from '@kobalte/core/toggle-group';

import { TextColor, Typography } from '../Typography';

export const BtnGroup: Component<{
  items: Array<{ value: string; label: string }>;
  value: string;
  itemCN?: string;

  onChange: (item: string | null) => void;
}> = (props) => {
  const groupClass =
    'ext-flex ext-bg-black ext-border ext-border-black-300 ext-divide-x ext-divide-black-300 ext-overflow-hidden';
  const commonClass =
    'ext-text-white ext-outline-none ext-flex ext-justify-center ext-items-center ui-pressed:ext-bg-black-300 ui-pressed:ext-text-black ';
  return (
    <ToggleGroup
      value={props.value}
      onChange={props.onChange}
      class={cn(groupClass)}
    >
      <For each={props.items}>
        {(item) => {
          return (
            <ToggleGroup.Item
              class={cn(commonClass, props.itemCN)}
              value={item.value}
              aria-label={item.value}
            >
              <Typography color={TextColor.inherit} children={item.label} />
            </ToggleGroup.Item>
          );
        }}
      </For>
    </ToggleGroup>
  );
};
