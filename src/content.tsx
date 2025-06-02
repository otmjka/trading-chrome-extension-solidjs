import { render } from 'solid-js/web';
import { Content } from './ContentApp';
import './styles.css';
import { getTokenGMGNAI } from './utils/getTokenGMGNAI';

if (getTokenGMGNAI(location.href)) {
  const root = document.createElement('div');
  root.id = 'cabal-extension-root';
  document.body.appendChild(root);

  render(() => <Content />, root);
} else {
  console.log('not supported');
}
