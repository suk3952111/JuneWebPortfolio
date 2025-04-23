type Theme = "light" | "dark";

declare global {
  interface Window {
    __theme: Theme;
    __onThemeChange: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

function code() {
  window.__onThemeChange = function () {};

  function setTheme(newTheme: Theme) {
    if (window.__theme) {
      document.documentElement.classList.remove(window.__theme);
    }
    window.__theme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    document.documentElement.classList.add(newTheme);
    window.__onThemeChange(newTheme);
  }

  let preferredTheme: Theme | null = null;

  try {
    preferredTheme = localStorage.getItem("theme") as Theme;
  } catch (err) {
    console.log(err);
  }

  window.__setPreferredTheme = function (newTheme: Theme) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {
      console.log(err);
    }
  };

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  // 로컬 스토리지에 테마가 없으면 시스템 설정을 사용
  const initialTheme = preferredTheme || (darkQuery.matches ? "dark" : "light");
  setTheme(initialTheme);
}

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;
}
