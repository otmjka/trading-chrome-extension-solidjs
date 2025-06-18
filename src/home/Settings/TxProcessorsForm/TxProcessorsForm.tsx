import { Component, createEffect, createSignal, For } from 'solid-js';
import {
  FontSize,
  Paper,
  SwitchInput,
  Typography,
} from '../../../uikit/CabalExt';

import { SaveButton } from '../Shared/SaveButton';

const items = [
  { value: '1', label: 'Cabal Provider' },
  { value: '2', label: 'Nozomi' },
  { value: '3', label: 'AstraIris' },
  { value: '4', label: 'JitoValidators' },
  { value: '5', label: 'BloxRoute' },
  { value: '6', label: 'NextBlock' },
  { value: '7', label: '0slot_trade' },
];

export const TxProcessorsForm: Component = () => {
  const [value, setValue] = createSignal<string>(items[0].value);
  createEffect(() => {
    console.log(value());
  });
  return (
    <Paper cn="ext-bg-black ext-w-[422px]">
      <div class="ext-flex ext-mb-5">
        <div>
          <Typography size={FontSize.xl2}>AutoLimits Settings</Typography>
        </div>
      </div>
      <div class="ext-flex ext-flex-col ext-gap-5 ext-mb-5">
        <For each={items}>
          {(item) => {
            return <SwitchInput item={item} />;
          }}
        </For>
      </div>
      <SaveButton />
    </Paper>
  );
};
