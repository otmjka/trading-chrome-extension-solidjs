import { Component, JSX } from 'solid-js';
import cn from 'classnames';
import { FontSize, FW, TextColor, Typography } from '../../../uiKit/CabalExt';

export enum Dir {
  buy = 'buy',
  sell = 'sell',
}

export const CHeading: Component<{ dir?: Dir; left: string; right: string }> = (
  props,
) => {
  return (
    <div class="ext-flex ext-gap-1">
      <Typography
        size={FontSize.lg}
        color={props.dir === Dir.buy ? TextColor.green : TextColor.red}
        weight={FW.bold}
        cn="ext-text-lg"
      >
        {props.left}
      </Typography>
      <Typography size={FontSize.lg} weight={FW.bold} cn="ext-text-lg">
        {props.right}
      </Typography>
    </div>
  );
};

export const Header: Component<{ label: string }> = (props) => {
  return (
    <div class="ext-mb-8">
      <Typography size={FontSize.xl2}>{props.label}</Typography>
    </div>
  );
};

export const Content: Component<{ children: JSX.Element }> = (props) => {
  return <div>{props.children}</div>;
};

export const Row: Component<{ children: JSX.Element }> = (props) => {
  return <div class="ext-flex ext-gap-5 ext-mb-8">{props.children}</div>;
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
  const mb = { [`ext-mb-${props.mb}`]: !!props.mb };
  return <div class={cn(props.cn, mb)}>{props.children}</div>;
};
