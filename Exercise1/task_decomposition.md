
# Exercise 1: Mini-React VNode & Mounting Engine

## Objective

Build a lightweight Mini-React engine from scratch using vanilla JavaScript.

Implement the following core functions:

- createTextElement()
- createElement()
- renderToDOM()

The application must support semantic HTML, safe text rendering, event handling, and DOM verification.

## Task Decomposition

### Task 1.1 - Project Setup

- [x] Create index.html and style.css.
- [x] Create mini-react.js and main.js.
- [x] Create test-runner.js.
- [x] Configure ES Modules and the root container.
- [x] Run the project using Live Server.

### Task 1.2 - Virtual Node Factory

- [x] Implement createTextElement().
- [x] Implement createElement().
- [x] Support element type, props, and children.
- [x] Support nested VNode structures.
- [x] Handle text and numeric children.
- [x] Filter null, undefined, and boolean children.
- [x] Verify VNode objects in the browser Console.

### Task 1.3 - Git Milestone 1

- [x] Test the VNode factory.
- [x] Commit the createElement factory.
- [x] Push the commit to GitHub.

Commit message:

`feat(core): implement createElement factory`

### Task 1.4 - DOM Mounting Engine

- [x] Implement renderToDOM().
- [x] Convert VNodes into real DOM elements.
- [x] Render text using document.createTextNode().
- [x] Apply DOM attributes.
- [x] Convert className into class.
- [x] Register click event handlers.
- [x] Support semantic HTML elements.
- [x] Render nested children recursively.
- [x] Avoid unnecessary div wrappers.
- [x] Mount the VNode tree into the root container.

### Task 1.5 - Git Milestone 2

- [x] Implement the DOM rendering engine.
- [x] Test the rendered application.
- [x] Commit the renderToDOM implementation.
- [x] Push the commit to GitHub.

Commit message:

`feat(core): implement renderToDOM`

Commit ID:

`542f15f`

### Task 1.6 - Security Verification

- [x] Test malicious HTML strings.
- [x] Verify XSS payloads are rendered as text.
- [x] Prevent unsafe innerHTML injection.
- [x] Block unsafe JavaScript URLs.
- [x] Verify that script payloads do not execute.
- [x] Display the XSS test string safely on the page.

### Task 1.7 - Checkpoint Testing

- [x] Run test-runner.js.
- [x] Verify createTextElement().
- [x] Verify createElement().
- [x] Verify numeric children.
- [x] Verify XSS protection.
- [x] Verify semantic HTML rendering.
- [x] Verify click event handling.
- [x] Verify nested VNode rendering.
- [x] Verify unsafe URL blocking.
- [x] Confirm all 8 tests pass.
- [x] Confirm no JavaScript errors in Console.


### Task 1.8 - DevTools Audit

- [x] Inspect the Elements panel.
- [x] Compare the VNode tree with the DOM tree.
- [x] Verify no unnecessary div wrappers.
- [x] Verify no unexpected or orphan DOM nodes.
- [x] Confirm the DOM structure matches the VNode tree.


## Required Git Commits

### Commit 1

`feat(core): implement createElement factory`

Status: Completed and pushed to GitHub.

### Commit 2

`feat(core): implement renderToDOM`

Status: Completed and pushed to GitHub.

## Test Results

| Test | Result |
|---|---|
| createTextElement | PASS |
| createElement | PASS |
| Numeric children | PASS |
| XSS safe text rendering | PASS |
| Semantic HTML | PASS |
| Click event handling | PASS |
| Nested VNodes | PASS |
| Unsafe JavaScript URLs | PASS |

Total: 8/8 tests passed.

Browser Console: No JavaScript errors.

## Acceptance Criteria

- [x] createElement() works correctly.
- [x] createTextElement() works correctly.
- [x] renderToDOM() creates real DOM nodes.
- [x] Semantic HTML tags are supported.
- [x] Text content is safely rendered.
- [x] XSS test payloads do not execute.
- [x] Button click works correctly.
- [x] All 8 local tests pass.
- [x] Both required Git milestones are committed.
- [ ] Final DevTools Elements audit is completed.

## Technologies Used

- HTML5
- CSS3
- JavaScript ES Modules
- Virtual DOM
- Browser DOM API
- Chrome/Edge DevTools
- Git and GitHub

## Repository

https://github.com/tanhung1004/mini-react-exercises

## Final Status

Implementation: Completed

Local Tests: 8/8 Passed

Required Git Commits: 2/2 Completed

DevTools Audit: Pending final verification
