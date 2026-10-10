
// Import state management functions
import {
  stateStore,
  resetCursor,
  getCursor,
  nextCursor
} from "./reactive-engine.js";

// Initialize sample states
stateStore[0] = ["Review PR", "Verify AST"];
stateStore[1] = "ALL";

// Simulate state positions
resetCursor();

console.log("Initial State Store:", stateStore);
console.log("Initial Cursor:", getCursor());

console.log("First State Index:", nextCursor());
console.log("Second State Index:", nextCursor());

console.log("Cursor After Two Calls:", getCursor());

// Simulate a new render
resetCursor();

console.log("Cursor After Reset:", getCursor());
console.log("States After Reset:", stateStore);
