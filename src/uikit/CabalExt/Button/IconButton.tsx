import { Component, JSX } from 'solid-js';
import { Button as KobalteButton } from '@kobalte/core/button';
import cn from 'classnames';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  cn?: string;
};

export const IconButton: Component<ButtonProps> = (props) => {
  const commonCN = 'e:text-white';
  return (
    <KobalteButton
      type={props.type ?? 'button'}
      class={cn(commonCN, props.cn)}
      {...props}
    >
      {props.children}
    </KobalteButton>
  );
};
