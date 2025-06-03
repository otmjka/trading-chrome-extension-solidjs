import { Component, For } from 'solid-js';

import { logStore } from '../stores/logStore';

import ShowLogItem from './ShowLogItem';

export const LogWidget: Component = () => {
  return (
    <div class="ext-flex ext-flex-col">
      <For each={logStore.logs}>
        {(logItem, index) => <ShowLogItem logItem={logItem} />}
      </For>
    </div>
  );
};
