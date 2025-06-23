import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import docs from './docs.svg';
const docs = chrome.runtime.getURL('assets2/docs.svg');

export const DocsIcon: Component<{ cn?: string; size?: string }> = (props) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={docs} alt="docs" />
    </div>
  );
};
