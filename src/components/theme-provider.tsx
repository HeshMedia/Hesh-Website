import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the context type
type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {}, // Placeholder function
});

// ThemeProvider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>(() => {
    // Get the system preference or fallback to light
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // Update the document class and localStorage whenever theme changes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
