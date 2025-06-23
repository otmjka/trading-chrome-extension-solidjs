import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  cn?: string;
};

const PercentAmountButton: Component<ButtonProps> = (props) => {
  const common =
    'e:w-[56px] e:text-xs e:whitespace-nowrap e:py-[6px] e:text-white e:text-center e:text-base e:rounded-lg e:font-medium';
  const unactive =
    'e:bg-red-200 e:border e:border-red-400 hover:ext-bg-red-500 e:transition e:ease-in e:duration-200';
  const active = 'e:bg-red-400';
  return (
    <KobalteButton
      type={props.type ?? 'button'}
      class={cn(
        common,
        { [`${unactive}`]: !props.active, [`${active}`]: props.active },
        props.cn,
      )}
      {...props}
    />
  );
};

export default PercentAmountButton;
