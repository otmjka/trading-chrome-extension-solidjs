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
      'e:py-2 e:px-4 e:bg-purple-600 e:text-white e:transition e:ease-in e:duration-200 e:text-center e:text-base e:shadow-md e:rounded-lg ',
      'focus:e:ring-indigo-500 focus:e:ring-offset-indigo-200 focus:e:outline-none focus:e:ring-2 focus:e:ring-offset-2',
      'hover:e:bg-purple-700',
      'disabled:e:bg-gray-300 disabled:e:text-gray-500 disabled:e:cursor-not-allowed',
      props.className,
    )}
    {...props}
  />
);

export const Btn = (props: ButtonProps) => (
  <KobalteButton
    type={props.type ?? 'button'}
    class={cn('e:bg-blue-500', props.className)}
    {...props}
  />
);

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  cn?: string;
};

export const Input = (props: InputProps) => (
  <input
    class={cn(
      'e:rounded-lg e:appearance-none e:border e:border-gray-600 e:py-2 e:px-4 e:bg-white e:text-gray-700 e:placeholder-gray-400 e:shadow-sm e:text-base focus:e:outline-none focus:e:ring-2 focus:e:ring-purple-600 focus:e:border-transparent',
      { [`${props.cn}`]: !!props.cn },
    )}
    {...props}
  />
);
