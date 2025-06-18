import { Component, JSX } from 'solid-js';

import cn from 'classnames';

type PaperProps = {
  children: JSX.Element;
  cn?: string;
  p?: string;
};

export const Paper: Component<PaperProps> = (props) => {
  const commonClasses = 'ext-bg-black ext-border ext-border-black-100';
  const p = {
    'ext-p-8': !props.p,
    [`ext-p-${props.p}`]: props.p,
  };
  return <div class={cn(commonClasses, props.cn, p)}>{props.children}</div>;
};
