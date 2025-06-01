import { Component, Accessor, createEffect, createSignal } from 'solid-js';

import { TextField } from '@kobalte/core/text-field';

const TradeInput: Component<{
  getInputValue: Accessor<string | null>;
  onChange: (value: string) => void;
}> = (props) => {
  const [value, setValue] = createSignal<string | null>(null);
  const handleOnInput = (e: Event & { currentTarget: HTMLInputElement }) => {
    e.preventDefault();
    props.onChange(e.currentTarget.value);
  };

  createEffect(() => {
    setValue(props.getInputValue());
  });
  return (
    <TextField>
      <TextField.Input
        value={value()}
        onInput={handleOnInput}
        onChange={props.onChange}
        class="ext-bg-gray-100 ext-border-green-500 ext-border ext-px-[20px] ext-py-[10px] ext-text-white ext-text-xs ext-w-full ext-rounded-[5px]"
        placeholder="Enter SOL amount"
      />
    </TextField>
  );
};

export default TradeInput;
