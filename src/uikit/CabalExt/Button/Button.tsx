import { Component, JSX, JSXElement, Show } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

export enum BColor {
  green = 'green',
  red = 'red',
}

export enum BV {
  outline = 'outline',
  contained = 'contained',
}

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: BColor;
  full?: boolean;
  clipped?: boolean;
  cn?: string;
  icon?: JSXElement;
  variant?: BV;
};

export const Button: Component<ButtonProps> = (props) => {
  const {
    color,
    full,
    clipped,
    cn: cnValue,
    icon,
    children,
    variant,
    ...restProps
  } = props;
  const commonCN = 'ext-flex';

  const variantCN = {
    'ext-border ext-border-white': variant === BV.outline,
  };

  const colorCN = {
    'ext-bg-green-100 ext-border ext-border-green-400':
      props.color === BColor.green &&
      !props.clipped &&
      props.variant !== BV.contained,
    'ext-bg-green-400': props.color === BColor.green && props.clipped,
    'ext-bg-red-100 ext-border ext-border-red-500':
      props.color === BColor.red && !props.clipped,
    'ext-bg-red-500': props.color === BColor.red && props.clipped,
    'ext-bg-green-500':
      props.color === BColor.green && props.variant === BV.contained,
  };

  const hsizeCN = {
    'ext-w-full': props.full,
  };

  const clippedCN = {
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
      class={cn(commonCN, cnValue, colorCN, hsizeCN, clippedCN, variantCN)}
      {...restProps}
    >
      <Show when={!icon}>{children}</Show>

      <Show when={!!icon}>
        <span class="ext-w-full ext-flex ext-px-2 ext-py-1.5 ext-items-center">
          <span class="ext-flex-1 ext-justify-start">
            <span>{children}</span>
          </span>
          <span class="ext-justify-end">
            <span>{icon}</span>
          </span>
        </span>
      </Show>
    </KobalteButton>
  );
};
