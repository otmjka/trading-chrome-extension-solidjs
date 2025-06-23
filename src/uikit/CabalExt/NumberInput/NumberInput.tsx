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
    'e:font-chakra e:text-sm e:w-full e:text-white e:leading-none e:outline-none';
  const inputColor = {
    'e:bg-green-100': props.color === IColor.green,
    'e:bg-red-100': props.color === IColor.red,
    'e:bg-black-100': props.color === IColor.grey,
  };
  const size = {
    'e:py-[11px]': !props.size,
    'e:py-[7px]': props.size === InputSize.sm,
  };
  const fieldContainer = 'e:flex  e:items-center e:pr-3 e:border  e:pl-4';
  const containerColor = {
    'e:bg-green-100 e:border-green-500 ebrd-green-500':
      props.color === IColor.green,
    'e:bg-red-100 e:border-red-500 ebrd-red-500': props.color === IColor.red,
    'e:bg-black-100 e:border-black-200 ebrd-black-200':
      props.color === IColor.grey,
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
        <NumberField.Label class="e:text-white e:text-[8px]">
          <Typography
            cn={'e:mb-2'}
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
          <div class="e:w-6 e:h-4">
            <Typography color={TextColor.b300} weight={FW.md} children="%" />
          </div>
        </Show>
      </div>
    </NumberField>
  );
};
