import { Component } from 'solid-js';
import cn from 'classnames';
// import wallet from './wallet.svg';
const wallet = chrome.runtime.getURL('assets2/wallet.svg');

export const WalletIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={wallet} alt="wallet" />
    </div>
  );
};
