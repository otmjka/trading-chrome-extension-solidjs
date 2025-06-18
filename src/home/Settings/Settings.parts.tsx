import { Component, JSX } from 'solid-js';

export const Container: Component<{ children: JSX.Element }> = (props) => (
  <div class="ext-flex ext-flex-col ext-w-screen ext-h-screen ext-bg-black">
    <div>{props.children}</div>
  </div>
);

export const Content: Component<{ children: JSX.Element }> = (props) => (
  <div class="ext-flex ext-flex-1 ext-justify-center ext-min-h-[662px]">
    <div>{props.children}</div>
  </div>
);
