import { useEffect, useState } from "react";
import CurrentTheme from "../helpers/theme";
import useSystemTheme from "./useSystemTheme";

const clist = document.body.classList;

export default function useTheme() {
  const currentSystemTheme = useSystemTheme();
  const currentTheme = CurrentTheme(currentSystemTheme);
  const [theme, setTheme] = useState(currentSystemTheme);
  const isDak = theme === "dark";

  const toggle = () => {
    currentTheme.toggle();
    setTheme(currentTheme.get());
  };

  useEffect(() => {
    theme === "dark" ? clist.add("dark") : clist.remove("dark");
  }, [theme]);

  return {
    theme,
    toggle,
    isDak,
  };
}
