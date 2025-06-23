import { Accessor, Component, JSX } from 'solid-js';
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
  console.log(props.mode, color);
  const active = `e:bg-${color}-400 e:border-${color}-400 hover:e:bg-${color}-500 e:transition e:ease-in e:duration-200 focus:e:outline-none`;
  const unActive = 'e:border-grey-200 e:bg-blue-100';
  return (
    <KobalteButton
      type={props.type ?? 'button'}
      class={cn(
        'e:py-1 e:px-4 e:w-full e:border e:rounded-[5px] e:text-center e:text-base e:text-white e:font-bold disabled:e:bg-black',
        { [`${active}`]: props.active, [`${unActive}`]: !props.active },
        props.cn,
      )}
      {...props}
    />
  );
};

export default TradeTabButton;
