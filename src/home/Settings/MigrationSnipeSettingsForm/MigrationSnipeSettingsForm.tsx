import { Component, createSignal } from 'solid-js';
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
import { SaveButton } from '../Shared/SaveButton';

type BuySellSettingsStore = {
  buyAmount: string;
  sellAmount: string;
  buyTip: string;
  sellTip: string;
  buyPriorityFee: string;
  sellPriorityFee: string;
  buySlippage: string;
  sellSlippage: string;
};

const initValue = {
  buyAmount: '0.01',
  sellAmount: '30',
  buyTip: '0.005',
  sellTip: '0.006',
  buyPriorityFee: '0.0003',
  sellPriorityFee: '0.0004',
  buySlippage: '25',
  sellSlippage: '35',
};

const [settingsBSStore, setbSettingsBSStore] =
  createStore<BuySellSettingsStore>(initValue);

export const MigrationSnipeSettingsForm: Component = () => {
  const [isSolMode, setIsSolMode] = createSignal<boolean>(true);

  const handleChangeBuyAmount = (newValues: string) =>
    setbSettingsBSStore('buyAmount', newValues);

  const handleChangeSellAmount = (newValues: string) =>
    setbSettingsBSStore('sellAmount', newValues);

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
    <Paper cn="e:bg-black e:w-[422px]">
      <div class="e:mb-8">
        <Typography size={FontSize.xl2}>Migration Snipe Settings</Typography>
      </div>
      <div>
        <div class="e:flex e:gap-5 e:mb-8">
          <div>
            <div class="e:mb-3">
              <S.CHeading dir={S.Dir.buy} left="Buy" right="Amount" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.buyAmount}
                color={IColor.grey}
                icon={IIcon.sol}
                onChange={handleChangeBuyAmount}
              />
            </div>
          </div>
          <div>
            <div class="e:mb-3">
              <S.CHeading left="Sell" right="Amount" />
            </div>
            <div>
              <NumberInput
                value={settingsBSStore.sellAmount}
                color={IColor.grey}
                icon={IIcon.perc}
                onChange={handleChangeSellAmount}
              />
            </div>
          </div>
        </div>
        <div class="e:flex e:gap-5 e:mb-8">
          <div>
            <div class="e:mb-3">
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
            <div class="e:mb-3">
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
        <div class="e:flex e:gap-5 e:mb-8">
          <div>
            <div class="e:mb-3">
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
            <div class="e:mb-3">
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
        <div class="e:flex e:gap-5 e:mb-8">
          <div>
            <div class="e:mb-3">
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
            <div class="e:mb-3">
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
      </div>
      <SaveButton />
    </Paper>
  );
};
