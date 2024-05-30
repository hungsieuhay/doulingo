import { THEME_DARK, THEME_LIGHT } from "@/components/theme/constants";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const useThemeToggle = () => {
  const [hydrated, setHydrated] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === THEME_DARK;

  const toggle = useCallback(() => {
    setTheme(isDark ? THEME_LIGHT : THEME_DARK);
  }, [isDark, setTheme]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return { isDark, toggle, hydrated, theme: resolvedTheme };
};

export default useThemeToggle;
