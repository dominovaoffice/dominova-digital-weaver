import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const THEMES = ["gold", "cyber", "neon-pink", "mint", "ember", "electric", "violet"] as const;
export type Theme = (typeof THEMES)[number];

const THEME_LABELS: Record<Theme, string> = {
  gold: "Gold",
  cyber: "Cyber",
  "neon-pink": "Neon Pink",
  mint: "Mint",
  ember: "Ember",
  electric: "Electric",
  violet: "Violet",
};

interface ThemeContextType {
  theme: Theme;
  cycleTheme: () => void;
  themeLabel: string;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "gold",
  cycleTheme: () => {},
  themeLabel: "Gold",
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("dominova-theme");
    return THEMES.includes(saved as Theme) ? (saved as Theme) : "gold";
  });

  useEffect(() => {
    localStorage.setItem("dominova-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const cycleTheme = () =>
    setTheme((t) => {
      const idx = THEMES.indexOf(t);
      return THEMES[(idx + 1) % THEMES.length];
    });

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme, themeLabel: THEME_LABELS[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
