import { Component } from 'solid-js';
import { FW, SolCutIcon, Typography } from '../../uikit/CabalExt';

export const SolAmount: Component<{ amount: string }> = (props) => (
  <div class="ext-flex ext-items-center  ext-gap-0.5 ">
    <Typography weight={FW.bold} children={props.amount} />
    <SolCutIcon />
  </div>
);
