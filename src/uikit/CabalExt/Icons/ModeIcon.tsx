import { Component } from 'solid-js';

// import mode from './mode.svg';
const mode = chrome.runtime.getURL('assets2/mode.svg');

export const ModeIcon: Component = () => (
  <div class="ext-size-5">
    <img src={mode} alt="mode" />
  </div>
);
