import { Component, createSignal, Show } from 'solid-js';

import { LogRecord } from '../content/logStore';

const ShowLogItem: Component<{ logItem: LogRecord }> = ({ logItem }) => {
  const showStrinify =
    logItem.type === 'tradeEvent' ||
    logItem.type === 'tokenStatus' ||
    logItem.type === 'tokenTradeStats';
  const [show, setShow] = createSignal<boolean>(false);
  return (
    <div class="ext-flex ext-flex-col">
      <div class="ext-flex">
        <div>{logItem.type}</div>
        <div>
          <button
            class="ext-bg-blue-500"
            onClick={() => setShow((prev) => !prev)}
          >{`${show() ? '[[X]]' : '^^^'}`}</button>
        </div>
      </div>
      <Show when={showStrinify && show()}>
        <div class="ext-bg-blue-600 ext-text-[9px]">
          {JSON.stringify(logItem.event, null, 2)}
        </div>
      </Show>
    </div>
  );
};

export default ShowLogItem;
