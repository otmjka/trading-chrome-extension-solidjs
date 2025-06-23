import { Component, Show } from 'solid-js';
import cn from 'classnames';
import { FontSize, FW, TextColor, Typography } from '../../../uikit/CabalExt';

export const Title: Component<{
  color?: 'red' | 'green';
  left?: string;
  right: string;
}> = (props) => {
  const common = {
    ['e:flex e:gap-2']: !!props.left && !!props.right,
    ['e:flex']: !props.left || !props.right,
  };
  return (
    <div class={cn(common)}>
      <Show when={props.left}>
        <Typography size={FontSize.lg} children={props.left} />
      </Show>
      <Typography
        size={FontSize.lg}
        color={props.color === 'green' ? TextColor.green : TextColor.red}
        weight={FW.semi}
        children={props.right}
      />
    </div>
  );
};
