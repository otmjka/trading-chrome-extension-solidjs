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
      class="ext-draggable ext-absolute ext-bg-red-800 ext-p-4 ext-w-[400px]"
      classList={{ 'ext-opacity-25': draggable.isActiveDraggable }}
      style={{ top: 0, left: (props.id === 1 ? 0 : 125) + 'px' }}
    >
      {props.children}
    </div>
  );
};
