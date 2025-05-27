import { Component, JSX } from 'solid-js';

import cn from 'classnames';

type CardContentProps = {
  children: JSX.Element;
  cn?: string;
};

const CardContent: Component<CardContentProps> = (props) => (
  <div class={cn('', props.cn)}>{props.children}</div>
);

export default CardContent;
