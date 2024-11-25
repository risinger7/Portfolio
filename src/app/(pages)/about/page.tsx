"use client";
import { Suspense, useEffect, useState } from "react";
import "./about.css";
import { urbanist700, urbanist400 } from "@/components/styles/styles.fonts";
import { useSearchParams } from "next/navigation";
import { Github, Linkedin } from "lucide-react";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutComponent />
    </Suspense>
  );
}

function AboutComponent() {
  const [current, setCurrent] = useState<string | null>("aboutinfo");
  const [confirmDownload, setConfirmDownload] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  useEffect(() => {
    if (message) {
      setCurrent(message);
    }
  }, []);

  const handleShow = (feature: string) => {
    setCurrent(() => null);
    setTimeout(() => setCurrent(feature), 100);
  };

  return (
    <div className="about-container">
      <div className={`about-content-container ${current}`}>
        <div className="about-content">
          {current === "aboutinfo" && <AboutInfo />}
          {current === "contactinfo" && <ContactInfo />}
        </div>
      </div>
      <div className="about-flex-buttons">
        <button
          className={`${
            current === "aboutinfo"
              ? `${urbanist700.className} about-flex-current`
              : urbanist400.className
          } about-flex-button`}
          onClick={() => handleShow("aboutinfo")}
        >
          About
        </button>
        <button
          className={`${
            current === "contactinfo"
              ? `${urbanist700.className} about-flex-current`
              : urbanist400.className
          } about-flex-button`}
          onClick={() => handleShow("contactinfo")}
        >
          Contact
        </button>
        <button
          className={`${
            current === "downloadinfo"
              ? `${urbanist700.className} about-flex-current`
              : urbanist400.className
          } ${
            confirmDownload
              ? `${urbanist700.className} button-confirm-download`
              : ""
          } about-flex-button`}
          onClick={() => setConfirmDownload((prev) => !prev)}
        >
          {confirmDownload ? (
            <a
              className={` download-link`}
              href="/cv/Viktor-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confirm download
            </a>
          ) : (
            <p>Download CV</p>
          )}
        </button>
      </div>
      <Footer />
    </div>
  );
}

function AboutInfo() {
  return (
    <div className="aboutinfo">
      <h1 className={`${urbanist700.className} about-header`}>About</h1>
      <p className={urbanist400.className}>
        My name is Viktor and welcome to my portfolio. I am a junior fullstack
        developer who is curious and eager to learn. This portfolio was created
        using React with Next js.
      </p>
      <p className={urbanist400.className}>
        Click the buttons down below in order to contact me or download my
        resume.
      </p>
    </div>
  );
}

function ContactInfo() {
  function copyToClipboard() {
    navigator.clipboard.writeText("viktor.risinger@gmail.com");
    alert("Copied " + "viktor.risinger@gmail.com" + " to the clipboard.");
  }
  return (
    <div className="contactinfo">
      <h1 className={`${urbanist700.className} about-header`}>Contact</h1>
      <p className={urbanist400.className}>Click to copy to clipboard.</p>
      <p className={urbanist400.className}>Reach me via email at:</p>
      <p className={urbanist700.className}>
        <button
          id="emailButton"
          className="email-button"
          onClick={copyToClipboard}
        >
          viktor.risinger@gmail.com
        </button>
      </p>
    </div>
  );
}
