
import {
  createElement,
  createTextElement
} from "./mini-react.js";

const title = createElement(
  "h1",
  { className: "hero" },
  "Mini React Engine"
);

const text = createTextElement("Hello World");

console.log("Title VNode:", title);
console.log("Text VNode:", text);
