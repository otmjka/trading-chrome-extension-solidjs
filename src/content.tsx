import { render } from 'solid-js/web';
import { Content } from './ContentApp';
import './styles.css';
import { getTokenGMGNAI } from './utils/getTokenGMGNAI';

// const linkElement = document.querySelector(
//   'a[target="_blank"][rel="noopener noreferrer"][href*="x.com/search?q="] i.ri-search-line'
// ) as HTMLAnchorElement | null;

console.log('+++', location.href, '+++');

if (location.href.startsWith('https://axiom.trade/meme/')) {
  const observer = new MutationObserver(() => {
    const linkElement = document.querySelector(
      'a[target="_blank"][rel="noopener noreferrer"][href*="x.com/search?q="]',
    ) as HTMLAnchorElement | null;
    console.log('###', linkElement);
    if (linkElement) {
      const url = new URL(linkElement.href);
      const mint = url.searchParams.get('q');
      console.log('axiom mint:', mint || 'не найдено');
      if (mint) {
        observer.disconnect();
        const root = document.createElement('div');
        root.id = 'cabal-extension-root';
        document.body.appendChild(root);

        render(() => <Content mint={mint} />, root);
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
} else if (getTokenGMGNAI(location.href)) {
  console.log('gmgn');
  const root = document.createElement('div');
  root.id = 'cabal-extension-root';
  document.body.appendChild(root);
  const mint = location.pathname.split('/sol/token/')[1];
  console.log('gmgn', mint);
  render(() => <Content mint={mint} />, root);
} else {
  console.log('not supported');
}
