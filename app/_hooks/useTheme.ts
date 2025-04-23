"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  // 컴포넌트 마운트 시 window.__theme를 읽어 초기화
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(window.__theme);
    }
  }, []);

  // 테마 변경 감지
  useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      setTheme(newTheme);
    };
    window.__onThemeChange = handleThemeChange;
    return () => {
      window.__onThemeChange = () => {};
    };
  }, []);

  // 테마 전환 함수
  const toggleTheme = () => {
    window.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};
