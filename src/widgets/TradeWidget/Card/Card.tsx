import { JSX } from 'solid-js';

import cn from 'classnames';

type CardProps = {
  children: JSX.Element;
  cn?: string;
};

const Card = (props: CardProps) => (
  <div class={cn('px-[15px] py-[9px] shadow-lg rounded-lg border', props.cn)}>
    {props.children}
  </div>
);

export default Card;
