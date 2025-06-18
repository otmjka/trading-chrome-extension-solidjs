import { createEffect, createSignal, onMount, Show } from 'solid-js';
import {
  CabalLogoIcon,
  Paper,
  PopupToolBar,
  QuickBuyAmount,
  Typography,
} from '../uikit/CabalExt';
import { ApiKeyWidget } from '../uikit/ApiKeyWidget';
import { useStartCabalService } from '../services/useCabalService';
import { contentAppStore, setContentAppStore } from '../stores/contentAppStore';

export default function Popup() {
  const [status, setStatus] = createSignal('offline');
  const { sendApiKey, sendApiKeyPromise, popupOpen } = useStartCabalService();
  onMount(() => {
    popupOpen();
  });

  const openFull = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('home.html') });
  };

  const handleApiKey = (apiKey: string) => {
    console.log('handleApiKey', apiKey);
    setContentAppStore('shouldSetApiKey', false);
    sendApiKeyPromise(apiKey);
    // console.log('!!! handleApiKey', apiKey);
  };

  const logout = () => {
    console.log('logout');
    sendApiKey(null);
  };

  createEffect(() => {
    console.log('*******');
    console.log(
      '*******',
      contentAppStore.isReady,
      contentAppStore.shouldSetApiKey,
    );
    console.log('*******');
  });

  return (
    <Paper p="4" cn="ext-min-w-[288px]">
      <Show when={contentAppStore.isReady}>
        <PopupToolBar onLogout={logout} onSettings={openFull} />
      </Show>
      <div>
        <CabalLogoIcon />
      </div>
      <Show when={!contentAppStore.isReady && !contentAppStore.shouldSetApiKey}>
        <div class="ext-flex ext-flex-1 ext-items-center ext-justify-center">
          <Typography children="loading..." />
        </div>
      </Show>
      <Show when={contentAppStore.shouldSetApiKey}>
        <div>
          <ApiKeyWidget onApiKey={handleApiKey} />
        </div>
      </Show>
      <Show when={contentAppStore.isReady}>
        <QuickBuyAmount />
      </Show>
    </Paper>
  );
}
