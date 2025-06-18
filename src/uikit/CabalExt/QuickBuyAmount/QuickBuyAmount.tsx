import { IColor, IIcon, InputSize, NumberInput } from '../NumberInput';
import { SaveButton } from '../SaveButton';
import { FontSize } from '../Typography';

export const QuickBuyAmount = () => {
  return (
    <div class="ext-flex ext-items-end ext-gap-2 ext-mt-6">
      <div>
        <NumberInput
          label={'Quick Buy Amount'}
          size={InputSize.sm}
          value={'5'}
          color={IColor.grey}
          icon={IIcon.sol}
          onChange={() => {}}
        />
      </div>
      <div>
        <div>
          <SaveButton
            nowrap
            size={FontSize.sm}
            onClick={() => {
              console.log('apply changes');
            }}
          >
            Apply Changes
          </SaveButton>
        </div>
      </div>
    </div>
  );
};
