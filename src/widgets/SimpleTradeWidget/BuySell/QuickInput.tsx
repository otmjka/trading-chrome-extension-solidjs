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
    <div class="e:flex e:items-end e:gap-2 e:mt-3">
      <div class="e:flex-1">
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
            <div class="e:px-4 e:py-1.5">
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
