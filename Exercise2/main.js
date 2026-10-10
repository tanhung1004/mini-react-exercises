
import {
  useState,
  setAppRenderer,
  renderApp,
  registerEvent,
  clearEvents,
  attachRootEvents
} from "./reactive-engine.js";

// Find the root container
const root = document.getElementById("app");

if (!root) {
  throw new Error("Root element #app not found");
}

// Initial task data
const initialTasks = [
  { id: 1, title: "Review PR", completed: false },
  { id: 2, title: "Verify AST", completed: false }
];

let nextTaskId = 3;

// Create a button element
function createButton(label, action, className = "") {
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = label;
  button.dataset.action = action;
  button.className = className;

  return button;
}

// Create a task row
function createTaskItem(task) {
  const item = document.createElement("li");
  item.className = task.completed
    ? "task-item completed"
    : "task-item";

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  const actions = document.createElement("span");
  actions.className = "task-actions";

  const toggleButton = createButton(
    task.completed ? "Undo" : "Complete",
    `toggle-${task.id}`,
    "toggle-button"
  );

  const deleteButton = createButton(
    "Delete",
    `delete-${task.id}`,
    "delete-button"
  );

  actions.append(toggleButton, deleteButton);
  item.append(title, actions);

  return item;
}

// Render the reactive Task Manager
function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("ALL");

  clearEvents();

  // Add a new task
  registerEvent("add-task", () => {
    const input = root.querySelector("#task-input");
    const title = input.value.trim();

    if (!title) {
      input.focus();
      return;
    }

    const newTask = {
      id: nextTaskId++,
      title,
      completed: false
    };

    setTasks((previous) => [...previous, newTask]);
  });

  // Change task filters
  registerEvent("filter-all", () => setFilter("ALL"));
  registerEvent("filter-active", () => setFilter("ACTIVE"));
  registerEvent("filter-completed", () => setFilter("COMPLETED"));

  // Register toggle and delete actions
  tasks.forEach((task) => {
    registerEvent(`toggle-${task.id}`, () => {
      setTasks((previous) =>
        previous.map((item) =>
          item.id === task.id
            ? { ...item, completed: !item.completed }
            : item
        )
      );
    });

    registerEvent(`delete-${task.id}`, () => {
      setTasks((previous) =>
        previous.filter((item) => item.id !== task.id)
      );
    });
  });

  // Filter tasks based on state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "ACTIVE") return !task.completed;
    if (filter === "COMPLETED") return task.completed;
    return true;
  });

  // Build semantic application structure
  const main = document.createElement("main");
  main.className = "task-manager";

  const header = document.createElement("header");
  const heading = document.createElement("h1");
  const subtitle = document.createElement("p");

  heading.textContent = "Reactive Task Manager";
  subtitle.textContent = `Total Tasks: ${tasks.length}`;

  header.append(heading, subtitle);

  // Create task input controls
  const formSection = document.createElement("section");
  formSection.className = "task-form";

  const input = document.createElement("input");
  input.id = "task-input";
  input.type = "text";
  input.placeholder = "Enter a new task...";

  const addButton = createButton(
    "Add Task",
    "add-task",
    "add-button"
  );

  formSection.append(input, addButton);

  // Create filter controls
  const filterSection = document.createElement("nav");
  filterSection.className = "filters";
  filterSection.setAttribute("aria-label", "Task filters");

  const filterButtons = [
    ["All", "filter-all", "ALL"],
    ["Active", "filter-active", "ACTIVE"],
    ["Completed", "filter-completed", "COMPLETED"]
  ];

  filterButtons.forEach(([label, action, value]) => {
    const button = createButton(
      label,
      action,
      filter === value ? "filter-button active" : "filter-button"
    );

    button.setAttribute(
      "aria-pressed",
      String(filter === value)
    );

    filterSection.appendChild(button);
  });

  // Render task list
  const listSection = document.createElement("section");
  listSection.className = "task-list-section";

  const list = document.createElement("ul");
  list.className = "task-list";

  filteredTasks.forEach((task) => {
    list.appendChild(createTaskItem(task));
  });

  if (filteredTasks.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-message";
    empty.textContent = "No tasks found.";
    listSection.appendChild(empty);
  } else {
    listSection.appendChild(list);
  }

  // Build the final application tree
  main.append(
    header,
    formSection,
    filterSection,
    listSection
  );

  // Replace the previous DOM tree
  root.replaceChildren(main);

  console.log("Task Manager rendered:", {
    total: tasks.length,
    filter,
    visible: filteredTasks.length
  });
}

// Attach one listener to the root
attachRootEvents(root);

// Register the application renderer
setAppRenderer(TaskApp);

// Render the application
renderApp();

// Run Exercise 2 verification
import { runCheckpoint2 } from "./checkpoint2-verify.js";

runCheckpoint2();