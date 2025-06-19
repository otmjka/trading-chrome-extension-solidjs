import { onMount, onCleanup } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { Mint } from '../shared/types';
import { setTradeWidgetState } from '../widgets/TradeWidget/TradeWidgetStore/tradeWidgetStateStore';
import { contentAppStore, setContentAppStore } from '../stores/contentAppStore';

export const useContentManager = ({ mint }: { mint: Mint }) => {
  const {
    startListen,
    registerTab,
    subscribeToken,
    clean,
    sendApiKey,
    cleanWidget,
    subscribeTokenPromise,
  } = useStartCabalService();

  const handleStart = () => {
    setContentAppStore('tabMint', mint);
    // start listening background messages
    startListen();
    registerTab({ mint, locationHref: location.href });
  };

  const handleFocus = () => {
    console.log('Вкладка в фокусе');

    setContentAppStore('tokenStatus', null);
    setContentAppStore('tradeStats', null);
    setContentAppStore('lastTradeEvent', null);
    setContentAppStore('isReady', false);

    const tabMint = contentAppStore.tabMint;
    if (!tabMint) {
      console.log('[cabal-content]: no tab mint');
      return;
    }
    console.log(`[cabal-content]: focus # subscribe mint ${tabMint}`);
    subscribeToken({ mint: tabMint });
  };

  const handleBlur = () => {
    console.log('Вкладка потеряла фокус');
  };

  onMount(() => {
    handleStart();

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    onCleanup(() => {
      // stop listen background messages
      clean();
      // Удаляем слушатели событий
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);

      // Очищаем ресурсы сервиса
      console.log('[cleanup] Ресурсы очищены');
    });
  });

  return {};
};
