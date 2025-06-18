import { Component, createEffect, createSignal, Show } from 'solid-js';

import {
  IColor,
  IconButton,
  IIcon,
  ModeIcon,
  NumberInput,
  Paper,
} from '../../../uikit/CabalExt';

import * as S from '../Shared/Settings.parts';
import { SellPresetsSol } from './SellPresetsSol';
import { SellPresetsPerc } from './SellPresetsPerc';
import { BuyPresets } from './BuyPresets';
import { SaveButton } from '../Shared/SaveButton';
import { createBuySellSettingsStore } from './createBuySellStore';
import { BuySellSettingsFormState } from '../types';

import {
  BuyPresetsValues,
  SellPresetsPercValues,
  SellPresetsSolValues,
} from '../../../shared/cabalConfigTypes';

export const BuySellSettingsForm: Component<{
  state: BuySellSettingsFormState;
}> = (props) => {
  const { store: settingsBSStore, setStore: setbSettingsBSStore } =
    createBuySellSettingsStore(props.state.value());
  const [isSolMode, setIsSolMode] = createSignal<boolean>(true);

  createEffect(() => {
    console.log('()()()()()', settingsBSStore.buyPresets);
  });

  createEffect(() => {
    console.log('!!!! how often');
    setbSettingsBSStore(props.state.value());
  });

  const handleChangeBuyPresets = (newValues: BuyPresetsValues) =>
    setbSettingsBSStore('buyPresets', newValues);

  const handleChangeSellPresetsSol = (newValues: SellPresetsSolValues) =>
    setbSettingsBSStore('sellPresetsSol', newValues);

  const handleChangeSellPresetsPerc = (newValues: SellPresetsPercValues) =>
    setbSettingsBSStore('sellPresetsPerc', newValues);
  const handleBuyTipChange = (newValue: string) =>
    setbSettingsBSStore('buyTip', newValue);
  const handleSellTipChange = (newValue: string) =>
    setbSettingsBSStore('sellTip', newValue);
  const handleBuyPriorityFeeChange = (newValue: string) =>
    setbSettingsBSStore('buyPriorityFee', newValue);
  const handleSellPriorityFeeChange = (newValue: string) =>
    setbSettingsBSStore('sellPriorityFee', newValue);
  const handleBuySlippageChange = (newValue: string) =>
    setbSettingsBSStore('buySlippage', newValue);
  const handleSellSlippageChange = (newValue: string) =>
    setbSettingsBSStore('sellSlippage', newValue);

  const handleSave = () => {
    props.state.onSubmit(settingsBSStore);
  };

  return (
    <Paper cn="ext-bg-black ext-w-[422px]">
      <S.Header label={'Buy/Sell Settings'} />

      <S.Content>
        <S.Row>
          {/* Buy Presets */}

          <S.Left>
            <S.Box>
              <div class="ext-mb-3">
                <S.CHeading dir={S.Dir.buy} left="Buy" right="Presets" />
              </div>
              <BuyPresets
                value={settingsBSStore.buyPresets}
                onChange={handleChangeBuyPresets}
              />
            </S.Box>
          </S.Left>

          {/* Sell Presets */}

          <S.Right>
            <S.Box cn="ext-flex ext-mb-3 ext-items-center">
              <S.Left cn="ext-flex-1">
                <S.CHeading left="Sell" right="Presets" />
              </S.Left>
              <S.Right>
                <IconButton onClick={() => setIsSolMode((prev) => !prev)}>
                  <ModeIcon />
                </IconButton>
              </S.Right>
            </S.Box>
            <Show when={isSolMode()}>
              <SellPresetsSol
                value={settingsBSStore.sellPresetsSol}
                onChange={handleChangeSellPresetsSol}
              />
            </Show>
            <Show when={!isSolMode()}>
              <SellPresetsPerc
                value={settingsBSStore.sellPresetsPerc}
                onChange={handleChangeSellPresetsPerc}
              />
            </Show>
          </S.Right>
        </S.Row>

        <S.Row>
          {/* Buy Tip */}

          <S.Left>
            <S.Box cn="ext-mb-3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Tip" />
            </S.Box>
            <S.Box>
              <NumberInput
                value={settingsBSStore.buyTip}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleBuyTipChange}
              />
            </S.Box>
          </S.Left>

          {/* Sell Tip */}
          <S.Right>
            <div class="ext-mb-3">
              <S.CHeading left="Sell" right="Tip" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.sellTip}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleSellTipChange}
              />
            </div>
          </S.Right>
        </S.Row>
        <S.Row>
          {/* Buy Priority Fee */}

          <S.Left>
            <S.Box mb="3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Priority Fee" />
            </S.Box>
            <S.Box>
              <NumberInput
                value={settingsBSStore.buyPriorityFee}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleBuyPriorityFeeChange}
              />
            </S.Box>
          </S.Left>

          {/* Sell Priority Fee */}

          <S.Right>
            <S.Box mb="3">
              <S.CHeading left="Sell" right="Priority Fee" />
            </S.Box>
            <S.Box>
              <NumberInput
                value={settingsBSStore.sellPriorityFee}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleSellPriorityFeeChange}
              />
            </S.Box>
          </S.Right>
        </S.Row>

        <S.Row>
          {/* Buy Slippage */}
          <S.Left>
            <S.Box mb="3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Slippage" />
            </S.Box>
            <S.Box>
              <NumberInput
                value={settingsBSStore.buySlippage}
                color={IColor.grey}
                icon={IIcon.perc}
                onChange={handleBuySlippageChange}
              />
            </S.Box>
          </S.Left>

          {/* Sell Slippage */}

          <S.Right>
            <S.Box mb="3">
              <S.CHeading left="Sell" right="Slippage" />
            </S.Box>
            <S.Box>
              <NumberInput
                value={settingsBSStore.sellSlippage}
                color={IColor.grey}
                icon={IIcon.perc}
                onChange={handleSellSlippageChange}
              />
            </S.Box>
          </S.Right>
        </S.Row>
      </S.Content>
      <SaveButton onClick={handleSave} />
    </Paper>
  );
};
