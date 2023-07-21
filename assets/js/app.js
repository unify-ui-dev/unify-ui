const useDarkMode = () => {
  const toggle_theme = document.querySelector("[data-toggle-dark]");

  window.addEventListener("load", () => {
    if (
      localStorage.getItem("useDarkTheme") === "true" ||
      (!("useDarkTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("useDarkTheme", "true");
      if (toggle_theme) {
        toggle_theme.checked = true;
      }
    }
  });

  if (toggle_theme) {
    toggle_theme.addEventListener("change", (e) => {
      e.preventDefault();
      if (toggle_theme.checked) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("useDarkTheme", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("useDarkTheme", "false");
      }
    });
  }
};

useDarkMode()
