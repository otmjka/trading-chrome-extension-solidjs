import { Component, createEffect, createSignal } from 'solid-js';
import {
  BtnGroup,
  FW,
  Paper,
  Typography,
  TooltipIcon,
} from '../../../uikit/CabalExt';

import { Switch } from '@kobalte/core/switch';
import * as S from '../Shared/Settings.parts';
import { SaveButton } from '../Shared/SaveButton';
import { AutoLimitTableInput } from './AutoLimitTableInput';

const items = [
  { value: '1', label: 'Preset 1' },
  { value: '2', label: 'Preset 2' },
  { value: '3', label: 'Preset 3' },
];

export const AutoLimitsSettingsForm: Component = () => {
  const [value, setValue] = createSignal<string>(items[0].value);
  createEffect(() => {
    console.log(value());
  });
  return (
    <Paper cn="e:bg-black e:w-[764px]">
      <S.Header label={'AutoLimits Settings'} />

      <S.Row>
        <S.Left cn="e:flex-1">
          <div class="e:flex">
            <BtnGroup
              itemCN={'e:px-3 e:py-2'}
              items={items}
              value={value()}
              onChange={setValue}
            />
          </div>
        </S.Left>
        <S.Right cn="e:flex e:gap-1">
          <div>
            <TooltipIcon />
          </div>
          <div>
            <Switch class="e:flex e:items-center e:gap-2">
              <Switch.Label>
                <Typography weight={FW.semi} upper>
                  Set AutoLimits if I trade
                </Typography>
              </Switch.Label>
              <Switch.Description />
              <Switch.ErrorMessage />
              <div class="e:relative">
                <Switch.Input />
                <Switch.Control class="e:py-0.5 e:px-0.5 e:w-11 e:h-5 e:rounded-full e:bg-black-100 e:transition-colors e:duration-200 e:relative e:outline-none ui-checked:e:bg-green-800 ui-disabled:e:opacity-50 e:cursor-pointer e:block">
                  <Switch.Thumb class="e:size-4 e:bg-black-400 e:rounded-[10px] e:transition-transform e:duration-200 e:transform ui-checked:e:translate-x-6 ui-checked:e:bg-green-500" />
                </Switch.Control>
              </div>
            </Switch>
          </div>
          <div></div>
        </S.Right>
      </S.Row>

      <S.Row>
        <div class="e:flex e:gap-1">
          <div>
            <S.CHeading left="Sell" right="Limits Orders" />
          </div>
          <div>
            <TooltipIcon />
          </div>
        </div>
      </S.Row>

      <S.Row>
        {/* Table Header */}
        <AutoLimitTableInput />
      </S.Row>

      <S.Row>
        <div class="e:flex e:gap-1">
          <div>
            <S.CHeading dir={S.Dir.buy} left="Buy" right="Limits Orders" />
          </div>
          <div>
            <TooltipIcon />
          </div>
        </div>
      </S.Row>

      <S.Row>
        {/* Table Header */}
        <AutoLimitTableInput />
      </S.Row>

      <SaveButton />
    </Paper>
  );
};
