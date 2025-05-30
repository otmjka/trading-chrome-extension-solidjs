export function onUrlChange(callback) {
  let lastUrl = location.href;

  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      callback(location.href);
    }
  });

  observer.observe(document, { subtree: true, childList: true });

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

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });

  window.addEventListener('locationchange', () => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      callback(location.href);
    }
  });
}
