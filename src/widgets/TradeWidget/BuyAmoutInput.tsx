import { Component } from 'solid-js';

import { Card } from './Card';
import SolAmountButton from './SolAmountButton';
import TradeInput from './TradeInput';

const BuyAmoutInput: Component = () => {
  return (
    <Card cn="border-green-500">
      <div class="flex gap-2">
        <SolAmountButton>0.5 SOL</SolAmountButton>
        <SolAmountButton>1 SOL</SolAmountButton>
        <SolAmountButton active={true}>2 SOL</SolAmountButton>
        <SolAmountButton>5 SOL</SolAmountButton>
      </div>
      <div class="mt-[14px]">
        <TradeInput />
      </div>
    </Card>
  );
};

export default BuyAmoutInput;
