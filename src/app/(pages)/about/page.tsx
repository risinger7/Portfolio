"use client";
import "./about.css";

export default function About() {
  return (
    <div className=" about-container" style={{ overflow: "hidden" }}>
      <h1 className="about-start">About page</h1>
      <a
        className="download-cv"
        href="/cv/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download CV</button>
      </a>

      <div className="about-flex">
        <div className="about-flex-item">Flexbox</div>
        <div className="about-flex-item">Flexbox</div>
        <div className="about-flex-item">Flexbox</div>
      </div>
    </div>
  );
}

/* "use client";
import Navbar from "@/components/navbar/Navbar";

export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} */
