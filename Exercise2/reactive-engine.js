
// Store state values between renders
export const stateStore = [];

// Track the current state position
let stateCursor = 0;

// Store the application render function
let appRenderer = null;

// Reset cursor before rendering
export function resetCursor() {
  stateCursor = 0;
}

// Get current cursor
export function getCursor() {
  return stateCursor;
}

// Return current index and move to the next
export function nextCursor() {
  return stateCursor++;
}

// Register the application render function
export function setAppRenderer(renderer) {
  appRenderer = renderer;
}

// Re-render the application
export function renderApp() {
  if (typeof appRenderer !== "function") {
    return;
  }

  resetCursor();
  appRenderer();
}

// Create a custom reactive state hook
export function useState(initialValue) {
  const currentIndex = nextCursor();

  // Initialize state only once
  if (!(currentIndex in stateStore)) {
    stateStore[currentIndex] =
      typeof initialValue === "function"
        ? initialValue()
        : initialValue;
  }

  // Capture the state index in a closure
  function setState(newValue) {
    const previousValue = stateStore[currentIndex];

    const nextValue =
      typeof newValue === "function"
        ? newValue(previousValue)
        : newValue;

    // Avoid unnecessary renders
    if (Object.is(previousValue, nextValue)) {
      return;
    }

    stateStore[currentIndex] = nextValue;

    // Update the application
    renderApp();
  }

  return [stateStore[currentIndex], setState];
}
