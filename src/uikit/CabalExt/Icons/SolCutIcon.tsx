import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import sol from './sol_cut.svg';
const sol = chrome.runtime.getURL('assets2/sol_cut.svg');

export const SolCutIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={sol} alt="sol" />
    </div>
  );
};
