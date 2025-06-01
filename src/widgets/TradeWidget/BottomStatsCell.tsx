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
        'ext-flex ext-gap-1 ext-px-3 ext-border-r ext-items-start ext-flex-1 ext-justify-center',
        props.cn,
      )}
    >
      <div class="ext-flex ext-flex-col">
        <div class="ext-text-[9px] ext-text-gray-400">{props.title}</div>
        <div class="ext-flex ext-items-baseline ext-gap-1 ext-justify-center">
          <div class="ext-w-[10px]">
            <img width="10px" src={sol} alt="sol_icon" />
          </div>
          <div
            class={cn('ext-pt-1 ext-whitespace-nowrap', {
              [`ext-text-green-500`]: props.color === BCellColor.green,
              [`ext-text-red-600`]: props.color === BCellColor.red,
              [`ext-text-white`]:
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
