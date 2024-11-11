"use client";
import PageTransitionLink from "@/components/styles/PageTransition";
import PageTransition from "@/components/styles/PageTransition";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./animation.css";

const About = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`page-enter-start ${
        isVisible ? "page-enter-show" : "page-enter-start"
      }`}
    >
      <h1>About page here</h1>
      <p>
        This portfolio is created using Next.js which is a React framework,
        React in turn is a Javascript library.
      </p>
    </div>
  );
};

export default About;
