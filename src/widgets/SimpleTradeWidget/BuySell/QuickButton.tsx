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
}> = (props) => {
  const w = {
    'ext-w-16': !props.w,
    [`ext-w-${props.w}`]: props.w,
  };
  return (
    <div class={cn(w)}>
      <Button
        full
        color={props.color}
        icon={
          props.icon === 'sol' ? (
            <SolIcon noStyles cn="ext-w-[16px] ext-h-[16px]" />
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
        <Typography
          cn={'ext-flex'}
          size={FontSize.sm}
          children={props.amount}
        />
      </Button>
    </div>
  );
};
