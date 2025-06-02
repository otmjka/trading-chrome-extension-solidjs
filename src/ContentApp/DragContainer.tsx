import { Component, JSX } from 'solid-js';

import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  DragOverlay,
} from '@thisbeyond/solid-dnd';
import { Draggable } from '../uikit/Draggable';

export const DragContainer: Component<{ children: JSX.Element }> = ({
  children,
}) => {
  let transform = { x: 0, y: 0 };

  const onDragMove: DragEventHandler = ({ overlay }) => {
    if (overlay) {
      transform = { ...overlay.transform };
    }
  };

  const onDragEnd: DragEventHandler = ({ draggable }) => {
    const node = draggable.node;
    node.style.setProperty('top', node.offsetTop + transform.y + 'px');
    node.style.setProperty('left', node.offsetLeft + transform.x + 'px');
  };
  return (
    <DragDropProvider onDragMove={onDragMove} onDragEnd={onDragEnd}>
      <DragDropSensors />
      <Draggable id={2}>{children}</Draggable>

      <DragOverlay>
        {() => (
          <div class="ext-absolute ext-border-dotted ext-border-4 ext-border-green-800 ext-w-[328px] ext-h-[351px]" />
        )}
      </DragOverlay>
    </DragDropProvider>
  );
};
