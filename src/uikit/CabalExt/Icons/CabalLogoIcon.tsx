import { Component } from 'solid-js';
import cn from 'classnames';
// import logo from './logo_cabal_horizontal.svg';
const logo = chrome.runtime.getURL('assets2/logo_cabal_horizontal.svg');

export const CabalLogoIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={logo} alt="logo" />
    </div>
  );
};
