"use client";
import { useEffect, useState } from "react";
import "./styles.hero.css";
import { urbanist400, urbanist700, urbanist900 } from "../styles/styles.fonts";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [nextSectionVisable, setNextSectionVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check when to reveal the next section (ex. after scrolling 80vh)
    if (window.scrollY > window.innerHeight * 0.8) {
      setNextSectionVisible(true);
    } else {
      setNextSectionVisible(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Adjust zoom based on scroll
  const zoomFactor = 1 + scrollY / 600;

  function handleClickContact() {
    router.push("/about?message=contact");
  }

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
            <h1 className={`${urbanist900.className} hero-title`}>Fullstack</h1>
            <h1 className={`${urbanist900.className} hero-title`}>Developer</h1>
          </div>
          <div className="text-container">
            <p className={`hero-text ${urbanist400.className}`}>
              Hi, I'm Viktor
            </p>
            <p className={`hero-text ${urbanist400.className}`}>
              A junior fullstack developer with a passion for design and code. I
              love creating beautiful and functional web experiences while
              continuously learning and exploring new technologies.
            </p>
          </div>
          <button
            onClick={() => handleClickContact()}
            className={`${urbanist700.className} hero-contact-button`}
          >
            Contant me
          </button>
        </div>

        <div className="ball"></div>
      </div>

      {/* move to another comp*/}
      <div className="background-image"></div>
    </div>
  );
}
