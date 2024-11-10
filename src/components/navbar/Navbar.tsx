"use client";
import Link from "next/link";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import "./styles.navbar.css";
import { bai400 } from "../styles/styles.fonts";
import { useEffect, useState } from "react";
export default function Navbar() {
  // close on widowsize.. figure out
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isScreenLarge, setIsScreenLarge] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 600px)");
    // Function to update state when the screen size changes
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsBurgerOpen(false);
      }
      setIsScreenLarge(e.matches); // true if screen is over 600px, false otherwise
    };
    // Set the initial value
    setIsScreenLarge(mediaQuery.matches);
    // Ensure burger is closed on initial load if screen is large
    setIsBurgerOpen(false);
    if (mediaQuery.matches) {
    }
    // Listen for changes to the screen size
    mediaQuery.addEventListener("change", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      {isScreenLarge && (
        <ul className={`${bai400.className} navbar`}>
          <Link href="/">Home</Link>
          <Link href="/main">Main</Link>
          <Link href="/design">Design</Link>
          <Link href="/projects">Projects</Link>
          <ThemeSwitch />
        </ul>
      )}

      {!isScreenLarge && (
        <ul
          className={`${bai400.className} navbar ${
            isBurgerOpen ? "visble" : "hidden"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/main">Main</Link>
          <Link href="/design">Design</Link>
          <Link href="/projects">Projects</Link>
          <ThemeSwitch />
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
