"use client";
import { useEffect, useRef } from "react";
import "./styles.home-projects.css";
import { urbanist700, urbanist900, switzer400 } from "../styles/styles.fonts";
import { TransitionLink } from "../navbar/TransitionLink";
import { projectData } from "@/app/(pages)/projects/[projectId]/projectData";

const featured: { id: string; accent: string }[] = [
    { id: "knowtes", accent: "#0f8" },
    { id: "hel", accent: "#4FAEF7" },
    { id: "clira", accent: "#BE30FE" },
    { id: "game", accent: "#fbbf24" },
];

export default function HomeProjects() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("card-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 },
        );
        cardsRef.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="home-projects" className="hp-section">
            <a href="#home-projects" className="hp-connector">
                <span className={`${switzer400.className} hp-connector-label`}>
                    Scroll
                </span>
                <div className="hp-connector-line" />
            </a>

            <div className="hp-header">
                <span className={`${switzer400.className} hp-label`}>
                    Selected work
                </span>
                <h2 className={`${urbanist900.className} hp-heading`}>
                    Projects
                </h2>
            </div>

            <div className="hp-list">
                {featured.map(({ id, accent }, i) => {
                    const project = projectData[id];
                    const isReversed = i % 2 === 1;
                    const shortDesc =
                        project.content
                            .replace(/\s+/g, " ")
                            .trim()
                            .slice(0, 155)
                            .trimEnd() + "…";

                    return (
                        <div
                            key={id}
                            ref={(el) => {
                                cardsRef.current[i] = el;
                            }}
                            className={`hp-card ${isReversed ? "hp-card--reverse" : ""}`}
                            style={
                                { "--accent": accent } as React.CSSProperties
                            }
                        >
                            {/* Image */}
                            <div className="hp-image-outer">
                                <div className="hp-image-wrap">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="hp-image"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="hp-text">
                                <span
                                    className={`${switzer400.className} hp-number`}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3
                                    className={`${urbanist900.className} hp-project-title`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`${switzer400.className} hp-desc`}
                                >
                                    {shortDesc}
                                </p>
                                <div className="hp-stack">
                                    {project.icons?.map((icon) => (
                                        <span
                                            key={icon}
                                            className={`${switzer400.className} hp-chip`}
                                        >
                                            {icon}
                                        </span>
                                    ))}
                                </div>
                                <TransitionLink
                                    href={`projects/${id}`}
                                    pageTransition="project-zoom-in"
                                >
                                    <button
                                        className={`${urbanist700.className} hp-cta`}
                                    >
                                        View project
                                        <span className="hp-arrow">→</span>
                                    </button>
                                </TransitionLink>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="hp-footer">
                <TransitionLink
                    href="projects"
                    pageTransition="projects-transition"
                >
                    <button className={`${urbanist700.className} hp-view-all`}>
                        View all projects
                        <svg className="hp-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                    </button>
                </TransitionLink>
            </div>
        </section>
    );
}
