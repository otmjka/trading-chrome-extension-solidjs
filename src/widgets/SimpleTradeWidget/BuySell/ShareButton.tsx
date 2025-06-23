import { Component } from 'solid-js';
import {
  BColor,
  Button,
  BV,
  FontSize,
  FW,
  Typography,
} from '../../../uikit/CabalExt';
import { ShareIcon } from '../../../uikit/CabalExt/Icons';

export const ShareButton: Component<{ color?: BColor }> = (props) => {
  return (
    <div class="e:w-[103px]">
      <Button full variant={BV.outline}>
        <span class="e:flex e:gap-2 e:px-2 e:py-[5px] e:items-center">
          <ShareIcon />
          <Typography weight={FW.md} size={FontSize.sm} children={'Share'} />
        </span>
      </Button>
    </div>
  );
};
