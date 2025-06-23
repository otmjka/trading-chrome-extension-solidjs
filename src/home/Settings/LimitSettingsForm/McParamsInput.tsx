import { Component, createEffect } from 'solid-js';
import {
  FontSize,
  FW,
  IColor,
  NumberInput,
  Typography,
} from '../../../uikit/CabalExt';
import { createStore } from 'solid-js/store';
import { McParamsValues } from '../BuySellSettingsForm/types';

export const McParamsInput: Component<{
  onChange: (newValues: McParamsValues) => void;
}> = (props) => {
  const [store, setStore] = createStore<{ values: McParamsValues }>({
    values: ['-100', '-50', '0', '50', '100'],
  });

  createEffect(() => {
    props.onChange(store.values);
  });

  return (
    <div class="e:flex e:flex-col e:flex-1">
      <div class="e:mb-3 e:flex-1">
        <Typography size={FontSize.lg} weight={FW.bold} cn="e:text-lg">
          MC % parameters
        </Typography>
      </div>
      <div class="e:flex e:w-full e:gap-3">
        <div>
          <NumberInput
            value={store.values[0]}
            color={IColor.grey}
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
            color={IColor.grey}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[1] = value;
              setStore('values', newValues);
            }}
          />
        </div>
        <div>
          <NumberInput
            value={store.values[2]}
            color={IColor.grey}
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
            color={IColor.grey}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[3] = value;
              setStore('values', newValues);
            }}
          />
        </div>
        <div>
          <NumberInput
            value={store.values[4]}
            color={IColor.grey}
            onChange={(value) => {
              const newValues = [...store.values];
              newValues[4] = value;
              setStore('values', newValues);
            }}
          />
        </div>
      </div>
    </div>
  );
};
