import { Component } from 'solid-js';
import cn from 'classnames';

// import sol from './sol.svg';
const sol = chrome.runtime.getURL('assets2/sol.svg');

export const SolIcon: Component<{ cn?: string; noStyles?: boolean }> = (
  props,
) => {
  const common = props.noStyles ? '' : 'ext-w-6 ext-h-4';
  return (
    <div class={cn(common, props.cn)}>
      <img src={sol} alt="sol" />
    </div>
  );
};
