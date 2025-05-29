import { TradeWidget } from '../widgets1/TradeWidget';
import {
  Component,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
} from 'solid-js';

import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  createDraggable,
  DragOverlay,
} from '@thisbeyond/solid-dnd';

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> {
      // allow `use:` directives
      ['use:draggable']?: any;
    }
  }
}

const Draggable: Component<{ id: number; children: JSX.Element }> = (props) => {
  const draggable = createDraggable(props.id);
  return (
    <div
      use:draggable
      class="draggable ext-absolute ext-bg-red-800 ext-p-4 ext-w-[400px]"
      classList={{ 'ext-opacity-25': draggable.isActiveDraggable }}
      style={{ top: 0, left: (props.id === 1 ? 0 : 125) + 'px' }}
    >
      {props.children}
    </div>
  );
};

const Content = () => {
  const [status, setStatus] = createSignal('offline');

  // Создаем сигнал для хранения данных из сообщения
  const [eventData, setEventData] = createSignal<Array<string>>([]);

  onMount(() => {
    // Регистрируем слушатель сообщений
    const messageListener = (message, sender, sendResponse) => {
      if (
        message?.type === 'CABAL_EVENT' &&
        typeof message.eventName === 'string'
      ) {
        setEventData((prev) => [...prev, message.eventName]);
      }
    };

    // Подписываемся на сообщения
    chrome.runtime.onMessage.addListener(messageListener);

    // Очищаем слушатель при размонтировании компонента
    onCleanup(() => {
      chrome.runtime.onMessage.removeListener(messageListener);
    });
  });

  const handleStart = () => {
    chrome.runtime.sendMessage({ type: 'INIT_CABAL' }, (res) => {
      setStatus(res.status);
    });
  };

  let transform = { x: 0, y: 0 };

  const onDragMove: DragEventHandler = ({ overlay }) => {
    if (overlay) {
      transform = { ...overlay.transform };
    }
  };

  const onDragEnd: DragEventHandler = ({ draggable }) => {
    const node = draggable.node;
    node.style.setProperty('top', node.offsetTop + transform.y + 'px');
    node.style.setProperty('left', node.offsetLeft + transform.x + 'px');
  };

  return (
    <DragDropProvider onDragMove={onDragMove} onDragEnd={onDragEnd}>
      <DragDropSensors />
      <Draggable id={2}>
        <div class="ext-bg-yellow-600 ext-p-2">
          <div class="ext-flex ext-gap-2">
            <button class="ext-bg-yellow-400" onClick={handleStart}>
              start
            </button>
            <div>
              Service Status:: <b>{status()}</b>
            </div>
            <div>Данные из background: {JSON.stringify(eventData())}</div>
          </div>
          <TradeWidget />
        </div>
      </Draggable>
      <DragOverlay>
        {(draggable) => (
          <div class="draggable ext-bg-red-800 ext-p-4 ext-w-[400px] ext-h-[400px]">
            Draggable {draggable && draggable.id}
          </div>
        )}
      </DragOverlay>
    </DragDropProvider>
  );
};
export default Content;
