import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import min from './min.svg';
const min = chrome.runtime.getURL('assets2/min.svg');

export const MinIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={min} alt="min" />
    </div>
  );
};
