"use client";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import "./styles.navbar.css";
import { bai400 } from "../styles/styles.fonts";
import { useEffect, useState } from "react";
import { TransitionLink } from "./TransitionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isScreenLarge, setIsScreenLarge] = useState<boolean>(true);
  const pathname = usePathname();

  // media query closing burger automaticaly
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 600px)");
    // Function to update state when the screen size changes
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsBurgerOpen(false);
      }
      setIsScreenLarge(e.matches);
    };
    // Set the initial value
    setIsScreenLarge(mediaQuery.matches);
    // Ensure burger is closed on initial load if screen is large
    setIsBurgerOpen(false);
    if (mediaQuery.matches) {
    }
    // Listen for changes to the screen size
    mediaQuery.addEventListener("change", handleResize);
    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      {isScreenLarge && (
        <ul className={`${bai400.className} navbar`}>
          <div
            className={`${pathname === "/" ? "current-item" : "navbar-item"}`}
          >
            <TransitionLink pageTransition="home-transition" href="/">
              Home
            </TransitionLink>
          </div>
          <div
            className={`${
              pathname === "/projects" ? "current-item" : "navbar-item"
            }`}
          >
            <TransitionLink
              pageTransition="projects-transition"
              href="/projects"
            >
              Projects
            </TransitionLink>
          </div>
          <div
            className={`${
              pathname === "/about" ? "current-item" : "navbar-item"
            }`}
          >
            <TransitionLink pageTransition="about-transition" href="/about">
              About
            </TransitionLink>
          </div>

          <div className="navbar-item">
            <ThemeSwitch />
          </div>
        </ul>
      )}

      {/* PHONE */}
      {!isScreenLarge && (
        <ul
          className={`${bai400.className} navbar ${
            isBurgerOpen ? "visble" : "hidden"
          }`}
        >
          <div
            className={`${pathname === "/" ? "current-item" : "navbar-item"}`}
          >
            <TransitionLink pageTransition="home-transition" href="/">
              Home
            </TransitionLink>
          </div>
          <div
            className={`${
              pathname === "/projects" ? "current-item" : "navbar-item"
            }`}
          >
            <TransitionLink
              pageTransition="projects-transition"
              href="/projects"
            >
              Projects
            </TransitionLink>
          </div>
          <div
            className={`${
              pathname === "/about" ? "current-item" : "navbar-item"
            }`}
          >
            <TransitionLink pageTransition="about-transition" href="/about">
              About
            </TransitionLink>
          </div>

          <div className="navbar-item">
            <ThemeSwitch />
          </div>
        </ul>
      )}

      <div className="burger" onClick={() => setIsBurgerOpen((prev) => !prev)}>
        <div className={`line ${isBurgerOpen ? "open" : ""}`}></div>
        <div className={`line ${isBurgerOpen ? "open" : ""}`}></div>
        <div className={`line ${isBurgerOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
}
