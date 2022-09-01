import useTheme from "../hooks/useTheme";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme, toggle } = useTheme();

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
