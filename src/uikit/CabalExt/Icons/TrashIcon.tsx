import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import trash from './trash_icon.svg';
const trash = chrome.runtime.getURL('assets2/trash_icon.svg');

export const TrashIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={trash} alt="trash" />
    </div>
  );
};
