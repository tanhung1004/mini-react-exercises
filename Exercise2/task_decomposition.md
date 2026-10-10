
# Exercise 2: Reactive State Machine & Delegation Hub

## Objective

Implement a custom useState closure engine and root Event Delegation hub to build a reactive Task Manager application.

## Task Decomposition

### Task 2.1 - Project Setup

- [x] Configure index.html and style.css.
- [x] Prepare mini-react.js.
- [x] Create reactive-engine.js.
- [x] Create main.js.
- [x] Create checkpoint2-verify.js.
- [x] Configure ES Modules and root container.

### Task 2.2 - State Storage Engine

- [x] Implement stateStore.
- [x] Implement state cursor.
- [x] Implement resetCursor().
- [x] Preserve state between renders.
- [x] Verify state initialization.

### Task 2.3 - Git Milestone 1

- [x] Test stateStore and resetCursor().
- [x] Commit: feat(state): implement stateStore and resetCursor engine

### Task 2.4 - Custom useState

- [x] Implement useState(initialValue).
- [x] Use closures to manage state.
- [x] Return current state and setter.
- [x] Support functional state updates.
- [x] Trigger re-render after state changes.
- [x] Implement renderApp().

### Task 2.5 - Git Milestone 2

- [x] Verify state updates.
- [x] Commit: feat(state): implement reactive useState dispatcher

### Task 2.6 - Event Delegation Hub

- [x] Implement root event delegation.
- [x] Attach a click listener to the root.
- [x] Dispatch events to matching handlers.
- [x] Support dynamically rendered buttons.
- [x] Avoid individual child button listeners.
- [ ] Independently verify no orphan event listeners.

### Task 2.7 - Git Milestone 3

- [x] Test root event delegation.
- [x] Commit: feat(events): attach root event delegation listener

### Task 2.8 - Reactive Task Manager UI

- [x] Create semantic Task Manager layout.
- [x] Display total task count.
- [x] Create Add Task button.
- [x] Add new tasks dynamically.
- [x] Display the task list.
- [x] Implement dynamic filter toggles.
- [x] Connect UI to custom useState.
- [x] Verify unidirectional data flow.

### Task 2.9 - Git Milestone 4

- [x] Test Task Manager functionality.
- [x] Commit: feat(ui): assemble reactive todo application

### Task 2.10 - Final Verification

- [x] Run checkpoint2-verify.js.
- [x] Verify Add Task updates state.
- [x] Verify task count changes.
- [x] Verify filter controls and state integration.
- [x] Verify automatic re-rendering.
- [x] Verify root Event Delegation.
- [ ] Independently verify no orphan event listeners.

## Required Git Commits

1. feat(state): implement stateStore and resetCursor engine
2. feat(state): implement reactive useState dispatcher
3. feat(events): attach root event delegation listener
4. feat(ui): assemble reactive todo application

## Git Milestone Status

- [x] Milestone 1 completed and pushed.
- [x] Milestone 2 completed and pushed.
- [x] Milestone 3 completed and pushed.
- [x] Milestone 4 completed and pushed.
- [x] Checkpoint verification committed and pushed.

## Test Results

| Test | Result |
|---|---|
| Root element exists | PASS |
| Task Manager renders correctly | PASS |
| State Store contains tasks and filter | PASS |
| resetCursor works | PASS |
| State cursor increments | PASS |
| Custom useState exists | PASS |
| Reactive render engine exists | PASS |
| Root Event Delegation exists | PASS |
| Add Task button exists | PASS |
| Dynamic filter buttons exist | PASS |
| Task actions exist | PASS |

Total: 11/11 checkpoint assertions passed.

Additional manual tests:
- Add Task: PASS
- Task count update: PASS
- Delete Task: PASS
- Automatic re-rendering: PASS
- Independent orphan listener audit: Pending

## Acceptance Criteria

- [x] stateStore works correctly.
- [x] resetCursor() resets the state cursor.
- [x] Custom useState updates application state.
- [x] State changes trigger UI re-rendering.
- [x] Add Task functionality works.
- [x] Dynamic filters are implemented.
- [x] Root Event Delegation handles events.
- [ ] Independently verify no orphan child event listeners.
- [x] Checkpoint verification passes.

## Technologies Used

- HTML5
- CSS3
- JavaScript ES Modules
- Custom useState
- State Management
- DOM API
- Event Delegation
- Git and GitHub

## Repository

https://github.com/tanhung1004/mini-react-exercises

## Final Status

Implementation: Completed

Git Milestones: 4/4 Completed

Checkpoint Tests: 11/11 Passed

Orphan Event Listener Audit: Pending
