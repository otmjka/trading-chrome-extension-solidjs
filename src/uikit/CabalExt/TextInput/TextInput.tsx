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
  const commonInputCN = 'e:w-full e:text-xs e:leading-none e:outline-none';
  const inputColor = {
    'e:bg-green-100': props.color === IColor.green,
    'e:bg-red-100': props.color === IColor.red,
    'e:bg-black-100 e:text-white': props.color === IColor.grey,
  };
  const fieldContainer =
    'e:flex e:items-center e:pr-3 e:border e:py-[11px] e:pl-4';
  const containerColor = {
    'e:bg-green-100 e:border-green-500': props.color === IColor.green,
    'e:bg-red-100 e:border-red-500': props.color === IColor.red,
    'e:bg-black-100 e:border-black-200': props.color === IColor.grey,
  };
  return (
    <TextField class="e:w-full" value={props.value} onChange={props.onChange}>
      <div class={cn(fieldContainer, containerColor)}>
        <TextField.Input
          placeholder={props.placeholder}
          class={cn(commonInputCN, inputColor, props.cn)}
        />
      </div>
    </TextField>
  );
};
