
// Import reactive state functions
import {
  useState,
  setAppRenderer,
  renderApp,
  stateStore
} from "./reactive-engine.js";

// Find the root container
const root = document.getElementById("app");

if (!root) {
  throw new Error("Root element #app not found");
}

// Render the reactive application
function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Ready");

  // Create semantic HTML elements
  const main = document.createElement("main");
  const heading = document.createElement("h1");
  const paragraph = document.createElement("p");
  const status = document.createElement("p");
  const button = document.createElement("button");

  heading.textContent = "Custom useState Engine";
  paragraph.textContent = `Count: ${count}`;
  status.textContent = `Status: ${message}`;

  button.textContent = "Increment Count";
  button.type = "button";

  // Update state when button is clicked
  button.addEventListener("click", () => {
    setCount((previous) => previous + 1);
    setMessage("State updated!");
  });

  main.append(heading, paragraph, status, button);

  // Replace the previous application view
  root.replaceChildren(main);

  console.log("App rendered:", {
    count,
    message
  });
}

// Register the application
setAppRenderer(App);

// Perform the initial render
renderApp();

// Inspect the state store
console.log("Initial State Store:", stateStore);
