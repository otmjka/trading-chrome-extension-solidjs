import { render } from 'solid-js/web';
import App from './content/Content';
import './styles.css';

const root = document.createElement('div');
root.id = 'cabal-extension-root';
document.body.appendChild(root);

render(() => <App />, root);
