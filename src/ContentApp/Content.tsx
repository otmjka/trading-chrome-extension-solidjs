import { Component } from 'solid-js';

import { Mint } from '../shared/types';
import { useContentManager } from './useContentManager';
import { SimpleTradeWidget } from '../widgets/SimpleTradeWidget/SimpleTradeWidget';

const Content: Component<{ mint: Mint }> = ({ mint }) => {
  useContentManager({ mint });

  return (
    <div class="ext-absolute ext-top-0 ext-right-0 ext-z-[200]">
      <SimpleTradeWidget />
    </div>
  );
};
export default Content;
