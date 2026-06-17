"use client";

import { createContext, useContext, useState } from "react";

type ThemeType = "amber" | "blue";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  accent: string;
  border: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("amber");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "amber" ? "blue" : "amber"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        accent: theme === "blue" ? "text-blue-400" : "text-amber-400",
        border: theme === "blue" ? "border-blue-400" : "border-amber-400",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
