import { createContext } from "react";

// context can contain any value; in the examle below, it contains a hook
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
