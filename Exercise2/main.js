
import {
  useState,
  setAppRenderer,
  renderApp,
  stateStore,
  registerEvent,
  clearEvents,
  attachRootEvents
} from "./reactive-engine.js";

// Find the application root
const root = document.getElementById("app");

if (!root) {
  throw new Error("Root element #app not found");
}

// Create the application UI
function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Ready");

  // Remove old action handlers
  clearEvents();

  // Register the increment action
  registerEvent("increment", () => {
    setCount((previous) => previous + 1);
    setMessage("State updated!");
  });

  // Register the reset action
  registerEvent("reset", () => {
    setCount(0);
    setMessage("Ready");
  });

  // Create semantic DOM elements
  const main = document.createElement("main");
  const heading = document.createElement("h1");
  const countText = document.createElement("p");
  const statusText = document.createElement("p");
  const incrementButton = document.createElement("button");
  const resetButton = document.createElement("button");

  heading.textContent = "Root Event Delegation Hub";
  countText.textContent = `Count: ${count}`;
  statusText.textContent = `Status: ${message}`;

  incrementButton.textContent = "Increment Count";
  incrementButton.type = "button";
  incrementButton.dataset.action = "increment";

  resetButton.textContent = "Reset";
  resetButton.type = "button";
  resetButton.dataset.action = "reset";

  main.append(
    heading,
    countText,
    statusText,
    incrementButton,
    resetButton
  );

  // Replace previous DOM elements
  root.replaceChildren(main);

  console.log("App rendered:", { count, message });
}

// Attach the event listener once
attachRootEvents(root);

// Register and render application
setAppRenderer(App);
renderApp();

// Display initial state
console.log("Initial State Store:", stateStore);
