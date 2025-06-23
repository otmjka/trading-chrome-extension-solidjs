import { Component, JSX } from 'solid-js';

import cn from 'classnames';
import { PaperColor } from '../enums';

type PaperProps = {
  children: JSX.Element;
  cn?: string;
  p?: string;
  color?: PaperColor;
};

export const Paper: Component<PaperProps> = (props) => {
  const commonClasses = 'e:border';
  const color = {
    ['e:bg-black ebrd-black-100 e:border-black-100']:
      props.color === PaperColor.black || !props.color,
    ['e:bg-green-50 e:border-green-200 ebrd-green-200']:
      props.color === PaperColor.green,
    ['e:bg-red-50 e:border-red-200 ebrd-red-200']:
      props.color === PaperColor.red,
  };
  const p = {
    'e:px-8 e:py-8': !props.p,
    [`e:px-${props.p} e:py-${props.p} epx${props.p} epy${props.p}`]: props.p,
  };
  return (
    <div class={cn(commonClasses, p, color, props.cn)}>{props.children}</div>
  );
};
