import { Tabs } from '@kobalte/core/tabs';

const TabsList = () => (
  <Tabs.List class=" ext-relative ext-flex ext-gap-[10px]">
    <Tabs.Trigger class="text-white text-[10px]" value="market">
      Market
    </Tabs.Trigger>
    <Tabs.Trigger class=" ext-text-white ext-text-[10px]" value="limit">
      Limit
    </Tabs.Trigger>
    <Tabs.Trigger class=" ext-text-white ext-text-[10px]" value="trailing">
      Trailing
    </Tabs.Trigger>
    <Tabs.Trigger class=" ext-text-white ext-text-[10px]" value="autolimit">
      Auto Limit
    </Tabs.Trigger>
    <Tabs.Indicator class="ext-h-[1px] ext-bg-white ext-absolute ext-bottom-[-2px] ext-transition-all" />
  </Tabs.List>
);
export default TabsList;
