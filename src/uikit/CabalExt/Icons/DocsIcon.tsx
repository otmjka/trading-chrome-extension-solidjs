import { Component } from 'solid-js';
import cn from 'classnames';
// import docs from './docs.svg';
const docs = chrome.runtime.getURL('assets2/docs.svg');

export const DocsIcon: Component<{ cn?: string; size?: string }> = (props) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={docs} alt="docs" />
    </div>
  );
};
