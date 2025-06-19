import { Component } from 'solid-js';
import {
  IColor,
  IconButton,
  IIcon,
  NumberInput,
  TrashIcon,
  Typography,
} from '../../../uiKit/CabalExt';
import { For } from 'solid-js';

const cols = [
  { label: 'Limit type' },
  { label: 'Priority Fee' },
  { label: 'TIP' },
  { label: 'Slippage' },
  { label: 'Position' },
  { label: 'Profit' },
  { label: 'A' },
];

const rows = [
  {
    type: 'TakeProfit Trailing',
    priorityFee: '0.0005',
    tip: '0.005',
    slippage: '25',
    position: '50',
    profit: '100',
  },
  {
    type: 'TakeProfit Trailing',
    priorityFee: '0.0005',
    tip: '0.005',
    slippage: '25',
    position: '50',
    profit: '100',
  },
  {
    type: 'TakeProfit Trailing',
    priorityFee: '0.0005',
    tip: '0.005',
    slippage: '25',
    position: '50',
    profit: '100',
  },
];

export const AutoLimitTableInput: Component = () => {
  return (
    <table class="ext-w-full">
      <thead>
        <tr>
          <For each={cols}>
            {(col) => {
              return (
                <th class="ext-text-left">
                  <Typography children={col.label} />
                </th>
              );
            }}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={rows}>
          {(row) => {
            return (
              <tr>
                <td>
                  <Typography children={row.type} />
                </td>
                <td>
                  <NumberInput
                    value={row.priorityFee}
                    color={IColor.grey}
                    icon={IIcon.sol}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </td>
                <td>
                  <NumberInput
                    value={row.tip}
                    color={IColor.grey}
                    icon={IIcon.sol}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </td>
                <td>
                  <NumberInput
                    value={row.slippage}
                    color={IColor.grey}
                    icon={IIcon.perc}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </td>
                <td>
                  <NumberInput
                    value={row.position}
                    color={IColor.grey}
                    icon={IIcon.perc}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </td>
                <td>
                  <NumberInput
                    value={row.profit}
                    color={IColor.grey}
                    icon={IIcon.perc}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </td>
                <td>
                  <IconButton>
                    <TrashIcon />
                  </IconButton>
                </td>
              </tr>
            );
          }}
        </For>
      </tbody>
    </table>
  );
};
