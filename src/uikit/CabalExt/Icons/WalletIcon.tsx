import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import wallet from './wallet.svg';
const wallet = chrome.runtime.getURL('assets2/wallet.svg');

export const WalletIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={wallet} alt="wallet" />
    </div>
  );
};
