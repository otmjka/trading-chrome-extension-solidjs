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
  const active = `bg-${color}-400 border-${color}-400 hover:bg-${color}-500 transition ease-in duration-200 focus:outline-none`;
  const unActive = 'border-grey-200 bg-blue-100';
  return (
    <KobalteButton
      type={props.type ?? 'button'}
      class={cn(
        'py-1 px-4 w-full border rounded-[5px] text-center text-base text-white font-bold',
        { [`${active}`]: props.active, [`${unActive}`]: !props.active },
        props.cn,
      )}
      {...props}
    />
  );
};

export default TradeTabButton;
