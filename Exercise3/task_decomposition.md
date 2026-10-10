
# Exercise 3: Resilient State Machine & Skeleton Loader

## Objective

Build a React and TypeScript component with four lifecycle states, asynchronous data loading, skeleton feedback, error handling, retry functionality, and race condition protection.

## Task Decomposition

### Task 3.1 - Project Setup

- [x] Set up React and TypeScript with Vite.
- [x] Configure package.json.
- [x] Configure tsconfig.json.
- [x] Configure vite.config.ts.
- [x] Create main.tsx and App.tsx.
- [x] Configure CSS.
- [x] Run the development server.
- [x] Verify the production build.

### Task 3.2 - State Machine Definition

- [x] Define generic ViewState<T>.
- [x] Implement IDLE state.
- [x] Implement LOADING state.
- [x] Implement SUCCESS state with data.
- [x] Implement ERROR state with error message.
- [x] Use TypeScript discriminated unions.
- [x] Prevent invalid state combinations.

### Task 3.3 - Asynchronous Data Loading

- [x] Define the Item data type.
- [x] Create sample feed data.
- [x] Implement fetchFeed().
- [x] Implement async loadData().
- [x] Transition from IDLE to LOADING.
- [x] Transition from LOADING to SUCCESS.
- [x] Handle asynchronous errors using try/catch.

### Task 3.4 - Skeleton Loading

- [x] Create skeleton card components.
- [x] Implement CSS pulse animation.
- [x] Display three skeleton cards during LOADING.
- [x] Remove skeletons when loading finishes.
- [x] Verify skeleton rendering in the browser.

### Task 3.5 - Success State UI

- [x] Render fetched data.
- [x] Display item titles and descriptions.
- [x] Implement Reload Data button.
- [x] Verify successful data loading.

### Task 3.6 - Error Handling and Retry

- [x] Simulate failed asynchronous requests.
- [x] Display human-readable error messages.
- [x] Implement Simulate Error button.
- [x] Implement Retry Connection button.
- [x] Transition from ERROR to LOADING.
- [x] Verify successful retry.

### Task 3.7 - Race Condition Protection

- [x] Implement requestIdRef using useRef().
- [x] Track the latest asynchronous request.
- [x] Ignore outdated success responses.
- [x] Ignore outdated error responses.
- [x] Invalidate requests during component cleanup.

### Task 3.8 - Final Testing

- [x] Verify IDLE state.
- [x] Verify LOADING state.
- [x] Verify SUCCESS state.
- [x] Verify ERROR state.
- [x] Verify Retry Connection.
- [x] Verify Skeleton Loading.
- [x] Implement overlapping request test.
- [x] Verify stale requests do not overwrite newer results.
- [x] Run npm run build successfully.

### Task 3.9 - Git Milestone

- [x] Complete the React component.
- [x] Complete TypeScript state management.
- [x] Complete Skeleton Loading and Retry.
- [x] Implement race condition protection.
- [ ] Confirm final feature commit is pushed.
- [ ] Commit completed task decomposition.

## Required Git Commit

feat(ui): implement multi-state data component with skeleton feedback

## Test Results

| Test | Result |
|---|---|
| React + TypeScript Setup | PASS |
| TypeScript Build | PASS |
| IDLE State | PASS |
| LOADING State | PASS |
| SUCCESS State | PASS |
| ERROR State | PASS |
| Skeleton Loader | PASS |
| Retry Connection | PASS |
| Race Condition Test | PASS |

## Technologies Used

- React
- TypeScript
- TSX
- Vite
- CSS3
- React Hooks
- Git and GitHub

## Repository

https://github.com/tanhung1004/mini-react-exercises

## Final Status

Implementation: Completed

Functional Testing: Completed

Production Build: Passed

Git Milestone: Pending final confirmation

Task Decomposition: Pending commit
