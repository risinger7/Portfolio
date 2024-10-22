import "./styles.hero.css";
import {
  switzer700,
  switzer200,
  urbanist200,
  urbanist400,
  urbanist700,
  urbanist900,
} from "@/styles/styles.fonts";

export function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className={`${urbanist900.className} hero-title`}>Fullstack</h1>
          <h1 className={`${urbanist900.className} hero-title`}>Developer</h1>
          <h1 className={`${urbanist900.className} hero-title addition`}>
            Designer
          </h1>
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
        </div>
        <div className="ball"></div>
      </div>

      {/* move to another comp*/}
      <div className="background-image"></div>
    </div>
  );
}
