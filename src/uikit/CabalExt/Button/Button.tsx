import { Component, createEffect, createSignal, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

export enum BColor {
  green = 'green',
  red = 'red',
}

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: BColor;
  full?: boolean;
  clipped?: boolean;
  cn?: string;
};

export const Button: Component<ButtonProps> = (props) => {
  const [colorProps, setColorProps] = createSignal(props.color);
  const [color, setColor] = createSignal({
    'ext-bg-green-400 ext-text-black': colorProps() === BColor.green,
    'ext-bg-red-400 ext-text-black': colorProps() === BColor.red,
  });

  createEffect(() => {
    setColorProps(props.color);
  });

  createEffect(() => {
    setColor({
      'ext-bg-green-400 ext-text-black':
        !colorProps() || colorProps() === BColor.green,
      'ext-bg-red-400 ext-text-black': colorProps() === BColor.red,
    });
  });

  const commonCN = '';

  const hsize = {
    'ext-w-full': props.full,
  };

  const clipped = {
    'ext-clip-path-[polygon(0%_0%,100%_0%,100%_70%,80%_100%,0%_100%)]':
      props.clipped,
  };
  const style = props.clipped
    ? {
        'clip-path':
          'polygon(0% 0%, 100% 0%, 100% 100%, 16px 100%, 0% calc(100% - 13px))',
      }
    : {};
  return (
    <KobalteButton
      style={style}
      type={props.type ?? 'button'}
      class={cn(commonCN, props.cn, color(), hsize, clipped)}
      {...props}
    />
  );
};
