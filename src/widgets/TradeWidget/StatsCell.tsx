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
  <div class="e:flex e:gap-1 e:pr-1 e:border-r e:items-center">
    <div>
      <img src={statIcons[props.icon]} alt="props.icon" />
    </div>
    <div
      class={cn('e:text-xs', {
        [`e:text-gray-300`]: props.color === 'gray',
        [`e:text-purple-500`]: props.color === 'purple',
      })}
    >
      {props.value}
    </div>
  </div>
);
export default StatsCell;
