import { Component } from 'solid-js';
import { MovingContainer } from './MovingContainer/MovingContainer';
import { TradingWidgetView } from './TradingWidgetView';
import { useSimpleTradeWidget } from './useSimpleTradeWidget';

export const SimpleTradeWidget: Component = () => {
  return (
    <MovingContainer>
      <TradingWidgetView />
    </MovingContainer>
  );
};
