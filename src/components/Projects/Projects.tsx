"use client";
import Navbar from "../navbar/Navbar";
import styles from "./projects.module.css";
import { urbanist900, urbanist700 } from "@/components/styles/styles.fonts";
import { TransitionLink } from "../navbar/TransitionLink";

export default function Projects() {
  const transition = "project-zoom-in";
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1 className={`${urbanist700.className} ${styles.title}`}>
          Programming
        </h1>
        <div className={styles.grid}>
          <TransitionLink href="projects/hel" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./hel/hel-och-stark1.png"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Hel & Stark
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="projects/clira" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./clira/clira123.jpg"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Clira
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="projects/event" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./event/event1.png"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Event
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="projects/game" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./game/snappyblock1.png"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Snappy-block
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="projects/toys" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./toys/toys2.png"
                alt="event-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                ReJoi
              </div>
            </div>
          </TransitionLink>
          <TransitionLink
            href="projects/firstwebsite"
            pageTransition={transition}
          >
            <div className={styles.item}>
              <img
                src="./karaoke/karaoke1.png"
                alt="karaoke-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Karaoke
              </div>
            </div>
          </TransitionLink>
        </div>
        <h1 className={`${urbanist700.className} ${styles.title}`}>
          CAD designs
        </h1>
        <div className={styles.grid}>
          <TransitionLink href="projects/phone" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./phone/phone-persp.jpg"
                alt="phone-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Phone design
              </div>
            </div>
          </TransitionLink>
          <TransitionLink href="projects/remote" pageTransition={transition}>
            <div className={styles.item}>
              <img
                src="./remote/remote-persp-back.jpg"
                alt="remote-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Remote design
              </div>
            </div>
          </TransitionLink>
        </div>
      </div>
    </>
  );
}
