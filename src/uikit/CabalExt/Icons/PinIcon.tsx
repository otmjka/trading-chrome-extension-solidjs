import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import pin from './pin.svg';
const pin = chrome.runtime.getURL('assets2/pin.svg');

export const PinIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={pin} alt="pin" />
    </div>
  );
};
