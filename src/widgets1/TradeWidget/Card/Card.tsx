import { JSX } from 'solid-js';

import cn from 'classnames';

type CardProps = {
  children: JSX.Element;
  cn?: string;
};

const Card = (props: CardProps) => (
  <div
    class={cn(
      'ext-px-[15px] ext-py-[9px] ext-shadow-lg ext-rounded-lg ext-border',
      props.cn,
    )}
  >
    {props.children}
  </div>
);

export default Card;
