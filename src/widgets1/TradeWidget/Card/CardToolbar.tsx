import { Component, JSX } from 'solid-js';

import cn from 'classnames';

type CardToolbarProps = {
  children: JSX.Element;
  cn?: string;
};

const CardToolbar: Component<CardToolbarProps> = (props) => (
  <div class={cn(props.cn)}>{props.children}</div>
);

export default CardToolbar;
