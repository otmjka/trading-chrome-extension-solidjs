import { JSX, Component } from 'solid-js';

type StatsContainerProps = {
  children: JSX.Element;
  cn?: string;
};

const StatsContainer: Component<StatsContainerProps> = (props) => (
  <div class="flex justify-center w-full gap-1 my-4">{props.children}</div>
);
export default StatsContainer;
