import { Accessor, Component, For } from 'solid-js';

import TradeInput from './TradeInput';
import PercentAmountButton from './PercentAmountButton';
import { QuickItem } from './types';
import { Card } from './TradeWidget.parts';

const SellAmoutInput: Component<{
  getQuicks: Accessor<Array<QuickItem>>;
  getActiveQuick: Accessor<number | null>;
  getInputValue: Accessor<string | null>;
  onSelectQuick: (value: QuickItem) => void;
  onChange: (value: string) => void;
}> = (props) => {
  return (
    <Card cn="e:bg-blue-300 e:border-red-400">
      <div class="e:flex e:gap-2">
        <For each={props.getQuicks()}>
          {(amountSol, index) => (
            <PercentAmountButton
              active={index() === props.getActiveQuick()}
              onClick={() => props.onSelectQuick(amountSol)}
            >
              {amountSol.value}%
            </PercentAmountButton>
          )}
        </For>
      </div>
      <div class="e:mt-[14px]">
        <TradeInput
          getInputValue={props.getInputValue}
          onChange={props.onChange}
        />
      </div>
    </Card>
  );
};

export default SellAmoutInput;
