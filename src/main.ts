import AnimationSample1 from "./components/animation-sample-1";
import AnimationSample2 from "./components/animation-sample-2";
import transform from "./components/transform";
import transitionOpacity from "./components/transition-opacity";
import simpleTransition from "./components/transition-width";
import "./style.css";

const components = [
  simpleTransition,
  transitionOpacity,
  AnimationSample1,
  AnimationSample2,
  transform,
];

const elems = components.map(func=>  func())

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>CSS animation</h1>
    <div style="display:flex;">
    ${elems}
   </div>
  </div>
`;
