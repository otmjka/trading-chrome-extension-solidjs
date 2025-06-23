import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import share from './share_icon.svg';
const share = chrome.runtime.getURL('assets2/share_icon.svg');

export const ShareIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={share} alt="share" />
    </div>
  );
};
