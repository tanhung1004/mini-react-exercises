
export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: String(text),
      children: []
    }
  };
}

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
