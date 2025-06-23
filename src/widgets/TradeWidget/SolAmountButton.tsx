import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  cn?: string;
};

const SolAmountButton: Component<ButtonProps> = (props) => {
  const common =
    'e:w-[56px] e:text-xs e:whitespace-nowrap e:py-[6px] e:text-white e:text-center e:text-base e:rounded-lg e:font-medium';
  const unactive =
    'e:bg-green-100 e:border e:border-green-500 hover:e:bg-green-500 e:transition e:ease-in e:duration-200';
  const active = 'e:bg-green-400';
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

export default SolAmountButton;
