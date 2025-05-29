import { createSignal, onMount } from 'solid-js';

export default function Home() {
  const [status, setStatus] = createSignal('offline');

  return (
    <div class="p-6 text-xl">
      <div>
        Service Status:: <b>{status()}</b>
      </div>
    </div>
  );
}
