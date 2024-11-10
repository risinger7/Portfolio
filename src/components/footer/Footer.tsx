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
    <div
      onClick={scrollToElement}
      ref={divRef}
      className="footer-container"
    ></div>
  );
}
