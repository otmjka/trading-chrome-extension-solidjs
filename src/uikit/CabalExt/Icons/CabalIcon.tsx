import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import cabal from './cabal_logo_sign.svg';
const cabal = chrome.runtime.getURL('assets2/cabal_logo_sign.svg');

export const CabalIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={cabal} alt="cabal" />
    </div>
  );
};
