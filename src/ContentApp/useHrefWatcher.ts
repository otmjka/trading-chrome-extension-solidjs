import { createSignal, onCleanup, createEffect, Component } from 'solid-js';

export const useHrefWatcher = () => {
  const [href, setHref] = createSignal(window.location.href);

  const updateHref = () => setHref(window.location.href);

  // Перехватываем изменения через popstate (назад/вперёд)
  window.addEventListener('popstate', updateHref);

  // Monkey patch pushState и replaceState
  const rawPushState = history.pushState;
  const rawReplaceState = history.replaceState;

  history.pushState = function (...args) {
    rawPushState.apply(this, args);
    updateHref();
  };

  history.replaceState = function (...args) {
    rawReplaceState.apply(this, args);
    updateHref();
  };

  onCleanup(() => {
    window.removeEventListener('popstate', updateHref);
    history.pushState = rawPushState;
    history.replaceState = rawReplaceState;
  });

  return href;
};
