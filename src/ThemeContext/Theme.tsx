import { createContext, useState } from "react";
const ThemeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
