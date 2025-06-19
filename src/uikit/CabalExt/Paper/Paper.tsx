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
  const commonClasses = 'ext-border';
  const color = {
    ['ext-bg-black ext-border-black-100']:
      props.color === PaperColor.black || !props.color,
    ['ext-bg-green-50 ext-border-green-200']: props.color === PaperColor.green,
    ['ext-bg-red-50 ext-border-red-200']: props.color === PaperColor.red,
  };
  const p = {
    'ext-p-8': !props.p,
    [`ext-p-${props.p}`]: props.p,
  };
  return (
    <div class={cn(commonClasses, p, color, props.cn)}>{props.children}</div>
  );
};
