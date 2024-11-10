"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "./themeSwitch.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div></div>;

  if (resolvedTheme === "dark") {
    return <FiSun className="icon" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <FiMoon className="icon" onClick={() => setTheme("dark")} />;
  }
}
