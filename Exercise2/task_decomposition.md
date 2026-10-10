
# Exercise 2: Reactive State Machine & Delegation Hub

## Objective
Implement a custom useState closure engine and
root Event Delegation hub to build a reactive
Task Manager application.

## Task Decomposition

### Task 2.1 - Project Setup
- [ ] Configure index.html and style.css.
- [ ] Prepare mini-react.js.
- [ ] Create reactive-engine.js.
- [ ] Create main.js.
- [ ] Create checkpoint2-verify.js.
- [ ] Configure ES Modules and root container.

### Task 2.2 - State Storage Engine
- [ ] Implement stateStore.
- [ ] Implement state cursor.
- [ ] Implement resetCursor().
- [ ] Preserve state between renders.
- [ ] Verify state initialization.

### Task 2.3 - Git Milestone 1
- [ ] Test stateStore and resetCursor().
- [ ] Commit: feat(state): implement stateStore and resetCursor engine

### Task 2.4 - Custom useState
- [ ] Implement useState(initialValue).
- [ ] Use closures to manage state.
- [ ] Return current state and setter.
- [ ] Support functional state updates.
- [ ] Trigger re-render after state changes.
- [ ] Implement renderApp().

### Task 2.5 - Git Milestone 2
- [ ] Verify state updates.
- [ ] Commit: feat(state): implement reactive useState dispatcher

### Task 2.6 - Event Delegation Hub
- [ ] Implement root event delegation.
- [ ] Attach a click listener to the root.
- [ ] Dispatch events to matching handlers.
- [ ] Support dynamically rendered buttons.
- [ ] Avoid individual child button listeners.
- [ ] Verify no orphan event listeners.

### Task 2.7 - Git Milestone 3
- [ ] Test root event delegation.
- [ ] Commit: feat(events): attach root event delegation listener

### Task 2.8 - Reactive Task Manager UI
- [ ] Create semantic Task Manager layout.
- [ ] Display total task count.
- [ ] Create Add Task button.
- [ ] Add new tasks dynamically.
- [ ] Display the task list.
- [ ] Implement dynamic filter toggles.
- [ ] Connect UI to custom useState.
- [ ] Verify unidirectional data flow.

### Task 2.9 - Git Milestone 4
- [ ] Test Task Manager functionality.
- [ ] Commit: feat(ui): assemble reactive todo application

### Task 2.10 - Final Verification
- [ ] Run checkpoint2-verify.js.
- [ ] Verify Add Task updates state.
- [ ] Verify task count changes.
- [ ] Verify filters update the UI.
- [ ] Verify automatic re-rendering.
- [ ] Verify root Event Delegation.
- [ ] Verify no orphan event listeners.

## Required Git Commits

1. feat(state): implement stateStore and resetCursor engine
2. feat(state): implement reactive useState dispatcher
3. feat(events): attach root event delegation listener
4. feat(ui): assemble reactive todo application

## Acceptance Criteria

- stateStore works correctly.
- resetCursor() resets the state cursor.
- Custom useState updates application state.
- State changes trigger UI re-rendering.
- Add Task functionality works.
- Dynamic filters work correctly.
- Root Event Delegation handles events.
- No orphan child event listeners.
- Checkpoint verification passes.
