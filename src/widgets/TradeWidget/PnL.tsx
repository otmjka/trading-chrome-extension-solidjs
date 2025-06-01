import { Component } from 'solid-js';

const PnL: Component<{ color?: 'purple' }> = (props) => {
  const arrows = chrome.runtime.getURL('assets2/arrows.svg');

  return (
    <div class="ext-flex">
      <div>PnL</div>
      <div>
        <img src={arrows} alt="arrows" />
      </div>
    </div>
  );
};

export default PnL;
