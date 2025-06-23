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
    'e:flex e:bg-black e:border e:border-black-300 e:divide-x e:divide-black-300 e:overflow-hidden';
  const commonClass =
    'e:text-white e:outline-none e:flex e:justify-center e:items-center ui-pressed:e:bg-black-300 ui-pressed:e:text-black ';
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
