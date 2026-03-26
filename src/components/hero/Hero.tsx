"use client";
import { useEffect, useState, useRef } from "react";
import "./styles.hero.css";
import { urbanist700, urbanist900, switzer400 } from "../styles/styles.fonts";
import { TransitionLink } from "../navbar/TransitionLink";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const el = wrapperRef.current;
            if (!el) return;
            const { width, height, left, top } = el.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 2;
            const y = ((e.clientY - top) / height - 0.5) * 2;
            el.style.setProperty("--mouse-x", String(x));
            el.style.setProperty("--mouse-y", String(y));
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={wrapperRef} className="hero-wrapper">
            <div className="glow-track glow-track-1">
                <div className="hero-glow hero-glow-1" />
            </div>
            <div className="glow-track glow-track-2">
                <div className="hero-glow hero-glow-2" />
            </div>
            <div className="glow-track glow-track-3">
                <div className="hero-glow hero-glow-3" />
            </div>

            <div className="hero-container">
                <div className={`hero-content ${isLoaded ? "content-visible" : ""}`}>

                    <div className={`${switzer400.className} hero-badge`}>
                        <span className="badge-dot" />
                        Open to work
                    </div>

                    <div className="titles">
                        <h1 className={`${urbanist900.className} hero-title`}>
                            Fullstack
                        </h1>
                        <h1 className={`${urbanist900.className} hero-title title-accent`}>
                            Developer
                        </h1>
                    </div>

                    <p className={`${switzer400.className} hero-subtitle`}>
                        Design-driven engineer crafting fast,<br />
                        user-centered web experiences.
                    </p>

                    <div className="hero-ctas">
                        <TransitionLink href="about" pageTransition="about-transition">
                            <button className={`${urbanist700.className} hero-btn-primary`}>
                                Get in touch
                                <span className="btn-arrow">↗</span>
                            </button>
                        </TransitionLink>
                        <TransitionLink href="projects" pageTransition="projects-transition">
                            <button className={`${urbanist700.className} hero-btn-ghost`}>
                                View my work
                            </button>
                        </TransitionLink>
                    </div>
                </div>
            </div>

            <div className={`scroll-hint ${isLoaded ? "scroll-visible" : ""}`}>
                <span className={`${switzer400.className} scroll-label`}>Scroll</span>
                <div className="scroll-line" />
            </div>
        </div>
    );
}
