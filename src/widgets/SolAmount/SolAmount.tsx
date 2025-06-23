import { Component } from 'solid-js';
import { FW, SolCutIcon, Typography } from '../../uikit/CabalExt';

export const SolAmount: Component<{ amount: string }> = (props) => (
  <div class="e:flex e:items-center  e:gap-0.5 ">
    <Typography weight={FW.bold} children={props.amount} />
    <SolCutIcon />
  </div>
);
