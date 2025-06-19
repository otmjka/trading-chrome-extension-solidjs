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
    <div class="ext-w-[103px]">
      <Button full variant={BV.outline}>
        <span class="ext-flex ext-gap-2 ext-px-2 ext-py-[5px] ext-items-center">
          <ShareIcon />
          <Typography weight={FW.md} size={FontSize.sm} children={'Share'} />
        </span>
      </Button>
    </div>
  );
};
