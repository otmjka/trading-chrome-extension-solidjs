import { Component } from 'solid-js';
import cn from 'classnames';
import {
  BColor,
  Button,
  FontSize,
  FW,
  SolIcon,
  TextColor,
  Typography,
} from '../../../uikit/CabalExt';

export const QuickButton: Component<{
  color?: BColor;
  amount: string;
  icon: 'sol' | 'perc';
  w?: string;
  onClick: () => void;
}> = (props) => {
  const w = {
    'e:w-16': !props.w,
    [`e:w-${props.w}`]: props.w,
  };
  return (
    <div class={cn(w)}>
      <Button
        onClick={props.onClick}
        full
        color={props.color}
        icon={
          props.icon === 'sol' ? (
            <SolIcon noStyles cn="e:w-[16px] e:h-[16px]" />
          ) : (
            <div>
              <Typography
                color={TextColor.b300}
                weight={FW.semi}
                children="%"
              />
            </div>
          )
        }
      >
        <Typography cn={'e:flex'} size={FontSize.sm} children={props.amount} />
      </Button>
    </div>
  );
};
