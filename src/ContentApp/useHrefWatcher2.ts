import { createSignal, onCleanup } from 'solid-js';

export function useHrefWatcher2() {
  const [href, setHref] = createSignal(window.location.href);
  let lastUrl = location.href;

  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setHref(location.href);
    }
  });

  observer.observe(document, { subtree: true, childList: true });

  const rawPushState = history.pushState;
  const rawReplaceState = history.replaceState;

  const pushState = history.pushState;
  const replaceState = history.replaceState;

  history.pushState = function (...args) {
    pushState.apply(this, args);
    window.dispatchEvent(new Event('locationchange'));
  };

  history.replaceState = function (...args) {
    replaceState.apply(this, args);
    window.dispatchEvent(new Event('locationchange'));
  };

  const popStateHandler = () => {
    window.dispatchEvent(new Event('locationchange'));
  };
  const locationChangeHandler = () => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setHref(location.href);
    }
  };
  window.addEventListener('popstate', popStateHandler);

  window.addEventListener('locationchange', locationChangeHandler);

  onCleanup(() => {
    window.removeEventListener('popstate', popStateHandler);
    history.pushState = rawPushState;
    history.replaceState = rawReplaceState;
  });

  return href;
}
