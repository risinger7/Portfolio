import Image from "next/image";
/* import cliraLogo from "../../../public/clira/Clira-Logo.svg"; */
import Navbar from "../navbar/Navbar";
import styles from "./projects.module.css";
import Link from "next/link";
import {
  urbanist200,
  urbanist400,
  urbanist700,
  urbanist900,
  bai400,
  bai700,
} from "@/components/styles/styles.fonts";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="projects/clira">
            <div className={styles.item}>
              <img
                src="./clira/image61.png"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Clira
              </div>
            </div>
          </Link>
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
          <Link href="projects/clira">
            <div className={styles.item}>
              <img
                src="./clira/image61.png"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Clira
              </div>
            </div>
          </Link>
          <Link href="projects/clira">
            <div className={styles.item}>
              <img
                src="./clira/image61.png"
                alt="clira-image"
                className={styles.project__image}
              ></img>
              <div className={`${styles.overlayText} ${urbanist900.className}`}>
                Clira
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

{
  /* <Image
              src={cliraLogo}
              alt="Clira Logo"
              width={100} // Specify desired width
              height={100} // Specify desired height
              priority // If this is above the fold
            /> */
}
