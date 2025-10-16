"use client";
import Navbar from "../navbar/Navbar";
import styles from "./projects.module.css";
import { urbanist900, urbanist700 } from "@/components/styles/styles.fonts";
import { TransitionLink } from "../navbar/TransitionLink";
import { useEffect, useRef } from "react";

const programmingProjects = [
  {
    href: "projects/hel",
    image: "./hel/hel-och-stark1.png",
    alt: "hel-image",
    title: "Hel & Stark",
  },
  {
    href: "projects/clira",
    image: "./clira/clira123.jpg",
    alt: "clira-image",
    title: "Clira",
  },
  {
    href: "projects/event",
    image: "./event/event1.png",
    alt: "event-image",
    title: "Event",
  },
  {
    href: "projects/game",
    image: "./game/snappyblock1.png",
    alt: "game-image",
    title: "Snappy-block",
  },
  {
    href: "projects/toys",
    image: "./toys/toys2.png",
    alt: "toys-image",
    title: "ReJoi",
  },
  {
    href: "projects/firstwebsite",
    image: "./karaoke/karaoke1.png",
    alt: "karaoke-image",
    title: "Karaoke",
  },
];

const cadProjects = [
  {
    href: "projects/phone",
    image: "./phone/phone-persp.jpg",
    alt: "phone-image",
    title: "Phone design",
  },
  {
    href: "projects/remote",
    image: "./remote/remote-persp-back.jpg",
    alt: "remote-image",
    title: "Remote design",
  },
];

export default function Projects() {
  const transition = "project-zoom-in";
  const cadTitleRef = useRef<HTMLHeadingElement>(null);
  const programmingGridRef = useRef<HTMLDivElement>(null);
  const cadGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const grid = entry.target as HTMLElement;
            const items = grid.querySelectorAll(`.${styles.item}`);

            items.forEach((item, i) => {
              (item as HTMLElement).style.animationDelay = `${i * 0.2}s`;
              item.classList.add(styles.fadeInUp);
            });

            observer.unobserve(grid);
          }
        });
      },
      { threshold: 0.1 }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (programmingGridRef.current)
      observer.observe(programmingGridRef.current);
    if (cadGridRef.current) observer.observe(cadGridRef.current);
    if (cadTitleRef.current) titleObserver.observe(cadTitleRef.current);

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={`${urbanist700.className} ${styles.title}`}>
          Programming
        </h1>
        <div ref={programmingGridRef} className={styles.grid}>
          {programmingProjects.map((project) => (
            <TransitionLink
              key={project.href}
              href={project.href}
              pageTransition={transition}
            >
              <div className={styles.item}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.project__image}
                />
                <div
                  className={`${styles.overlayText} ${urbanist900.className}`}
                >
                  {project.title}
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>

        <h1
          ref={cadTitleRef}
          className={`${urbanist700.className} ${styles.cadTitle}`}
        >
          CAD designs
        </h1>
        <div ref={cadGridRef} className={styles.grid}>
          {cadProjects.map((project) => (
            <TransitionLink
              key={project.href}
              href={project.href}
              pageTransition={transition}
            >
              <div className={styles.item}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.project__image}
                />
                <div
                  className={`${styles.overlayText} ${urbanist900.className}`}
                >
                  {project.title}
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </>
  );
}
