// import '@fortawesome/fontawesome-free/css/all.css'
// import * as Swate from '@nfdi4plants/swate-components'
import {Icons as LibIcons} from '@nfdi4plants/swate-components'

// your wrapper HOC
function withDefaultStyle(Component: React.ComponentType<any>) {
  return (props: any) => (
    <span className={`[&_i]:!m-0 inline-block ${props.className ?? ""}`} {...props}>
      <Component
      />
    </span>
  );
}

// build a new Icons object with wrapped components
const Icons: Record<string, React.ComponentType<any>> = {};

Object.entries(LibIcons).forEach(([name, Component]) => {
  if (typeof Component === "function") {
    Icons[name] = withDefaultStyle(Component);
  } else {
    Icons[name] = Component as any;
  }
});

export default Icons