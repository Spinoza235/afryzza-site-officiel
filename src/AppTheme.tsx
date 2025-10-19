import { useEffect } from "react";

export default function AppTheme() {
  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    // Vérifie si un thème est déjà enregistré
    if (savedTheme) {
      root.classList.add(savedTheme);
    } else {
      // Sinon, adapte selon le thème système
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    }

    // Observe les changements de thème système
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      root.classList.remove("dark", "light");
      root.classList.add(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return null;
}
