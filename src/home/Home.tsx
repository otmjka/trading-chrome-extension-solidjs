import { onMount, Show } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { Settings } from './Settings';
import { configStore } from '../stores/configStore';

export default function Home() {
  const cabalService = useStartCabalService();
  onMount(() => {
    cabalService.getConfig();
  });
  return (
    <Show when={!!configStore.config} fallback={<div>loading...</div>}>
      <Settings handlers={{ onReset: cabalService.resetConfig }} />
    </Show>
  );
}
