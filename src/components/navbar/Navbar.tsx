"use client";
import Link from "next/link";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import "./styles.navbar.css";
import { bai400 } from "../styles/styles.fonts";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  // close on widowsize.. figure out
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isScreenLarge, setIsScreenLarge] = useState<boolean>(false);

  const router = useRouter();
  // media query closing burger
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

  const handleRouteClick = () => {
    console.log("route", router);
  };

  return (
    <div className="navbar-container">
      {isScreenLarge && (
        <ul className={`${bai400.className} navbar`}>
          <a className="navbar-item" href="/">
            Home
          </a>
          <Link className="navbar-item" href="/projects">
            Projects
          </Link>

          <Link href="/about">About</Link>

          <div className="navbar-item">
            <ThemeSwitch />
          </div>
        </ul>
      )}

      {!isScreenLarge && (
        <ul
          className={`${bai400.className} navbar ${
            isBurgerOpen ? "visble" : "hidden"
          }`}
        >
          <Link className="navbar-item" href="/">
            Home
          </Link>
          <Link className="navbar-item" href="/projects">
            Projects
          </Link>
          <Link href="/about">About</Link>
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
