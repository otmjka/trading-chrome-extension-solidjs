import { Component } from 'solid-js';
import cn from 'classnames';
import { CellColor, IconName, statIcons } from './enums';

type StatsCellProps = {
  cn?: string;
  icon: IconName;
  color: CellColor;
  value: string;
};

const StatsCell: Component<StatsCellProps> = (props) => (
  <div class="flex gap-1 pr-1 border-r items-center">
    <div>
      <img src={statIcons[props.icon]} alt="props.icon" />
    </div>
    <div
      class={cn('text-xs', {
        [`text-gray-300`]: props.color === 'gray',
        [`text-purple-500`]: props.color === 'purple',
      })}
    >
      {props.value}
    </div>
  </div>
);
export default StatsCell;
