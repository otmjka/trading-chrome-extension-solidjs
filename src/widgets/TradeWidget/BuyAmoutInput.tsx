import { Accessor, Component, For } from 'solid-js';

import SolAmountButton from './SolAmountButton';
import TradeInput from './TradeInput';
import { QuickItem } from './types';
import { Card } from './TradeWidget.parts';

const BuyAmoutInput: Component<{
  getQuicks: Accessor<Array<QuickItem>>;
  getActiveQuick: Accessor<number | null>;
  getInputValue: Accessor<string | null>;
  onSelectQuick: (value: QuickItem) => void;
  onChange: (value: string) => void;
}> = (props) => {
  return (
    <Card cn="ext-border-green-500">
      <div class="ext-flex ext-gap-2">
        <For each={props.getQuicks()}>
          {(amountSol, index) => (
            <SolAmountButton
              active={index() === props.getActiveQuick()}
              onClick={() => props.onSelectQuick(amountSol)}
            >
              {amountSol.value}
            </SolAmountButton>
          )}
        </For>
      </div>
      <div class="ext-mt-[14px]">
        <TradeInput
          getInputValue={props.getInputValue}
          onChange={props.onChange}
        />
      </div>
    </Card>
  );
};

export default BuyAmoutInput;
