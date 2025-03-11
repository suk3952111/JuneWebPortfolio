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
    document.documentElement.classList.remove(window.__theme);
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;

    window.__onThemeChange(newTheme);
    document.documentElement.classList.add(newTheme);
  }

  let preferredTheme;

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

  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
}

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;
}
