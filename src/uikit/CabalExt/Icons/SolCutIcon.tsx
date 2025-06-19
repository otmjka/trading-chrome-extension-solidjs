import { Component } from 'solid-js';
import cn from 'classnames';
// import sol from './sol_cut.svg';
const sol = chrome.runtime.getURL('assets2/sol_cut.svg');

export const SolCutIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={sol} alt="sol" />
    </div>
  );
};
