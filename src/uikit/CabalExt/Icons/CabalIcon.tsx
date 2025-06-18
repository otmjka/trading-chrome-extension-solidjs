import { Component } from 'solid-js';
import cn from 'classnames';
// import cabal from './cabal_logo_sign.svg';
const cabal = chrome.runtime.getURL('assets2/cabal_logo_sign.svg');

export const CabalIcon: Component<{ cn?: string; size?: string }> = (props) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={cabal} alt="cabal" />
    </div>
  );
};
