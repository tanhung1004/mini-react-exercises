
// Store component states between renders
export const stateStore = [];

// Track the current state position
let stateCursor = 0;

// Reset the cursor before each render
export function resetCursor() {
  stateCursor = 0;
}

// Get the current cursor position
export function getCursor() {
  return stateCursor;
}

// Reserve a position for a state
export function nextCursor() {
  return stateCursor++;
}
