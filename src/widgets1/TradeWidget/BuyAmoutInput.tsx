import { Component } from 'solid-js';

import { Card } from './Card';
import SolAmountButton from './SolAmountButton';
import TradeInput from './TradeInput';

const BuyAmoutInput: Component = () => {
  return (
    <Card cn=" ext-border-green-500">
      <div class=" ext-flex  ext-gap-2">
        <SolAmountButton>0.5 SOL</SolAmountButton>
        <SolAmountButton>1 SOL</SolAmountButton>
        <SolAmountButton active={true}>2 SOL</SolAmountButton>
        <SolAmountButton>5 SOL</SolAmountButton>
      </div>
      <div class=" ext-mt-[14px]">
        <TradeInput />
      </div>
    </Card>
  );
};

export default BuyAmoutInput;
