"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import { urbanist400, urbanist700 } from "@/components/styles/styles.fonts";
import "./about.css";
import { sleep } from "@/utils/sleep";

export default function AboutPage() {
  const [clipboardMessage, setClipboardMessage] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("viktor.risinger@gmail.com");
    setClipboardMessage("Copied to clipboard!");
    setTimeout(() => setClipboardMessage(""), 2000);
  };

  return (
    <div className="about-container">
      <div className={`about-content-container ${isLoaded ? "loaded" : ""}`}>
        <AboutContent />
        <ContactContent
          copyEmail={handleCopyEmail}
          clipboardMessage={clipboardMessage}
        />
        <DownloadButton />
      </div>
      <Footer />
    </div>
  );
}

function DownloadButton() {
  return (
    <a
      className={`${urbanist700.className} about-title download-button about-item`}
      href="/cv/viktor-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
    </a>
  );
}

function AboutContent() {
  return (
    <div className="about-content about-item">
      <h1 className={`${urbanist700.className} about-title`}>About</h1>
      <div className={`${urbanist400.className} about-flex-text`}>
        <p>
          Hi! I&apos;m Viktor, a fullstack developer with over 2 years of
          experience building web and mobile applications using React, Next.js,
          and React Native. I specialize in creating intuitive user interfaces
          and seamless user experiences. I&apos;m passionate about the
          intersection of design and development.
        </p>
        <p className="about-text-margin-top">
          Currently, I&apos;m focused on expanding my skills in database design
          and relational modeling.
        </p>
      </div>
    </div>
  );
}

function ContactContent({
  copyEmail,
  clipboardMessage,
}: {
  copyEmail: () => void;
  clipboardMessage: string;
}) {
  return (
    <div className="contact-content about-item">
      <h1 className={`${urbanist700.className} about-title`}>Contact</h1>
      <p className={urbanist400.className}>Click to copy my email:</p>
      <div className="email-container">
        <button
          className={`${urbanist400.className} email-button`}
          onClick={copyEmail}
        >
          viktor.risinger@gmail.com
        </button>
        {clipboardMessage && (
          <span className={`${urbanist700.className} copy-feedback`}>
            {clipboardMessage}
          </span>
        )}
      </div>
    </div>
  );
}
