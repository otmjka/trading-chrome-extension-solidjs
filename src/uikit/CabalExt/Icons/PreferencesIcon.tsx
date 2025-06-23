import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import preferences from './preferences.svg';
const preferences = chrome.runtime.getURL('assets2/preferences.svg');

export const PreferencesIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={preferences} alt="preferences" />
    </div>
  );
};
