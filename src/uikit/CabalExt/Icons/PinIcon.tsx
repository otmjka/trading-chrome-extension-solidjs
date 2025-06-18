import { Component } from 'solid-js';
import cn from 'classnames';
// import pin from './pin.svg';
const pin = chrome.runtime.getURL('assets2/pin.svg');

export const PinIcon: Component<{ cn?: string; size?: string }> = (props) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={pin} alt="pin" />
    </div>
  );
};
