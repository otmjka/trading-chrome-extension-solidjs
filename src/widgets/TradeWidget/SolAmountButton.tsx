import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  cn?: string;
};

const SolAmountButton: Component<ButtonProps> = (props) => {
  const common =
    'w-[56px] text-xs whitespace-nowrap py-[6px] text-white text-center text-base rounded-lg font-medium';
  const unactive =
    '  bg-green-100 border border-green-500 hover:bg-green-500   transition ease-in duration-200';
  const active = 'bg-green-400';
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
