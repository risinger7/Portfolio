"use client";
import { useState } from "react";
import "./about.css";
import { urbanist700, urbanist400 } from "@/components/styles/styles.fonts";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  const [current, setCurrent] = useState("about");

  const handleShow = (feature: string) => {
    setCurrent(feature);
  };

  return (
    <div className="about-container">
      <div className={`about-content-container ${current}`}>
        <div className="about-content">
          {current === "about" && <AboutInfo />}
          {current === "contact" && <ContactInfo />}
          {current === "download" && <DownloadInfo current={current} />}
        </div>
      </div>

      <div className={` about-flex`}>
        <button
          className={`${
            current === "about" ? urbanist700.className : urbanist400.className
          } about-flex-item`}
          onClick={() => handleShow("about")}
        >
          About
        </button>
        <button
          className={`${
            current === "contact"
              ? urbanist700.className
              : urbanist400.className
          } about-flex-item`}
          onClick={() => handleShow("contact")}
        >
          Contact
        </button>
        <button
          className={`${
            current === "download"
              ? urbanist700.className
              : urbanist400.className
          } about-flex-item`}
          onClick={() => handleShow("download")}
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

/* When extra time, refactor these 3 into one component */
function AboutInfo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className={`${urbanist700.className} about-header`}>About</h1>
      <p className={urbanist400.className}>
        My name is Viktor and welcome to my portfolio. It was created using
        React with the Next.js framework. I choose to keep the project minimal
        without animation- and css-libraries which was a great exercise,
        especially the transitions and smaller animations.
      </p>
      <p className={urbanist400.className}>
        Click the buttons down below in order to contact me or download my
        resume.
      </p>
    </motion.div>
  );
}

function ContactInfo() {
  function copyToClipboard() {
    navigator.clipboard.writeText("viktor.risinger@gmail.com");
    alert("Copied " + "viktor.risinger@gmail.com" + " to the clipboard.");
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className={`${urbanist700.className} about-header`}>Contact</h1>
      <p className={urbanist400.className}>Click to copy to clipboard.</p>
      <p className={urbanist400.className}>Reach me via email at:</p>
      <p className={urbanist700.className}>
        <button id="emailButton" onClick={copyToClipboard}>
          viktor.risinger@gmail.com
        </button>
      </p>
    </motion.div>
  );
}

function DownloadInfo({ current }: { current: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="download-cv">
        <h1 className={`${urbanist700.className} about-header`}>Download</h1>
        <a href="/cv/CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className={`${urbanist700.className} download-here`}>
            Download here
          </button>
        </a>
      </div>
    </motion.div>
  );
}
