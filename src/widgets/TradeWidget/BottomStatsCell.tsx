import { JSX, Component } from 'solid-js';
import cn from 'classnames';
// import sol from './icons/sol.svg';
import { BCellColor } from './enums';

type BottomStatsCellProps = {
  cn?: string;
  color?: BCellColor;
  title: JSX.Element;
  value: string;
};

const BottomStatsCell: Component<BottomStatsCellProps> = (props) => {
  const sol = chrome.runtime.getURL('assets2/sol.svg');
  return (
    <div
      class={cn(
        'e:flex e:gap-1 e:px-3 e:border-r e:items-start e:flex-1 e:justify-center',
        props.cn,
      )}
    >
      <div class="e:flex e:flex-col">
        <div class="e:text-[9px] e:text-gray-400">{props.title}</div>
        <div class="e:flex e:items-baseline e:gap-1 e:justify-center">
          <div class="e:w-[10px]">
            <img width="10px" src={sol} alt="sol_icon" />
          </div>
          <div
            class={cn('e:pt-1 e:whitespace-nowrap', {
              [`e:text-green-500`]: props.color === BCellColor.green,
              [`e:text-red-600`]: props.color === BCellColor.red,
              [`e:text-white`]:
                props.color === BCellColor.white || !props.color,
            })}
          >
            {props.value}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomStatsCell;
