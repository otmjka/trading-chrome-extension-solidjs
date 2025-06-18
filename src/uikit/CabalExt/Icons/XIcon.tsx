import { Component } from 'solid-js';
import cn from 'classnames';
// import x from './x.svg';
const x = chrome.runtime.getURL('assets2/x.svg');

export const XIcon: Component<{ cn?: string; size?: string }> = (props) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={x} alt="x" />
    </div>
  );
};
