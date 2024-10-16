import { useEffect, useState } from "react";

const useTheme = () => {
  // Set default theme here
  const [theme, setTheme] = useState("dark");

  // detect system preference
  // Check if user has a saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Add the class to the root html-document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
