import { Component } from 'solid-js';
import cn from 'classnames';
// import trash from './trash_icon.svg';
const trash = chrome.runtime.getURL('assets2/trash_icon.svg');

export const TrashIcon: Component<{ cn?: string; size?: string }> = (props) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={trash} alt="trash" />
    </div>
  );
};
