
// Import Mini-React functions
import {
  createElement,
  createTextElement,
  renderToDOM
} from "./mini-react.js";

// Verify a test condition
function assert(condition, message) {
  if (!condition) {
    throw new Error("FAIL: " + message);
  }

  console.log("PASS:", message);
}

// Run all tests
export function runTests() {
  console.log("Mini-React Test Runner");

  // Test 1: Text VNode
  const textVNode = createTextElement("Hello");

  assert(
    textVNode.type === "TEXT_ELEMENT" &&
    textVNode.props.nodeValue === "Hello",
    "createTextElement works"
  );

  // Test 2: Element VNode
  const vnode = createElement(
    "h1",
    { className: "title" },
    "Hello Mini React"
  );

  assert(
    vnode.type === "h1" &&
    vnode.props.children.length === 1,
    "createElement works"
  );

  // Test 3: Numeric children
  const numberVNode = createElement("p", null, 123);

  assert(
    numberVNode.props.children[0].props.nodeValue === "123",
    "Numeric children work"
  );

  // Test 4: XSS protection
  const xssRoot = document.createElement("section");

  renderToDOM(
    createElement(
      "p",
      null,
      "<script>alert('XSS')</script>"
    ),
    xssRoot
  );

  assert(
    xssRoot.querySelector("script") === null &&
    xssRoot.textContent.includes("<script>"),
    "XSS text is rendered safely"
  );

  // Test 5: Semantic HTML
  const semanticRoot = document.createElement("section");

  renderToDOM(
    createElement(
      "main",
      null,
      createElement("article", null, "Content")
    ),
    semanticRoot
  );

  assert(
    semanticRoot.querySelector("main > article") !== null,
    "Semantic HTML works"
  );

  // Test 6: Click event
  let clicked = false;
  const buttonRoot = document.createElement("section");

  renderToDOM(
    createElement(
      "button",
      {
        onClick: () => {
          clicked = true;
        }
      },
      "Test Button"
    ),
    buttonRoot
  );

  buttonRoot.querySelector("button").click();

  assert(clicked, "Click event works");

  // Test 7: Nested children
  const listRoot = document.createElement("section");

  renderToDOM(
    createElement(
      "ul",
      null,
      [
        createElement("li", null, "First"),
        createElement("li", null, "Second")
      ]
    ),
    listRoot
  );

  assert(
    listRoot.querySelectorAll("li").length === 2,
    "Nested VNodes work"
  );

  // Test 8: Unsafe URLs
  const linkRoot = document.createElement("section");

  renderToDOM(
    createElement(
      "a",
      { href: "javascript:alert('XSS')" },
      "Unsafe Link"
    ),
    linkRoot
  );

  assert(
    !linkRoot.querySelector("a").hasAttribute("href"),
    "Unsafe JavaScript URLs are blocked"
  );

  console.log("All 8 tests passed!");
}
