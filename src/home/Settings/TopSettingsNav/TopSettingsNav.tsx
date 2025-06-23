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
    <div class="e:pt-6 e:pb-7 e:bg-black e:flex-1">
      {' '}
      {/* offset */}
      <div class="e:flex e:justify-center">
        <Tabs value={props.selectedTab} onChange={handleSelectTab}>
          <div class="e:flex">
            <div class="e:bg-red-300">
              <div class="e:relative">
                <Tabs.List>
                  <For each={navItems}>
                    {(nav) => {
                      return (
                        <Tabs.Trigger
                          class="e:px-2 e:py-[11px]"
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

                  <Tabs.Indicator class="e:h-[1px] e:bg-white e:absolute e:bottom-[-2px] e:transition-all" />
                </Tabs.List>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
