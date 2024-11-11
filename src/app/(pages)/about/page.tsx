"use client";
import { useEffect, useState } from "react";
import "./animation.css";

const About = ({ isExiting }: { isExiting: boolean }) => {
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
