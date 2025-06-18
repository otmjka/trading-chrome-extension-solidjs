import { Component } from 'solid-js';

// import tooltip from './tooltip.svg';
const tooltip = chrome.runtime.getURL('assets2/tooltip.svg');

export const TooltipIcon: Component = () => (
  <div class="ext-size-4.5">
    <img src={tooltip} alt="tooltip" />
  </div>
);
