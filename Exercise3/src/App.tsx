
import { useEffect, useRef, useState } from "react";
import type { Item, ViewState } from "./state-machine";
import { initialState } from "./state-machine";

// Sample feed data
const sampleItems: Item[] = [
  {
    id: 1,
    title: "Review Pull Request",
    description: "Review code changes before merging."
  },
  {
    id: 2,
    title: "Verify AST",
    description: "Check the abstract syntax tree."
  },
  {
    id: 3,
    title: "Test React Components",
    description: "Verify the application UI."
  }
];

// Simulate successful and failed requests
async function fetchFeed(
  shouldFail = false,
  delay = 1500
): Promise<Item[]> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, delay);
  });

  if (shouldFail) {
    throw new Error("Unable to connect to the server.");
  }

  return sampleItems;
}

// Render the state machine component
export default function App() {
  const [state, setState] =
    useState<ViewState<Item[]>>(initialState);

  // Track the latest request
  const requestIdRef = useRef(0);

  // Invalidate old requests when component unmounts
  useEffect(() => {
    return () => {
      requestIdRef.current++;
    };
  }, []);

  // Load data and ignore outdated responses
  async function loadData(
    shouldFail = false,
    delay = 1500
  ) {
    const requestId = ++requestIdRef.current;

    setState({ status: "LOADING" });

    try {
      const items = await fetchFeed(shouldFail, delay);

      // Ignore outdated responses
      if (requestId !== requestIdRef.current) {
        return;
      }

      setState({
        status: "SUCCESS",
        data: items
      });
    } catch (error) {
      // Ignore errors from outdated requests
      if (requestId !== requestIdRef.current) {
        return;
      }

      setState({
        status: "ERROR",
        error:
          error instanceof Error
            ? error.message
            : "Failed to load data."
      });
    }
  }

  // Test two overlapping requests
  function testRaceCondition() {
    // Old request fails after 3 seconds
    void loadData(true, 3000);

    // New request succeeds after 1 second
    void loadData(false, 1000);
  }

  return (
    <main>
      <h1>Exercise 3 - State Machine</h1>
      <p>React + TypeScript Async Data Loading</p>

      {state.status === "IDLE" && (
        <section>
          <p>Click the button to load data.</p>

          <button onClick={() => void loadData(false)}>
            Load Data
          </button>

          <button onClick={() => void loadData(true)}>
            Simulate Error
          </button>
        </section>
      )}

      {state.status === "LOADING" && (
        <section
          aria-busy="true"
          aria-label="Loading data"
        >
          <h2>Loading Data...</h2>

          <div className="skeleton-list">
            {[1, 2, 3].map((item) => (
              <article
                className="skeleton-card"
                key={item}
              >
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
              </article>
            ))}
          </div>
        </section>
      )}

      {state.status === "SUCCESS" && (
        <section>
          <h2>Data Loaded Successfully</h2>

          <ul>
            {state.data.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>

          <button onClick={() => void loadData(false)}>
            Reload Data
          </button>

          <button onClick={() => void loadData(true)}>
            Simulate Error
          </button>

          <button onClick={testRaceCondition}>
            Test Race Condition
          </button>
        </section>
      )}

      {state.status === "ERROR" && (
        <section role="alert">
          <h2>Connection Error</h2>
          <p>{state.error}</p>

          <button onClick={() => void loadData(false)}>
            Retry Connection
          </button>
        </section>
      )}
    </main>
  );
}
