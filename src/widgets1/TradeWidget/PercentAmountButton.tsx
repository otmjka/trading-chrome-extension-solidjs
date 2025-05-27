import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  cn?: string;
};

const PercentAmountButton: Component<ButtonProps> = (props) => {
  const common =
    'ext-w-[56px] ext-text-xs ext-whitespace-nowrap ext-py-[6px] ext-text-white ext-text-center ext-text-base ext-rounded-lg ext-font-medium';
  const unactive =
    '  ext-bg-red-200 ext-border ext-border-red-400 hover:ext-bg-red-500 ext-transition ext-ease-in ext-duration-200';
  const active = 'bg-red-400';
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
