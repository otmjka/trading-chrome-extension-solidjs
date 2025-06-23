import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import x from './x.svg';
const x = chrome.runtime.getURL('assets2/x.svg');

export const XIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={x} alt="x" />
    </div>
  );
};
