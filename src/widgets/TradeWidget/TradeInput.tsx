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
        class="e:bg-gray-100 e:border-green-500 e:border e:px-[20px] e:py-[10px] e:text-white e:text-xs e:w-full e:rounded-[5px]"
        placeholder="Enter SOL amount"
      />
    </TextField>
  );
};

export default TradeInput;
