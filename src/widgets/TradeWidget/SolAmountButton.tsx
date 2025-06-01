import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  cn?: string;
};

const SolAmountButton: Component<ButtonProps> = (props) => {
  const common =
    'ext-w-[56px] ext-text-xs ext-whitespace-nowrap ext-py-[6px] ext-text-white ext-text-center ext-text-base ext-rounded-lg ext-font-medium';
  const unactive =
    'ext-bg-green-100 ext-border ext-border-green-500 hover:ext-bg-green-500 ext-transition ext-ease-in ext-duration-200';
  const active = 'ext-bg-green-400';
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
