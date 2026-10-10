
// Define four valid application states
export type ViewState<T> =
  | { status: "IDLE" }
  | { status: "LOADING" }
  | { status: "SUCCESS"; data: T }
  | { status: "ERROR"; error: string };

// Define the feed item structure
export type Item = {
  id: number;
  title: string;
  description: string;
};

// Create the initial state
export const initialState: ViewState<Item[]> = {
  status: "IDLE"
};
