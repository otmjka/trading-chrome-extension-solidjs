import {
  BColor,
  Button,
  FontSize,
  FW,
  IColor,
  IIcon,
  InputSize,
  NumberInput,
  TextColor,
  Typography,
} from '../../../uikit/CabalExt';

export const QuickInput = () => {
  return (
    <div class="ext-flex ext-items-end ext-gap-2 ext-mt-3">
      <div class="ext-flex-1">
        <NumberInput
          placeholder="Enter SOL amount"
          size={InputSize.sm}
          color={IColor.green}
          icon={IIcon.sol}
          onChange={() => {}}
        />
      </div>
      <div>
        <div>
          <Button color={BColor.green} full clipped={true}>
            <div class="ext-px-4 ext-py-1.5">
              <Typography
                weight={FW.semi}
                nowrap
                size={FontSize.sm}
                color={TextColor.black}
                children={'Buy'}
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
