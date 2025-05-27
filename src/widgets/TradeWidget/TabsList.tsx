import { Tabs } from '@kobalte/core/tabs';

const TabsList = () => (
  <Tabs.List class="relative flex gap-[10px]">
    <Tabs.Trigger class="text-white text-[10px]" value="market">
      Market
    </Tabs.Trigger>
    <Tabs.Trigger class="text-white text-[10px]" value="limit">
      Limit
    </Tabs.Trigger>
    <Tabs.Trigger class="text-white text-[10px]" value="trailing">
      Trailing
    </Tabs.Trigger>
    <Tabs.Trigger class="text-white text-[10px]" value="autolimit">
      Auto Limit
    </Tabs.Trigger>
    <Tabs.Indicator class="h-[1px] bg-white absolute bottom-[-2px] transition-all" />
  </Tabs.List>
);
export default TabsList;
