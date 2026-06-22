"use client"

import { createContext, useContext, useLayoutEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
})

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.classList.toggle("light", theme === "light")
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")

  useLayoutEffect(() => {
    const stored = localStorage.getItem("cdsa-theme") as Theme | null
    const initial = stored === "dark" || stored === "light" ? stored : "light"
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    localStorage.setItem("cdsa-theme", next)
    applyTheme(next)
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
