import { useRef } from "react";
import "./styles.footer.css";
import { Github, Linkedin } from "lucide-react";
import { urbanist400 } from "../styles/styles.fonts";
export default function Footer() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const scrollToElement = () => {
    const { current } = divRef;
    if (current) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onClick={scrollToElement} ref={divRef} className="footer-container">
      <div className="footer-icons">
        <a
          href="https://github.com/risinger7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <Github size={28} />
            <p className={`${urbanist400.className}`}>Github</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/viktor-risinger-a8a5b9233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <Linkedin size={28} />
            <p className={`${urbanist400.className}`}>Linkedin</p>
          </div>
        </a>
      </div>
    </div>
  );
}
