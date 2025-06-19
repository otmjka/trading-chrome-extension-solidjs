import { Component, JSX, Show } from 'solid-js';
import cn from 'classnames';

import { NumberField } from '@kobalte/core/number-field';
import { SolIcon } from '../Icons';
import { FontSize, FW, TextColor, Typography } from '../Typography';
import { IColor } from '../enums';

export enum IIcon {
  sol = 'sol',
  perc = 'perc',
}

export enum InputSize {
  sm = 'sm',
}

export const NumberInput: Component<{
  cn?: string;
  color?: IColor;
  icon?: IIcon;
  label?: JSX.Element;
  value?: string;
  size?: InputSize;
  placeholder?: string;
  onChange: (value: string) => void;
}> = (props) => {
  const commonInputCN =
    'ext-font-chakra ext-text-sm ext-w-full ext-text-white ext-leading-none ext-outline-none';
  const inputColor = {
    'ext-bg-green-100': props.color === IColor.green,
    'ext-bg-red-100': props.color === IColor.red,
    'ext-bg-black-100': props.color === IColor.grey,
  };
  const size = {
    'ext-py-[11px]': !props.size,
    'ext-py-[7px]': props.size === InputSize.sm,
  };
  const fieldContainer =
    'ext-flex  ext-items-center ext-pr-3 ext-border  ext-pl-4';
  const containerColor = {
    'ext-bg-green-100 ext-border-green-500': props.color === IColor.green,
    'ext-bg-red-100 ext-border-red-500': props.color === IColor.red,
    'ext-bg-black-100 ext-border-black-200': props.color === IColor.grey,
  };
  return (
    <NumberField
      class="number-field"
      value={props.value}
      formatOptions={{
        maximumFractionDigits: 10, // Максимальное количество знаков после запятой
      }}
      onChange={props.onChange}
    >
      <Show when={!!props.label}>
        <NumberField.Label class="ext-text-white ext-text-[8px]">
          <Typography
            cn={'ext-mb-2'}
            size={FontSize.sm}
            nowrap
            children={props.label}
          />
        </NumberField.Label>
      </Show>
      <div class={cn(fieldContainer, size, containerColor)}>
        <NumberField.Input
          placeholder={props.placeholder}
          class={cn(commonInputCN, inputColor, props.cn)}
        />
        <Show when={props.icon === IIcon.sol}>
          <SolIcon />
        </Show>
        <Show when={props.icon === IIcon.perc}>
          <div class="ext-w-6 ext-h-4">
            <Typography color={TextColor.b300} weight={FW.md} children="%" />
          </div>
        </Show>
      </div>
    </NumberField>
  );
};
