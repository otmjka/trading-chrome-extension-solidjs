import { onCleanup, onMount } from 'solid-js';
import { useStartCabalService } from '../services/useCabalService';
import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';

const Content = () => {
  const { start, clean } = useStartCabalService();

  onMount(() => start());
  onCleanup(() => clean());

  return (
    <div class="ext-absolute ext-top-0 ext-bg-yellow-600 ext-p-2">
      <div class="ext-flex ext-gap-2">
        <OnlineStatusWidged />
      </div>
    </div>
  );
};
export default Content;
