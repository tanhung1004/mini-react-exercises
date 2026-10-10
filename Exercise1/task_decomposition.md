
# Exercise 1: Mini-React VNode & Mounting Engine

## Objective
Build a lightweight Mini-React engine from scratch
using vanilla JavaScript.

## Task Decomposition

### Task 1.1 - Project Setup
- [ ] Create index.html and style.css.
- [ ] Create mini-react.js and main.js.
- [ ] Create test-runner.js.
- [ ] Configure ES Modules and the root container.

### Task 1.2 - Virtual Node Factory
- [ ] Implement createTextElement().
- [ ] Implement createElement().
- [ ] Support element type, props, and children.
- [ ] Support nested VNode structures.
- [ ] Handle text and numeric children.

### Task 1.3 - Git Milestone 1
- [ ] Test the VNode factory.
- [ ] Commit: feat(core): implement createElement factory

### Task 1.4 - DOM Mounting Engine
- [ ] Implement renderToDOM().
- [ ] Create real DOM elements recursively.
- [ ] Render text using safe text nodes.
- [ ] Apply DOM attributes and className.
- [ ] Attach click event handlers.
- [ ] Support semantic HTML tags.
- [ ] Avoid unnecessary div wrappers.

### Task 1.5 - Git Milestone 2
- [ ] Test the rendering engine.
- [ ] Commit: feat(core): implement renderToDOM

### Task 1.6 - Security Verification
- [ ] Test malicious HTML strings.
- [ ] Verify XSS protection.
- [ ] Ensure HTML input is rendered as text.
- [ ] Avoid unsafe innerHTML usage.

### Task 1.7 - Checkpoint Testing
- [ ] Run test-runner.js.
- [ ] Verify the button exists in the DOM.
- [ ] Verify click event functionality.
- [ ] Verify semantic HTML structure.

### Task 1.8 - DevTools Audit
- [ ] Inspect the Elements panel.
- [ ] Compare the VNode tree with the DOM tree.
- [ ] Verify no orphan DOM nodes.
- [ ] Confirm all requirements are satisfied.

## Required Git Commits

1. feat(core): implement createElement factory
2. feat(core): implement renderToDOM

## Acceptance Criteria

- createElement() works correctly.
- createTextElement() handles text safely.
- renderToDOM() creates valid DOM nodes.
- Semantic HTML tags are used.
- XSS payloads do not execute.
- Button click works correctly.
- No unnecessary wrapper elements.
- All checkpoint tests pass.
