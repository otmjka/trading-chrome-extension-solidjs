import { Component, JSX } from 'solid-js';

import cn from 'classnames';

export enum TextColor {
  white = 'e:text-white',
  green = 'e:text-green-500',
  red = 'e:text-red-500',
  black = 'e:text-black',
  b200 = 'e:text-black-200',
  b300 = 'e:text-black-300',
  inherit = '',
}

export enum FontSize {
  xl2 = 'e:text-2xl',
  lg = 'e:text-lg',
  sm = 'e:text-sm',
  xs = 'e:text-xs',
}

export enum FW {
  semi = 'e:font-semibold',
  bold = 'e:font-bold',
  normal = 'e:font-normal',
  md = 'e:font-medium',
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
  const upper = props.upper ? 'e:uppercase' : '';
  const commonClasses = 'e:font-chakra';
  const nowrap = props.nowrap ? 'e:whitespace-nowrap' : '';
  return (
    <div
      class={cn(commonClasses, color, size, weight, upper, nowrap, props.cn)}
    >
      {props.children}
    </div>
  );
};
