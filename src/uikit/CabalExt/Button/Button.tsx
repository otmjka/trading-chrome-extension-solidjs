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
  const commonCN = 'e:flex';

  const variantCN = {
    'e:border e:border-white ebrdwhite': variant === BV.outline,
  };

  const colorCN = {
    'e:bg-green-100 e:border e:border-green-400 ebrd-green-400':
      props.color === BColor.green &&
      !props.clipped &&
      props.variant !== BV.contained,
    'e:bg-green-400 ebggreen400': props.color === BColor.green && props.clipped,
    'e:bg-red-100 ebgred100 e:border e:border-red-500 ebrd-red-500':
      props.color === BColor.red && !props.clipped,
    'e:bg-red-500 ebgred500': props.color === BColor.red && props.clipped,
    'e:bg-green-500 ebggreen500':
      props.color === BColor.green && props.variant === BV.contained,
  };

  const hsizeCN = {
    'e:w-full': props.full,
  };

  const clippedCN = {
    'e:clip-path-[polygon(0%_0%,100%_0%,100%_70%,80%_100%,0%_100%)]':
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
        <span class="e:w-full e:flex e:px-2 epx2 e:py-1.5 epy1-5 e:items-center">
          <span class="e:flex-1 e:justify-start">
            <span>{children}</span>
          </span>
          <span class="e:justify-end">
            <span>{icon}</span>
          </span>
        </span>
      </Show>
    </KobalteButton>
  );
};
