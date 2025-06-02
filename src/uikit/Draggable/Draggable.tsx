import { createDraggable } from '@thisbeyond/solid-dnd';
import { Component, JSX } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> {
      // allow `use:` directives
      ['use:draggable']?: any;
    }
  }
}

export const Draggable: Component<{ id: number; children: JSX.Element }> = (
  props,
) => {
  const draggable = createDraggable(props.id);
  return (
    <div
      use:draggable
      class="ext-absolute ext-bg-blue-800"
      classList={{ 'ext-opacity-25': draggable.isActiveDraggable }}
      style={{ top: `200px`, right: '350px' }}
    >
      {props.children}
    </div>
  );
};
