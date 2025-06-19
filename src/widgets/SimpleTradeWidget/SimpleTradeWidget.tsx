import { Component } from 'solid-js';
import { MovingContainer } from './MovingContainer/MovingContainer';
import { TradingWidgetView } from './TradingWidgetView';

export const SimpleTradeWidget: Component = () => {
  const openFull = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('home.html') });
  };
  return (
    <MovingContainer>
      <TradingWidgetView state={{ openFull }} />
    </MovingContainer>
  );
};
