
// Import Mini-React functions
import {
  createElement,
  renderToDOM
} from "./mini-react.js";

import { runTests } from "./test-runner.js";

// Create the virtual DOM tree
const app = createElement(
  "main",
  { className: "container" },

  createElement(
    "section",
    { className: "intro" },

    createElement(
      "h1",
      { className: "hero" },
      "Mini React Engine"
    ),

    createElement(
      "p",
      { className: "description" },
      "Exercise 1 - Virtual DOM Rendering"
    ),

    createElement(
      "p",
      { className: "description" },
      "This interface is rendered using our custom Mini-React engine."
    ),

    createElement(
      "h2",
      null,
      "Security Test"
    ),

    createElement(
      "p",
      { className: "security-text" },
      "XSS Test: <script>alert('XSS')</script>"
    ),

    createElement(
      "h2",
      null,
      "Event Handling"
    ),

    createElement(
      "button",
      {
        id: "test-button",
        className: "primary-button",
        type: "button",
        onClick: () => {
          alert("Mini React works!");
          console.log("Button clicked successfully!");
        }
      },
      "Click Me"
    )
  )
);

// Find the root container
const root = document.getElementById("app");

if (!root) {
  throw new Error("Root element #app was not found!");
}

// Mount the virtual DOM
renderToDOM(app, root);

// Display debugging information
console.log("Virtual DOM Tree:", app);
console.log("DOM rendered successfully!");

// Run Mini-React tests
runTests();
