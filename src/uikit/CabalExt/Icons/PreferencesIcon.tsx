import { Component } from 'solid-js';
import cn from 'classnames';
// import preferences from './preferences.svg';
const preferences = chrome.runtime.getURL('assets2/preferences.svg');

export const PreferencesIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={preferences} alt="preferences" />
    </div>
  );
};
