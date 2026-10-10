
# Exercise 3: Resilient State Machine & Skeleton Loader

## Objective
Build a resilient React and TypeScript data component
with four lifecycle states, skeleton loading,
error handling, and retry functionality.

## Task Decomposition

### Task 3.1 - Project Setup
- [ ] Configure React + TypeScript with Vite.
- [ ] Configure package.json and tsconfig.json.
- [ ] Configure vite.config.ts.
- [ ] Create main.tsx and App.tsx.
- [ ] Create state-machine.ts and style.css.
- [ ] Verify the development server starts.

### Task 3.2 - State Machine Definition
- [ ] Define generic ViewState<T>.
- [ ] Implement IDLE state.
- [ ] Implement LOADING state.
- [ ] Implement SUCCESS state with data.
- [ ] Implement ERROR state with error message.
- [ ] Use TypeScript discriminated unions.
- [ ] Prevent invalid state combinations.

### Task 3.3 - Asynchronous Data Loading
- [ ] Define the Item data type.
- [ ] Implement fetchFeed().
- [ ] Implement async loadData().
- [ ] Set LOADING before fetching data.
- [ ] Set SUCCESS when the request succeeds.
- [ ] Set ERROR when the request fails.
- [ ] Use try/catch for error handling.

### Task 3.4 - Skeleton Loading UI
- [ ] Build the loading skeleton component.
- [ ] Implement CSS pulsing animation.
- [ ] Display skeleton during LOADING.
- [ ] Replace skeleton after loading finishes.

### Task 3.5 - Success State UI
- [ ] Display fetched data.
- [ ] Render data using semantic HTML.
- [ ] Verify data appears after loading.
- [ ] Ensure skeleton disappears on success.

### Task 3.6 - Error Handling and Retry
- [ ] Display human-readable error messages.
- [ ] Implement Retry Connection button.
- [ ] Retry the failed request.
- [ ] Transition from ERROR to LOADING.
- [ ] Verify retry success and failure cases.

### Task 3.7 - Race Condition Protection
- [ ] Prevent stale requests from updating UI.
- [ ] Handle overlapping async requests.
- [ ] Verify only the latest valid response updates state.
- [ ] Avoid inconsistent UI states.

### Task 3.8 - Final Testing
- [ ] Verify IDLE state.
- [ ] Verify LOADING state.
- [ ] Verify SUCCESS state.
- [ ] Verify ERROR state.
- [ ] Verify skeleton animation.
- [ ] Verify Retry Connection functionality.
- [ ] Verify race condition protection.

### Task 3.9 - Git Milestone
- [ ] Confirm all requirements are satisfied.
- [ ] Commit: feat(ui): implement multi-state data component with skeleton feedback

## Required Git Commit

feat(ui): implement multi-state data component with skeleton feedback

## Acceptance Criteria

- ViewState<T> is correctly implemented.
- Only valid lifecycle states are allowed.
- LOADING displays animated skeleton.
- SUCCESS displays fetched data.
- ERROR displays a readable error message.
- Retry Connection works correctly.
- Async race conditions are prevented.
- No inconsistent UI states occur.
