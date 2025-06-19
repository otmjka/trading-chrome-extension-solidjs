import { Component, JSX } from 'solid-js';

import cn from 'classnames';
import { Typography } from './Typography';

type ColorTextProps = {
  children?: JSX.Element;
  cn?: string;
};

export const ColorText: Component<ColorTextProps> = (props) => {
  return <Typography>{props.children}</Typography>;
};
