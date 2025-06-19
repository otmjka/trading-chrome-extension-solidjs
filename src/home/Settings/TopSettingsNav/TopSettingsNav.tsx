import { Component, For } from 'solid-js';

import { Tabs } from '@kobalte/core/tabs';

import { FontSize, FW, Typography } from '../../../uikit/CabalExt';

import { navItems, TabNames } from '../Settings.enums';

export const TopSettingsNav: Component<{
  selectedTab: TabNames;
  setSelectedTab: (value: TabNames) => void;
}> = (props) => {
  const handleSelectTab = (value: string) => {
    props.setSelectedTab(value as TabNames);
  };
  return (
    <div class="ext-pt-6 ext-pb-7 ext-bg-black ext-flex-1">
      {' '}
      {/* offset */}
      <div class="ext-flex ext-justify-center">
        <Tabs value={props.selectedTab} onChange={handleSelectTab}>
          <div class="ext-flex">
            <div class="ext-ext-bg-red-300">
              <div class="ext-relative">
                <Tabs.List>
                  <For each={navItems}>
                    {(nav) => {
                      return (
                        <Tabs.Trigger
                          class="ext-px-2 ext-py-[11px]"
                          value={nav.value}
                        >
                          <Typography
                            size={FontSize.lg}
                            weight={FW.semi}
                            children={nav.label}
                          />
                        </Tabs.Trigger>
                      );
                    }}
                  </For>

                  <Tabs.Indicator class="ext-h-[1px] ext-bg-white ext-absolute ext-bottom-[-2px] ext-transition-all" />
                </Tabs.List>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
