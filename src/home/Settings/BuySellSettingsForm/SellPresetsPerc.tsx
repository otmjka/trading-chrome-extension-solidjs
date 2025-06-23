import { Component, createEffect } from 'solid-js';
import { IColor, IIcon, NumberInput } from '../../../uikit/CabalExt';
import { SellPresetsPercValues } from './types';
import { createStore } from 'solid-js/store';

export const SellPresetsPerc: Component<{
  value: SellPresetsPercValues;
  onChange: (newValues: SellPresetsPercValues) => void;
}> = (props) => {
  const [store, setStore] = createStore<{ values: SellPresetsPercValues }>({
    values: props.value,
  });

  createEffect(() => {
    props.onChange(store.values);
  });
  return (
    <div>
      <div class="e:flex e:gap-3">
        <div>
          <NumberInput
            value={store.values[0]}
            color={IColor.red}
            icon={IIcon.perc}
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
            icon={IIcon.perc}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[1] = value;
              setStore('values', newValues);
            }}
          />
        </div>
      </div>
      <div class="e:flex e:gap-3 e:mt-2">
        <div>
          <NumberInput
            value={store.values[2]}
            color={IColor.red}
            icon={IIcon.perc}
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
            icon={IIcon.perc}
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
