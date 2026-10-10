
// Store component states
export const stateStore = [];

let stateCursor = 0;
let appRenderer = null;
let rootElement = null;
let delegatedHandler = null;

// Store handlers for the current DOM tree
const eventHandlers = new Map();

// Reset cursor before rendering
export function resetCursor() {
  stateCursor = 0;
}

// Get the current cursor
export function getCursor() {
  return stateCursor;
}

// Get state index and increase cursor
export function nextCursor() {
  return stateCursor++;
}

// Register the application renderer
export function setAppRenderer(renderer) {
  appRenderer = renderer;
}

// Render application with existing state
export function renderApp() {
  if (typeof appRenderer !== "function") {
    return;
  }

  resetCursor();
  appRenderer();
}

// Create a custom state hook
export function useState(initialValue) {
  const currentIndex = nextCursor();

  // Initialize state once
  if (!(currentIndex in stateStore)) {
    stateStore[currentIndex] =
      typeof initialValue === "function"
        ? initialValue()
        : initialValue;
  }

  // Update state and re-render
  function setState(newValue) {
    const previousValue = stateStore[currentIndex];

    const nextValue =
      typeof newValue === "function"
        ? newValue(previousValue)
        : newValue;

    if (Object.is(previousValue, nextValue)) {
      return;
    }

    stateStore[currentIndex] = nextValue;
    renderApp();
  }

  return [stateStore[currentIndex], setState];
}

// Register a handler for a child element
export function registerEvent(id, handler) {
  eventHandlers.set(id, handler);
}

// Remove handlers from a previous render
export function clearEvents() {
  eventHandlers.clear();
}

// Attach one click listener to the root
export function attachRootEvents(root) {
  if (!(root instanceof Element)) {
    throw new Error("A valid root element is required");
  }

  // Avoid duplicate listeners
  if (rootElement === root && delegatedHandler) {
    return;
  }

  // Clean up an existing listener
  if (rootElement && delegatedHandler) {
    rootElement.removeEventListener(
      "click",
      delegatedHandler
    );
  }

  rootElement = root;

  delegatedHandler = (event) => {
    // Find the nearest registered action
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const actionElement = target.closest("[data-action]");

    if (
      !actionElement ||
      !rootElement.contains(actionElement)
    ) {
      return;
    }

    const action = actionElement.dataset.action;
    const handler = eventHandlers.get(action);

    if (typeof handler === "function") {
      handler(event);
    }
  };

  rootElement.addEventListener("click", delegatedHandler);

  console.log("Root Event Delegation attached!");
}
