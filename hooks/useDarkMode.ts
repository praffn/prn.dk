import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

export function usePrefersDarkMode() {
  return useMedia("(prefers-color-scheme: dark)");
}

export type DarkModeState = "dark" | "light" | "system";

export default function useDarkMode() {
  const [darkModeState, setDarkModeState] = useLocalStorage<DarkModeState>(
    "prn.dk/darkmodestate:1",
    "system"
  );

  const prefersDarkMode = usePrefersDarkMode();

  const isSystemMode = darkModeState === "system";

  const darkModeEnabled = isSystemMode
    ? prefersDarkMode
    : darkModeState === "dark";

  const enableDarkMode = useCallback(() => {
    setDarkModeState("dark");
  }, []);

  const enableLightMode = useCallback(() => {
    setDarkModeState("light");
  }, []);

  const enableSystemMode = useCallback(() => {
    setDarkModeState("system");
  }, []);

  return {
    darkModeEnabled,
    enableDarkMode,
    enableLightMode,
    enableSystemMode,
    darkModeState,
    isSystemMode,
    setDarkModeState,
  };
}
