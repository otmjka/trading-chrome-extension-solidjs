import { JSX, Component } from 'solid-js';
import cn from 'classnames';
import sol from './icons/sol.svg';
import { BCellColor } from './enums';

type BottomStatsCellProps = {
  cn?: string;
  color?: BCellColor;
  title: JSX.Element;
  value: string;
};

const BottomStatsCell: Component<BottomStatsCellProps> = (props) => (
  <div
    class={cn(
      'flex gap-1 px-3 border-r items-start flex-1 justify-center',
      props.cn,
    )}
  >
    <div class="flex flex-col">
      <div class="text-[9px] text-gray-400">{props.title}</div>
      <div class="flex items-baseline gap-1 justify-center">
        <div class="w-[10px]">
          <img width="10px" src={sol} alt="sol_icon" />
        </div>
        <div
          class={cn('pt-1 whitespace-nowrap', {
            [`text-green-500`]: props.color === BCellColor.green,
            [`text-red-600`]: props.color === BCellColor.red,
            [`text-white`]: props.color === BCellColor.white || !props.color,
          })}
        >
          {props.value}
        </div>
      </div>
    </div>
  </div>
);
export default BottomStatsCell;
