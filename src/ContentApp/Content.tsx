import { Component } from 'solid-js';

import { Mint } from '../shared/types';
import { useContentManager } from './useContentManager';
import { SimpleTradeWidget } from '../widgets/SimpleTradeWidget/SimpleTradeWidget';
import '../styles.css';

const Content: Component<{ mint: Mint }> = ({ mint }) => {
  useContentManager({ mint });

  return (
    <div class="e:absolute e:top-0 e:right-0 e:z-[200]">
      <SimpleTradeWidget />
    </div>
  );
};
export default Content;
