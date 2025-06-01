import { Accessor, Component } from 'solid-js';

import TradeTabButton from './TradeTabButton';
import { TradeDir } from './enums';
import { isBuy, isSell } from './helpers';

type TradeDirSelectorProps = {
  getDir: Accessor<TradeDir>;
  onSelect: (value: TradeDir) => void;
};

const TradeDirSelector: Component<TradeDirSelectorProps> = ({
  getDir,
  onSelect,
}) => {
  return (
    <div class="ext-flex ext-gap-[7px] ext-mb-[15px]">
      <TradeTabButton
        mode={TradeDir.Buy}
        active={isBuy(getDir())}
        onClick={() => onSelect(TradeDir.Buy)}
      >
        Buy
      </TradeTabButton>
      <TradeTabButton
        mode={TradeDir.Sell}
        active={isSell(getDir())}
        onClick={() => onSelect(TradeDir.Sell)}
      >
        Sell
      </TradeTabButton>
    </div>
  );
};

export default TradeDirSelector;
