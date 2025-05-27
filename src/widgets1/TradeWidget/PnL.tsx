import { Component } from 'solid-js';
import arrows from './icons/arrows.svg';

const PnL: Component<{ color?: 'purple' }> = (props) => (
  <div class="ext-flex">
    <div>PnL</div>
    <div>
      <img src={arrows} alt="arrows" />
    </div>
  </div>
);

export default PnL;
