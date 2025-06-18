import { onMount } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { Settings } from './Settings';

export default function Home() {
  const cabalService = useStartCabalService();
  onMount(() => {
    cabalService.getConfig();
  });
  return <Settings handlers={{ onReset: cabalService.resetConfig }} />;
}
