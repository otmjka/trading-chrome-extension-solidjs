import { Component, createEffect } from 'solid-js';
import {
  FontSize,
  FW,
  IColor,
  NumberInput,
  Typography,
} from '../../../uiKit/CabalExt';
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
    <div class="ext-flex ext-flex-col ext-flex-1">
      <div class="ext-mb-3 ext-flex-1">
        <Typography size={FontSize.lg} weight={FW.bold} cn="ext-text-lg">
          MC % parameters
        </Typography>
      </div>
      <div class="ext-flex ext-w-full ext-gap-3">
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
