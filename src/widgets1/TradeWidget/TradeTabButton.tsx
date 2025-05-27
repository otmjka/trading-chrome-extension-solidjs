import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';
import { TradeDir } from './enums';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: TradeDir;
  active?: boolean;
  cn?: string;
};

const TradeTabButton: Component<ButtonProps> = (props) => {
  const color = props.mode === TradeDir.Buy ? 'green' : 'red';
  const active = `ext-bg-${color}-400 ext-border-${color}-400 hover:ext-bg-${color}-500 ext-transition ext-ease-in ext-duration-200 focus:ext-outline-none`;
  const unActive = 'ext-border-grey-200 ext-bg-blue-100';
  return (
    <KobalteButton
      type={props.type ?? 'button'}
      class={cn(
        'ext-py-1 ext-px-4 ext-w-full ext-border ext-rounded-[5px] ext-text-center ext-text-base ext-text-white ext-font-bold',
        { [`${active}`]: props.active, [`${unActive}`]: !props.active },
        props.cn,
      )}
      {...props}
    />
  );
};

export default TradeTabButton;
