import { Component } from 'solid-js';
import cn from 'classnames';
// import min from './min.svg';
const min = chrome.runtime.getURL('assets2/min.svg');

export const MinIcon: Component<{ cn?: string; size?: string }> = (props) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={min} alt="min" />
    </div>
  );
};
