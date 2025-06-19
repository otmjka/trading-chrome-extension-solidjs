import { Component, createEffect } from 'solid-js';
import { IColor, IIcon, NumberInput } from '../../../uiKit/CabalExt';
import { createStore } from 'solid-js/store';
import { SellPresetsSolValues } from '../types';

export const SellPresetsSol: Component<{
  value: SellPresetsSolValues;
  onChange: (newValues: SellPresetsSolValues) => void;
}> = (props) => {
  const [store, setStore] = createStore<{ values: SellPresetsSolValues }>({
    values: props.value,
  });

  createEffect(() => {
    props.onChange(store.values);
  });
  return (
    <div>
      <div class="ext-flex ext-gap-3">
        <div>
          <NumberInput
            value={store.values[0]}
            color={IColor.red}
            icon={IIcon.sol}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[0] = value;
              setStore('values', newValues);
            }}
          />
        </div>
        <div>
          <NumberInput
            value={store.values[1]}
            color={IColor.red}
            icon={IIcon.sol}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[1] = value;
              setStore('values', newValues);
            }}
          />
        </div>
      </div>
      <div class="ext-flex ext-gap-3 ext-mt-2">
        <div>
          <NumberInput
            value={store.values[2]}
            color={IColor.red}
            icon={IIcon.sol}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[2] = value;
              setStore('values', newValues);
            }}
          />
        </div>
        <div>
          <NumberInput
            value={store.values[3]}
            color={IColor.red}
            icon={IIcon.sol}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[3] = value;
              setStore('values', newValues);
            }}
          />
        </div>
      </div>
    </div>
  );
};
