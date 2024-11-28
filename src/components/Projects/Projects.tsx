"use client";
import Navbar from "../navbar/Navbar";
import styles from "./projects.module.css";
import Link from "next/link";
import { urbanist900, urbanist700 } from "@/components/styles/styles.fonts";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1 className={`${urbanist700.className} ${styles.title}`}>
          Programming
        </h1>

        <div className={styles.grid}>
          <Link href="projects/clira">
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
          </Link>
          <Link href="projects/event">
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
          </Link>

          <Link href="projects/game">
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
          </Link>
          <Link href="projects/toys">
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
          </Link>

          <Link href="projects/firstwebsite">
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
          </Link>
        </div>
        <h1 className={`${urbanist700.className} ${styles.title}`}>
          CAD designs
        </h1>
        <div className={styles.grid}>
          <Link href="projects/phone">
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
          </Link>
          <Link href="projects/remote">
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
          </Link>
        </div>
      </div>
    </>
  );
}
