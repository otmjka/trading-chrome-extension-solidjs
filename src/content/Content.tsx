import { createSignal, onCleanup, onMount } from 'solid-js';

const Content = () => {
  const [status, setStatus] = createSignal('offline');

  // Создаем сигнал для хранения данных из сообщения
  const [eventData, setEventData] = createSignal<Array<string>>([]);

  onMount(() => {
    // Регистрируем слушатель сообщений
    const messageListener = (message, sender, sendResponse) => {
      console.log('!!!', message, sender, sendResponse);
      if (
        message?.type === 'CABAL_EVENT' &&
        typeof message.eventName === 'string'
      ) {
        setEventData((prev) => [
          ...prev,
          `${message.eventName}${message.data.tabId}`,
        ]);
      }
    };

    // Подписываемся на сообщения
    chrome.runtime.onMessage.addListener(messageListener);

    // Очищаем слушатель при размонтировании компонента
    onCleanup(() => {
      console.log();
      chrome.runtime.onMessage.removeListener(messageListener);
    });
  });

  const handleStart = () => {
    chrome.runtime.sendMessage({ type: 'INIT_CABAL' }, (res) => {
      setStatus(res.status);
    });
  };

  return (
    <div class="ext-absolute ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <button class="ext-bg-yellow-400" onClick={handleStart}>
          start
        </button>
        <div>
          Service Status:: <b>{status()}</b>
        </div>
        <div>Данные из background: {JSON.stringify(eventData())}</div>
      </div>
    </div>
  );
};
export default Content;
