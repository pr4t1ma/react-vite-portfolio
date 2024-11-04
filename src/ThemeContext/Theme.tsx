import { createContext, FC, useState } from "react";
const ThemeContext = createContext(undefined);

type ThemeProviderProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
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
