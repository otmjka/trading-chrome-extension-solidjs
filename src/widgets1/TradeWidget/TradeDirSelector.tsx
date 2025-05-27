import { Component } from 'solid-js';

import TradeTabButton from './TradeTabButton';
import { TradeDir } from './enums';

type TradeDirSelectorProps = {
  value: () => TradeDir;
  onSelect: (value: TradeDir) => void;
};

const TradeDirSelector: Component<TradeDirSelectorProps> = ({
  value,
  onSelect,
}) => {
  return (
    <div class="ext-flex ext-gap-[7px] ext-mb-[15px]">
      <TradeTabButton
        mode={TradeDir.Buy}
        active={value() === TradeDir.Buy}
        onClick={() => onSelect(TradeDir.Buy)}
      >
        Buy
      </TradeTabButton>
      <TradeTabButton
        mode={TradeDir.Sell}
        active={value() === TradeDir.Sell}
        onClick={() => onSelect(TradeDir.Sell)}
      >
        Sell
      </TradeTabButton>
    </div>
  );
};

export default TradeDirSelector;
