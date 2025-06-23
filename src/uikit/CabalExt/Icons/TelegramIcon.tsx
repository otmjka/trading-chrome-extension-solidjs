import { Component } from 'solid-js';
import cn from 'classnames';
import { common } from './enums';
// import telegram from './telegram.svg';
const telegram = chrome.runtime.getURL('assets2/telegram.svg');

export const TelegramIcon: Component<{ cn?: string; size?: string }> = (
  props,
) => {
  return (
    <div
      class={cn(common, props.cn, { [`e:size-${props.size}`]: !!props.size })}
    >
      <img src={telegram} alt="telegram" />
    </div>
  );
};
