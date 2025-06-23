import { BColor } from '../Button';
import { IColor, IIcon, InputSize, NumberInput } from '../NumberInput';
import { SaveButton } from '../SaveButton';
import { FontSize } from '../Typography';

export const QuickBuyAmount = () => {
  return (
    <div class="e:flex e:items-end e:gap-2 e:mt-6">
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
            color={BColor.green}
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
