import { Component } from 'solid-js';

import { Card } from './Card';
import TradeInput from './TradeInput';
import PercentAmountButton from './PercentAmountButton';

const SellAmoutInput: Component = () => {
  return (
    <Card cn="ext-bg-blue-300 ext-border-red-400">
      <div class="ext-flex ext-gap-2">
        <PercentAmountButton>10%</PercentAmountButton>
        <PercentAmountButton>25%</PercentAmountButton>
        <PercentAmountButton active={true}>40%</PercentAmountButton>
        <PercentAmountButton>75%</PercentAmountButton>
      </div>
      <div class="ext-mt-[14px]">
        <TradeInput />
      </div>
    </Card>
  );
};

export default SellAmoutInput;
