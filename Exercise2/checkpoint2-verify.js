
// Import state management functions
import {
  stateStore,
  resetCursor,
  getCursor,
  nextCursor,
  useState,
  setAppRenderer,
  renderApp,
  attachRootEvents
} from "./reactive-engine.js";

// Check a test condition
function assert(condition, message) {
  if (!condition) {
    throw new Error("FAIL: " + message);
  }

  console.log("PASS:", message);
}

// Test the current application
export function runCheckpoint2() {
  console.log("Exercise 2 - Final Verification");

  const root = document.getElementById("app");

  assert(root !== null, "Root element exists");

  // Verify the Task Manager is rendered
  assert(
    root.querySelector("main.task-manager") !== null,
    "Task Manager renders correctly"
  );

  // Verify the initial application state
  assert(
    Array.isArray(stateStore[0]) &&
    typeof stateStore[1] === "string",
    "State Store contains tasks and filter"
  );

  // Verify state cursor reset
  resetCursor();

  assert(
    getCursor() === 0,
    "resetCursor works correctly"
  );

  assert(
    nextCursor() === 0 &&
    nextCursor() === 1,
    "State cursor increments correctly"
  );

  // Restore the cursor for the next render
  resetCursor();

  // Verify useState is available
  assert(
    typeof useState === "function",
    "Custom useState exists"
  );

  // Verify application re-rendering
  assert(
    typeof renderApp === "function" &&
    typeof setAppRenderer === "function",
    "Reactive render engine exists"
  );

  // Verify delegated event setup
  assert(
    typeof attachRootEvents === "function",
    "Root Event Delegation exists"
  );

  // Verify task controls
  assert(
    root.querySelector('[data-action="add-task"]') !== null,
    "Add Task button exists"
  );

  assert(
    root.querySelector('[data-action="filter-all"]') !== null &&
    root.querySelector('[data-action="filter-active"]') !== null &&
    root.querySelector('[data-action="filter-completed"]') !== null,
    "Dynamic filter buttons exist"
  );

  // Verify task actions
  assert(
    root.querySelector('[data-action^="toggle-"]') !== null &&
    root.querySelector('[data-action^="delete-"]') !== null,
    "Task actions exist"
  );

  console.log("All 10 checkpoint tests passed!");
}
