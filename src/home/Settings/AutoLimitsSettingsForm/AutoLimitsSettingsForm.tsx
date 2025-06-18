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
    <Paper cn="ext-bg-black ext-w-[764px]">
      <S.Header label={'AutoLimits Settings'} />

      <S.Row>
        <S.Left cn="ext-flex-1">
          <div class="ext-flex">
            <BtnGroup
              itemCN={'ext-px-3 ext-py-2'}
              items={items}
              value={value()}
              onChange={setValue}
            />
          </div>
        </S.Left>
        <S.Right cn="ext-flex ext-gap-1">
          <div>
            <TooltipIcon />
          </div>
          <div>
            <Switch class="ext-flex ext-items-center ext-gap-2">
              <Switch.Label>
                <Typography weight={FW.semi} upper>
                  Set AutoLimits if I trade
                </Typography>
              </Switch.Label>
              <Switch.Description />
              <Switch.ErrorMessage />
              <div class="ext-relative">
                <Switch.Input />
                <Switch.Control class="ext-py-0.5 ext-px-0.5 ext-w-11 ext-h-5 ext-rounded-full ext-bg-black-100 ext-transition-colors ext-duration-200 ext-relative ext-outline-none ui-checked:ext-bg-green-800 ui-disabled:ext-opacity-50 ext-cursor-pointer ext-block">
                  <Switch.Thumb class="ext-size-4 ext-bg-black-400 ext-rounded-[10px] ext-transition-transform ext-duration-200 ext-transform ui-checked:ext-translate-x-6 ui-checked:ext-bg-green-500" />
                </Switch.Control>
              </div>
            </Switch>
          </div>
          <div></div>
        </S.Right>
      </S.Row>

      <S.Row>
        <div class="ext-flex ext-gap-1">
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
        <div class="ext-flex ext-gap-1">
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
