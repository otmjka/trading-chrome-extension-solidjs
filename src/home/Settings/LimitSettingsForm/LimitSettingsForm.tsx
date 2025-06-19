import { Component } from 'solid-js';
import {
  FontSize,
  IColor,
  IIcon,
  NumberInput,
  Paper,
  Typography,
} from '../../../uikit/CabalExt';

import * as S from '../Shared/Settings.parts';
import { createStore } from 'solid-js/store';
import { McParamsValues } from '../BuySellSettingsForm/types';
import { McParamsInput } from './McParamsInput';
import { SaveButton } from '../Shared/SaveButton';

type BuySellSettingsStore = {
  buyTip: string;
  sellTip: string;
  buyPriorityFee: string;
  sellPriorityFee: string;
  buySlippage: string;
  sellSlippage: string;

  mcParams: McParamsValues;
};

const initValue = {
  buyTip: '0.005',
  sellTip: '0.006',
  buyPriorityFee: '0.0003',
  sellPriorityFee: '0.0004',
  buySlippage: '25',
  sellSlippage: '35',

  mcParams: ['-100', '-50', '0', '50', '100'],
};

const [settingsBSStore, setbSettingsBSStore] =
  createStore<BuySellSettingsStore>(initValue);

const handleChangeMcParams = (newValues: McParamsValues) =>
  setbSettingsBSStore('mcParams', newValues);
export const LimitSettingsForm: Component = () => {
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
  return (
    <Paper cn="ext-bg-black ext-w-[422px]">
      <div class="ext-mb-8">
        <Typography size={FontSize.xl2}>Limit Settings</Typography>
      </div>
      <div>
        <div class="ext-flex ext-gap-5 ext-mb-8">
          <div>
            <div class="ext-mb-3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Tip" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.buyTip}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleBuyTipChange}
              />
            </div>
          </div>
          <div>
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
          </div>
        </div>
        <div class="ext-flex ext-gap-5 ext-mb-8">
          <div>
            <div class="ext-mb-3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Priority Fee" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.buyPriorityFee}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleBuyPriorityFeeChange}
              />
            </div>
          </div>
          <div>
            <div class="ext-mb-3">
              <S.CHeading left="Sell" right="Priority Fee" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.sellPriorityFee}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleSellPriorityFeeChange}
              />
            </div>
          </div>
        </div>
        <div class="ext-flex ext-gap-5 ext-mb-8">
          <div>
            <div class="ext-mb-3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Slippage" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.buySlippage}
                color={IColor.grey}
                icon={IIcon.perc}
                onChange={handleBuySlippageChange}
              />
            </div>
          </div>
          <div>
            <div class="ext-mb-3">
              <S.CHeading left="Sell" right="Slippage" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.sellSlippage}
                color={IColor.grey}
                icon={IIcon.perc}
                onChange={handleSellSlippageChange}
              />
            </div>
          </div>
        </div>
        <div class="ext-flex ext-mb-8">
          <McParamsInput onChange={handleChangeMcParams} />
        </div>
      </div>
      <SaveButton />
    </Paper>
  );
};
