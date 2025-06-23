import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import logout from './logout.svg';
const logout = chrome.runtime.getURL('assets2/logout.svg');

export const LogoutIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={logout} alt="logout" />
    </div>
  );
};
