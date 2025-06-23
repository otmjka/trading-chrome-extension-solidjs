import { Component, JSX } from 'solid-js';
import {
  BColor,
  Button,
  FontSize,
  FW,
  TextColor,
  Typography,
} from '../../../uikit/CabalExt';

type SaveButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const SaveButton: Component<SaveButtonProps> = (props) => {
  return (
    <Button {...props} color={BColor.green} cn="e:py-1" full clipped>
      <Typography
        weight={FW.semi}
        size={FontSize.lg}
        color={TextColor.black}
        children="Save Settings"
      />
    </Button>
  );
};
