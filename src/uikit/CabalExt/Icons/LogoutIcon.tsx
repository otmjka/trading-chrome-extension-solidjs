import { Component } from 'solid-js';
import cn from 'classnames';
// import logout from './logout.svg';
const logout = chrome.runtime.getURL('assets2/logout.svg');

export const LogoutIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={logout} alt="logout" />
    </div>
  );
};
