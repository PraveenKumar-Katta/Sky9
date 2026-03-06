import { useState, useEffect } from "react";

/**
 * useTheme
 * Manages dark / light theme state.
 * Persists preference to localStorage.
 *
 * @returns {{ dark: boolean, toggleTheme: () => void }}
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("sky9-theme");
      return saved ? saved === "dark" : true; // default: dark
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("sky9-theme", dark ? "dark" : "light");
    } catch {
      /* noop */
    }
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return { dark, toggleTheme };
}
