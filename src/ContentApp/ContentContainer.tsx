import {
  Component,
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
} from 'solid-js';
import { Toast, toaster } from '@kobalte/core/toast';
import { useStartCabalService } from '../services/useCabalService';

import { OnlineStatusWidged } from '../widgets/OnlineStatusWidged/OnlineStatusWidged';
import { contentAppStore } from '../stores/contentAppStore';
import { LogWidget } from '../log/LogWidget';
import { Btn } from '../uikit';
import { Portal } from 'solid-js/web';
import { addToast, toastStore } from '../stores/toastStore';
import { FromBackgroundMessage } from '../shared/types';
import { useHrefWatcher2 } from './useHrefWatcher2';
// import { onUrlChange } from './onUrlChange';

export const ContentContainer: Component<{ children: JSX.Element }> = ({
  children,
}) => {
  const {
    startListen,
    registerTab,
    subscribeToken,
    clean,
    sendApiKey,
    cleanWidget,
  } = useStartCabalService();

  const href = useHrefWatcher2();
  let isInitial = true;
  createEffect(() => {
    console.log('href:', href(), isInitial);
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log('Текущий href:', href());
    registerTab({ locationHref: location.href });
    cleanWidget();
  });

  const [showDebug, setShowDebug] = createSignal<boolean>(false);

  const handleStart = () => {
    startListen();
    registerTab({ locationHref: location.href });
  };

  onMount(() => {
    setTimeout(() => handleStart(), 100);
  });

  const handleSubscribe = () => {
    if (!contentAppStore.mint) {
      return;
    }
    subscribeToken({
      mint: contentAppStore.mint,
      cb: (res) => {},
    });
  };

  createEffect(() => {
    if (!contentAppStore.isReady || !contentAppStore.mint) {
      return;
    }

    handleSubscribe();
  });

  onCleanup(() => clean());

  const logout = () => {
    sendApiKey(null);
  };

  let id: number;

  const showToast = (message: string) => {
    id = toaster.show((props) => (
      <Toast
        toastId={props.toastId}
        class="ext-flex ext-flex-col ext-items-center ext-justify-between ext-gap-2 ext-border ext-rounded-md ext-p-3 ext-bg-green-100"
      >
        <div class="ext-flex ext-items-start ext-w-full">
          <div>
            <Toast.Title class="toast__title">
              Event has been created
            </Toast.Title>
            <Toast.Description class="toast__description">
              {message}
            </Toast.Description>
          </div>
          <Toast.CloseButton class="toast__close-button">[X]</Toast.CloseButton>
        </div>
        <Toast.ProgressTrack class="toast__progress-track">
          <Toast.ProgressFill class="toast__progress-fill" />
        </Toast.ProgressTrack>
      </Toast>
    ));
  };

  createEffect(() => {
    const latest = toastStore.items[0]; // Реактивно следим за первым элементом
    if (!latest) {
      return;
    }
    showToast(JSON.stringify(latest, null, 2));
    console.log('&&&&&&&&&&&&&&!!!', latest);
    handleSubscribe();
  });

  return (
    <div class="ext-absolute ext-z-[100] ext-top-0 ext-bg-green-100 ext-rounded-md ext-p-1 ext-min-w-[312px] ext-min-h-[343px]">
      <div class="ext-flex ext-gap-2">
        <OnlineStatusWidged />
        <Btn onClick={() => setShowDebug((prev) => !prev)}>log</Btn>
        <Btn onClick={() => logout()}>logout</Btn>
      </div>
      <Show when={showDebug()}>
        <div>
          {/* <div class="ext-flex">url: {urlValue()}</div> */}
          <div class="ext-flex">mint: {contentAppStore.mint}</div>
          <LogWidget />
        </div>
      </Show>
      {children}
      <Portal>
        <Toast.Region>
          <Toast.List class="ext-fixed ext-bottom-0 ext-right-0 ext-flex ext-flex-col ext-p-4 ext-gap-2 ext-w-[400px] ext-max-w-full ext-m-0 ext-list-none ext-z-[9999] ext-outline-none" />
        </Toast.Region>
      </Portal>
    </div>
  );
};
