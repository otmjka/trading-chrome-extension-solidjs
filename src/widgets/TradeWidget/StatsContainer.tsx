import { JSX, Component } from 'solid-js';

type StatsContainerProps = {
  children: JSX.Element;
  cn?: string;
};

const StatsContainer: Component<StatsContainerProps> = (props) => (
  <div class="e:flex e:justify-center e:w-full e:gap-1 e:my-4">
    {props.children}
  </div>
);
export default StatsContainer;
