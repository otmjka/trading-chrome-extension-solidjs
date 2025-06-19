import { createDraggable } from '@neodrag/solid';
import { Component, createSignal, JSX } from 'solid-js';

export const MovingContainer: Component<{ children?: JSX.Element }> = (
  props,
) => {
  const [move, setMove] = createSignal<boolean>(true);
  const { draggable } = createDraggable();
  return (
    <div use:draggable={{ axis: move() ? 'both' : 'none' }}>
      {props.children}
    </div>
  );
};
