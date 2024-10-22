import { useRef } from "react";
import "./styles.footer.css";

export default function Footer() {
  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    const { current } = divRef;
    if (current) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={divRef} className="footer-container">
      <p onClick={scrollToElement} className="info">
        footer
      </p>
    </div>
  );
}
