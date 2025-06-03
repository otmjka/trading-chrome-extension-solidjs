import cn from 'classnames';
import { JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = (props: ButtonProps) => (
  <KobalteButton
    type={props.type ?? 'button'}
    class={cn(
      'ext-py-2 ext-px-4 ext-bg-purple-600 ext-text-white ext-transition ext-ease-in ext-duration-200 ext-text-center ext-text-base ext-shadow-md ext-rounded-lg ',
      'focus:ext-ring-indigo-500 focus:ext-ring-offset-indigo-200 focus:ext-outline-none focus:ext-ring-2 focus:ext-ring-offset-2',
      'hover:ext-bg-purple-700',
      'disabled:ext-bg-gray-300 disabled:ext-text-gray-500 disabled:ext-cursor-not-allowed',
      props.className,
    )}
    {...props}
  />
);

export const Btn = (props: ButtonProps) => (
  <KobalteButton
    type={props.type ?? 'button'}
    class={cn('ext-bg-blue-500', props.className)}
    {...props}
  />
);

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  cn?: string;
};

export const Input = (props: InputProps) => (
  <input
    class={cn(
      'ext-rounded-lg ext-appearance-none ext-border ext-border-gray-600 ext-py-2 ext-px-4 ext-bg-white ext-text-gray-700 ext-placeholder-gray-400 ext-shadow-sm ext-text-base focus:ext-outline-none focus:ext-ring-2 focus:ext-ring-purple-600 focus:ext-border-transparent',
      { [`${props.cn}`]: !!props.cn },
    )}
    {...props}
  />
);
