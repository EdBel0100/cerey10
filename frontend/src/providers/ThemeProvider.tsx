import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemePreference = "light" | "dark" | "system";

type ThemeContextType = {
  themePreference: ThemePreference;
  setThemePreference: (preference: ThemePreference) => void;
};

const THEME_STORAGE_KEY = "themePreference";

const ThemeContext = createContext<ThemeContextType>({
  themePreference: "system",
  setThemePreference: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>("system");

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((stored) => {
      if (stored === "light" || stored === "dark" || stored === "system") {
        setThemePreferenceState(stored);
      }
    });
  }, []);

  const setThemePreference = (preference: ThemePreference) => {
    setThemePreferenceState(preference);
    AsyncStorage.setItem(THEME_STORAGE_KEY, preference);
  };

  return (
    <ThemeContext.Provider value={{ themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
