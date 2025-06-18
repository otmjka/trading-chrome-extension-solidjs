import { Component } from 'solid-js';

// import sol from './sol.svg';
const sol = chrome.runtime.getURL('assets2/sol.svg');

export const SolIcon: Component = () => (
  <div class="ext-w-6 ext-h-4">
    <img src={sol} alt="sol" />
  </div>
);
