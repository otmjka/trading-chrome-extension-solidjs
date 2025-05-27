import { Component } from 'solid-js';

import { Card } from './Card';
import TradeInput from './TradeInput';
import PercentAmountButton from './PercentAmountButton';

const SellAmoutInput: Component = () => {
  return (
    <Card cn="bg-blue-300 border-red-400">
      <div class="flex gap-2">
        <PercentAmountButton>10%</PercentAmountButton>
        <PercentAmountButton>25%</PercentAmountButton>
        <PercentAmountButton active={true}>40%</PercentAmountButton>
        <PercentAmountButton>75%</PercentAmountButton>
      </div>
      <div class="mt-[14px]">
        <TradeInput />
      </div>
    </Card>
  );
};

export default SellAmoutInput;
