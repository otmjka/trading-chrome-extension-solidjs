import { Component, createSignal, Show } from 'solid-js';

import { LogRecord } from '../stores/logStore';
import { CabalCommonMessages } from '../shared/types';
import { CabalUserActivityStreamMessages } from '../services/cabal-clinet-sdk';

const ShowLogItem: Component<{ logItem: LogRecord }> = ({ logItem }) => {
  const showStrinify =
    logItem.type === CabalUserActivityStreamMessages.txnCb ||
    logItem.type === CabalCommonMessages.readyStatus ||
    logItem.type === 'tradeEvent' ||
    logItem.type === 'tokenStatus' ||
    logItem.type === 'tokenTradeStats';
  const [show, setShow] = createSignal<boolean>(false);
  return (
    <div class="e:flex e:flex-col">
      <div class="e:flex">
        <div>{logItem.type}</div>
        <div>
          <button
            class="e:bg-blue-500"
            onClick={() => setShow((prev) => !prev)}
          >{`${show() ? '[[X]]' : '^^^'}`}</button>
        </div>
      </div>
      <Show when={showStrinify && show()}>
        <div class="e:bg-blue-600 e:text-[9px]">
          {JSON.stringify(logItem.event, null, 2)}
        </div>
      </Show>
    </div>
  );
};

export default ShowLogItem;
