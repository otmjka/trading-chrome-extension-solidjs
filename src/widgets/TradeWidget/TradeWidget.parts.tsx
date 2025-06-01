import { Component, JSX } from 'solid-js';
import cn from 'classnames';

import { Tabs } from '@kobalte/core/tabs';

import pin from './icons/pin.svg';
import wallet from './icons/wallet.svg';

export const Card: Component<{
  children: JSX.Element;
  cn?: string;
}> = (props) => (
  <div
    class={cn(
      'ext-px-[15px] ext-py-[9px] ext-shadow-lg ext-rounded-lg ext-border',
      props.cn,
    )}
  >
    {props.children}
  </div>
);

export const Body: Component<{
  children: JSX.Element;
  cn?: string;
}> = (props) => <div class={cn('', props.cn)}>{props.children}</div>;

const CardToolbar: Component<{
  children: JSX.Element;
  cn?: string;
}> = (props) => <div class={cn(props.cn)}>{props.children}</div>;

export const Container: Component<{ children: JSX.Element }> = ({
  children,
}) => (
  <Card cn="ext-max-w-[312px] ext-bg-blue-100 ext-border-gray-400">
    {children}
  </Card>
);

export const Header: Component = () => (
  <CardToolbar>
    <div class="ext-flex ext-gap-1 ext-justify-end ext-mb-[6px]">
      <div class="ext-bg-gray-150 ext-border ext-border-gray-200 ext-w-[12px] ext-h-[12px] ext-flex ext-justify-center ext-items-end">
        <div class="ext-bg-white ext-h-[1px] ext-w-[5px] ext-mb-[4px]"></div>
      </div>
      <div class="ext-bg-gray-150 ext-border ext-w-[12px] ext-h-[12px] ext-flex ext-justify-center">
        <img class="ext-w-[5px]" src={pin} alt="pin" />
      </div>
    </div>
  </CardToolbar>
);

export const Settings: Component = () => {
  const sol = chrome.runtime.getURL('assets2/sol.svg');
  return (
    <div class="ext-flex ext-gap-2">
      <div class="ext-flex ext-gap-1 ext-items-baseline">
        <div>
          <img src={wallet} alt="wallet" />
        </div>
        <div class="ext-text-xs ext-text-white ext-font-medium">1</div>
      </div>
      <div class="ext-flex ext-gap-1 ext-items-baseline">
        <div>
          <img src={sol} alt="sol" />
        </div>
        <div class="ext-text-xs ext-text-white ext-font-medium">0</div>
      </div>
    </div>
  );
};

export const TabsList = () => (
  <div class="ext-flex-1">
    <Tabs.List class="ext-relative ext-flex ext-gap-[10px]">
      <Tabs.Trigger class="ext-text-white ext-text-[10px]" value="market">
        Market
      </Tabs.Trigger>
      <Tabs.Trigger class="ext-text-white ext-text-[10px]" value="limit">
        Limit
      </Tabs.Trigger>
      <Tabs.Trigger class="ext-text-white ext-text-[10px]" value="trailing">
        Trailing
      </Tabs.Trigger>
      <Tabs.Trigger class="ext-text-white ext-text-[10px]" value="autolimit">
        Auto Limit
      </Tabs.Trigger>
      <Tabs.Indicator class="ext-h-[1px] ext-bg-white ext-absolute ext-bottom-[-2px] ext-transition-all" />
    </Tabs.List>
  </div>
);

export const TabsHeader: Component<{ children: JSX.Element }> = ({
  children,
}) => <div class="ext-flex ext-px-[11px] ext-items-baseline">{children}</div>;

export const Hr: Component = () => (
  <div class="ext-bg-gray-200 ext-h-[1px] ext-mt-[6px] ext-mb-[15px]" />
);
