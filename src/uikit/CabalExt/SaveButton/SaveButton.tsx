import { Component, createEffect, createSignal, JSX } from 'solid-js';

import cn from 'classnames';

import { BColor, Button } from '../Button';

import { FontSize, FW, TextColor, Typography } from '../Typography';

type SaveButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: BColor;
  size?: FontSize;
  nowrap?: boolean;
};

export const SaveButton: Component<SaveButtonProps> = (props) => {
  const [color, setColor] = createSignal(props.color);

  createEffect(() => {
    setColor(props.color);
    console.log('SaveButton ,', props.color);
  });

  const common = 'e:px-5';
  const size = {
    'e:py-1': !props.size,
    'e:py-1.5': props.size === FontSize.sm,
  };
  return (
    <Button
      color={color()}
      cn={cn(size, common)}
      full
      clipped
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <Typography
        weight={FW.semi}
        nowrap={props.nowrap}
        size={props.size || FontSize.lg}
        color={TextColor.black}
        children={props.children || '-'}
      />
    </Button>
  );
};
