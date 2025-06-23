import { Component, JSX } from 'solid-js';
import cn from 'classnames';
import { FontSize, FW, TextColor, Typography } from '../../../uikit/CabalExt';

export enum Dir {
  buy = 'buy',
  sell = 'sell',
}

export const CHeading: Component<{ dir?: Dir; left: string; right: string }> = (
  props,
) => {
  return (
    <div class="e:flex e:gap-1">
      <Typography
        size={FontSize.lg}
        color={props.dir === Dir.buy ? TextColor.green : TextColor.red}
        weight={FW.bold}
        cn="e:text-lg"
      >
        {props.left}
      </Typography>
      <Typography size={FontSize.lg} weight={FW.bold} cn="e:text-lg">
        {props.right}
      </Typography>
    </div>
  );
};

export const Header: Component<{ label: string }> = (props) => {
  return (
    <div class="e:mb-8">
      <Typography size={FontSize.xl2}>{props.label}</Typography>
    </div>
  );
};

export const Content: Component<{ children: JSX.Element }> = (props) => {
  return <div>{props.children}</div>;
};

export const Row: Component<{ children: JSX.Element }> = (props) => {
  return <div class="e:flex e:gap-5 e:mb-8">{props.children}</div>;
};

export const Left: Component<{ cn?: string; children: JSX.Element }> = (
  props,
) => {
  return <div class={cn(props.cn)}>{props.children}</div>;
};

export const Right: Component<{ cn?: string; children: JSX.Element }> = (
  props,
) => {
  return <div class={cn(props.cn)}>{props.children}</div>;
};

export const Box: Component<{
  cn?: string;
  mb?: string;
  children: JSX.Element;
}> = (props) => {
  const mb = { [`e:mb-${props.mb}`]: !!props.mb };
  return <div class={cn(props.cn, mb)}>{props.children}</div>;
};
