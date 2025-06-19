import { Component, JSX, Show } from 'solid-js';
import cn from 'classnames';

import { TextField } from '@kobalte/core/text-field';
import { IColor } from '../enums';

type TextInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  cn?: string;
  color?: IColor;
  label?: JSX.Element;
  value?: string;
  onChange: (value: string) => void;
};

export const TextInput: Component<TextInputProps> = (props) => {
  const commonInputCN =
    'ext-w-full ext-text-xs ext-leading-none ext-outline-none';
  const inputColor = {
    'ext-bg-green-100': props.color === IColor.green,
    'ext-bg-red-100': props.color === IColor.red,
    'ext-bg-black-100 ext-text-white': props.color === IColor.grey,
  };
  const fieldContainer =
    'ext-flex ext-items-center ext-pr-3 ext-border ext-py-[11px] ext-pl-4';
  const containerColor = {
    'ext-bg-green-100 ext-border-green-500': props.color === IColor.green,
    'ext-bg-red-100 ext-border-red-500': props.color === IColor.red,
    'ext-bg-black-100 ext-border-black-200': props.color === IColor.grey,
  };
  return (
    <TextField class="ext-w-full" value={props.value} onChange={props.onChange}>
      <div class={cn(fieldContainer, containerColor)}>
        <TextField.Input
          placeholder={props.placeholder}
          class={cn(commonInputCN, inputColor, props.cn)}
        />
      </div>
    </TextField>
  );
};
