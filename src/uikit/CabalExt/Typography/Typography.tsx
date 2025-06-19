import { Component, JSX } from 'solid-js';

import cn from 'classnames';

export enum TextColor {
  white = 'ext-text-white',
  green = 'ext-text-green-500',
  red = 'ext-text-red-500',
  black = 'ext-text-black',
  b200 = 'ext-text-black-200',
  b300 = 'ext-text-black-300',
  inherit = '',
}

export enum FontSize {
  xl2 = 'ext-text-2xl',
  lg = 'ext-text-lg',
  sm = 'ext-text-sm',
  xs = 'ext-text-xs',
}

export enum FW {
  semi = 'ext-font-semibold',
  bold = 'ext-font-bold',
  normal = 'ext-font-normal',
  md = 'ext-font-medium',
}

type TypographyProps = {
  children: JSX.Element;
  color?: TextColor;
  upper?: boolean;
  size?: FontSize;
  weight?: FW;
  cn?: string;
  nowrap?: boolean;
};

export const Typography: Component<TypographyProps> = (props) => {
  const {
    size = FontSize.xs,
    color = TextColor.white,
    weight = FW.normal,
  } = props;
  const upper = props.upper ? 'ext-uppercase' : '';
  const commonClasses = 'ext-font-chakra';
  const nowrap = props.nowrap ? 'ext-whitespace-nowrap' : '';
  return (
    <div
      class={cn(commonClasses, color, size, weight, upper, nowrap, props.cn)}
    >
      {props.children}
    </div>
  );
};
