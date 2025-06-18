import { onMount } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { Mint } from '../shared/types';

export const useContentManager = ({ mint }: { mint: Mint }) => {
  const {
    startListen,
    registerTab,
    subscribeToken,
    clean,
    sendApiKey,
    cleanWidget,
  } = useStartCabalService();

  const handleStart = () => {
    startListen();
    registerTab({ mint, locationHref: location.href });
  };

  onMount(() => {
    setTimeout(() => handleStart(), 100);
  });

  return {};
};
