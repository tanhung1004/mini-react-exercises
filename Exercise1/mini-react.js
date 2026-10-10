
 // Create a virtual text node
export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: String(text),
      children: []
    }
  };
}

// Create a virtual element
export function createElement(type, props, ...children) {
  const normalizedChildren = children
    .flat(Infinity)
    .filter(
      (child) =>
        child !== null &&
        child !== undefined &&
        typeof child !== "boolean"
    )
    .map((child) =>
      typeof child === "object"
        ? child
        : createTextElement(child)
    );

  return {
    type,
    props: {
      ...(props || {}),
      children: normalizedChildren
    }
  };
}

// Convert VNodes into real DOM elements
export function renderToDOM(vnode, container) {
  if (
    vnode === null ||
    vnode === undefined ||
    typeof vnode === "boolean"
  ) {
    return;
  }

  // Render arrays of VNodes
  if (Array.isArray(vnode)) {
    vnode.forEach((child) => renderToDOM(child, container));
    return;
  }

  // Convert primitive values into text nodes
  if (typeof vnode !== "object") {
    vnode = createTextElement(vnode);
  }

  const { type, props = {} } = vnode;

  // Create a DOM element or text node
  const dom =
    type === "TEXT_ELEMENT"
      ? document.createTextNode(props.nodeValue ?? "")
      : document.createElement(type);

  // Apply attributes and event handlers
  if (type !== "TEXT_ELEMENT") {
    Object.entries(props).forEach(([name, value]) => {
      if (
        name === "children" ||
        value === null ||
        value === undefined
      ) {
        return;
      }

      // Register valid event handlers
      if (/^on[A-Z]/.test(name)) {
        if (typeof value === "function") {
          const eventName = name.slice(2).toLowerCase();
          dom.addEventListener(eventName, value);
        }
        return;
      }

      // Prevent unsafe HTML injection
      if (
        name === "innerHTML" ||
        name === "outerHTML" ||
        name === "dangerouslySetInnerHTML"
      ) {
        return;
      }

      // Prevent inline event attributes
      if (name.toLowerCase().startsWith("on")) {
        return;
      }

      // Prevent unsafe JavaScript URLs
      if (
        ["href", "src", "action", "formaction", "xlink:href"].includes(
          name.toLowerCase()
        ) &&
        /^\s*javascript\s*:/i.test(String(value))
      ) {
        return;
      }

      // Convert className to class
      if (name === "className") {
        dom.setAttribute("class", String(value));
        return;
      }

      // Apply normal attributes
      dom.setAttribute(name, String(value));
    });
  }

  // Render all child VNodes
  const children = props.children || [];

  children.forEach((child) => {
    renderToDOM(child, dom);
  });

  // Mount the DOM node
  container.appendChild(dom);
}
