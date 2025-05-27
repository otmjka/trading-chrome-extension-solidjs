import { Component } from 'solid-js';

import { TextField } from '@kobalte/core/text-field';

const TradeInput: Component = () => {
  return (
    <TextField>
      <TextField.Input
        class="bg-grey-100 border-green-500 border px-[20px] py-[10px] text-white text-xs w-full rounded-[5px]"
        placeholder="Enter SOL amount"
      />{' '}
      {/* or <TextField.TextArea /> */}
    </TextField>
  );
};

export default TradeInput;
