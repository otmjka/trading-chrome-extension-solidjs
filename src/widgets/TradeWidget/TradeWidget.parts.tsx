import { Component, JSX } from 'solid-js';
import cn from 'classnames';

import { Tabs } from '@kobalte/core/tabs';

import pin from './icons/pin.svg';
import wallet from './icons/wallet.svg';
import { tradeWidgetState } from './TradeWidgetStore/tradeWidgetStateStore';

export const Card: Component<{
  children: JSX.Element;
  cn?: string;
}> = (props) => (
  <div
    class={cn(
      'e:px-[15px] e:py-[9px] e:shadow-lg e:rounded-lg e:border',
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
  <Card cn="e:max-w-[312px] e:bg-blue-100 e:border-gray-400">{children}</Card>
);

export const Header: Component = () => (
  <CardToolbar>
    <div class="e:flex e:gap-1 e:justify-end e:mb-[6px]">
      <div class="e:bg-gray-150 e:border e:border-gray-200 e:w-[12px] e:h-[12px] e:flex e:justify-center e:items-end">
        <div class="e:bg-white e:h-[1px] e:w-[5px] e:mb-[4px]"></div>
      </div>
      <div class="e:bg-gray-150 e:border e:w-[12px] e:h-[12px] e:flex e:justify-center">
        <img class="e:w-[5px]" src={pin} alt="pin" />
      </div>
    </div>
  </CardToolbar>
);

export const Settings: Component = () => {
  const sol = chrome.runtime.getURL('assets2/sol.svg');
  return (
    <div class="e:flex e:gap-2">
      <div class="e:flex e:gap-1 e:items-baseline">
        <div>
          <img src={wallet} alt="wallet" />
        </div>
        <div class="e:text-xs e:text-white e:font-medium">1</div>
      </div>
      <div class="e:flex e:gap-1 e:items-baseline">
        <div>
          <img src={sol} alt="sol" />
        </div>
        <div class="e:text-xs e:text-white e:-font-medium">
          {tradeWidgetState.solBalanceLabel}
        </div>
      </div>
    </div>
  );
};

export const TabsList = () => (
  <div class="e:flex-1">
    <Tabs.List class="e:relative e:flex e:gap-[10px]">
      <Tabs.Trigger class="e:text-white e:text-[10px]" value="market">
        Market
      </Tabs.Trigger>
      <Tabs.Trigger class="e:text-white e:text-[10px]" value="limit">
        Limit
      </Tabs.Trigger>
      <Tabs.Trigger class="e:text-white e:text-[10px]" value="trailing">
        Trailing
      </Tabs.Trigger>
      <Tabs.Trigger class="e:text-white e:text-[10px]" value="autolimit">
        Auto Limit
      </Tabs.Trigger>
      <Tabs.Indicator class="e:h-[1px] e:bg-white e:absolute e:bottom-[-2px] e:transition-all" />
    </Tabs.List>
  </div>
);

export const TabsHeader: Component<{ children: JSX.Element }> = ({
  children,
}) => <div class="e:flex e:px-[11px] e:items-baseline">{children}</div>;

export const Hr: Component = () => (
  <div class="e:bg-gray-200 e:h-[1px] e:mt-[6px] e:mb-[15px]" />
);
