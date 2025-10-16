"use client";
import { useEffect, useState } from "react";
import "./styles.hero.css";
import { urbanist400, urbanist700, urbanist900 } from "../styles/styles.fonts";
import { TransitionLink } from "../navbar/TransitionLink";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Adjust zoom based on scroll
  const zoomFactor = 1 + scrollY / 400;

  return (
    <div>
      <div className="hero-container">
        <div className="background-image-container">
          <img
            className="background-image"
            src="/phone/phone-zoom.jpg"
            alt="Hero Background"
            style={{ transform: `scale(${zoomFactor})` }}
          />
        </div>
        <div className="hero-content ">
          <div className="titles">
            <h1
              className={`${urbanist900.className} hero-title`}
              data-shadow="Fullstack"
            >
              Fullstack
            </h1>
            <h1
              className={`${urbanist900.className} hero-title`}
              data-shadow="Developer"
            >
              Developer
            </h1>
          </div>
          <div className="text-container">
            <p className={`${urbanist400.className} hero-text `}>
              Hi, I&#39;m Viktor!
            </p>
            <p className={`${urbanist400.className} hero-text `}>
              A fullstack developer who loves the blend of design and code. I
              build functional, user-centered web experiences and enjoy
              exploring new technologies.
            </p>
          </div>
          <TransitionLink href="about" pageTransition="about-transition">
            <button className={`${urbanist700.className} hero-button`}>
              Contact me
            </button>
          </TransitionLink>
        </div>
      </div>
      <div className="background-image"></div>
    </div>
  );
}
