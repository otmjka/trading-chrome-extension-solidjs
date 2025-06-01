import { JSX, Component } from 'solid-js';

type StatsContainerProps = {
  children: JSX.Element;
  cn?: string;
};

const StatsContainer: Component<StatsContainerProps> = (props) => (
  <div class="ext-flex ext-justify-center ext-w-full ext-gap-1 ext-my-4">
    {props.children}
  </div>
);
export default StatsContainer;
