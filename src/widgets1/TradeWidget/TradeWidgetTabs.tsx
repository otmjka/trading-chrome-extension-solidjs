import { Component } from 'solid-js';

import { Tabs } from '@kobalte/core/tabs';

const TradeWidgetTabs: Component = () => {
  return (
    <Tabs aria-label="Main navigation" class="tabs">
      <Tabs.List class="tabs__list">
        <Tabs.Trigger class="text-white" value="profile">
          Profile
        </Tabs.Trigger>
        <Tabs.Trigger class="text-white" value="dashboard">
          Dashboard
        </Tabs.Trigger>
        <Tabs.Trigger class="text-white" value="settings">
          Settings
        </Tabs.Trigger>
        <Tabs.Trigger class="text-white" value="contact">
          Contact
        </Tabs.Trigger>
        <Tabs.Indicator class="tabs__indicator" />
      </Tabs.List>
      <Tabs.Content class="tabs__content" value="profile">
        Profile details
      </Tabs.Content>
      <Tabs.Content class="tabs__content" value="dashboard">
        Dashboard details
      </Tabs.Content>
      <Tabs.Content class="tabs__content" value="settings">
        Settings details
      </Tabs.Content>
      <Tabs.Content class="tabs__content" value="contact">
        Contact details
      </Tabs.Content>
    </Tabs>
  );
};

export default TradeWidgetTabs;
