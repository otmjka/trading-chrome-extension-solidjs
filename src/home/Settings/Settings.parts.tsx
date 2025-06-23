import { Component, JSX } from 'solid-js';

export const Container: Component<{ children: JSX.Element }> = (props) => (
  <div class="e:flex e:flex-col e:w-screen e:h-screen e:bg-black">
    <div>{props.children}</div>
  </div>
);

export const Content: Component<{ children: JSX.Element }> = (props) => (
  <div class="e:flex e:flex-1 e:justify-center e:min-h-[662px]">
    <div>{props.children}</div>
  </div>
);
