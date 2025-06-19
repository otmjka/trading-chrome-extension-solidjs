import { Component } from 'solid-js';
import cn from 'classnames';
// import telegram from './telegram.svg';
const telegram = chrome.runtime.getURL('assets2/telegram.svg');

export const TelegramIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  const common = 'ext-flex ext-items-center ext-justify-center';
  return (
    <div
      class={cn(common, props.cn, { [`ext-size-${props.size}`]: !!props.size })}
    >
      <img src={telegram} alt="telegram" />
    </div>
  );
};
