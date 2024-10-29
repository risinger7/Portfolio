import Image from "next/image";
/* import cliraLogo from "../../../public/clira/Clira-Logo.svg"; */
import Navbar from "../navbar/Navbar";
import styles from "./projects.module.css";
import Link from "next/link";

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
            </div>
          </Link>
          <div className={styles.item}>
            {" "}
            <img
              src="./clira/image61.png"
              alt="clira-image"
              className={styles.project__image}
            ></img>
          </div>
          <div className={styles.item}>
            {" "}
            <img
              src="./clira/image61.png"
              alt="clira-image"
              className={styles.project__image}
            ></img>
          </div>
          <div className={styles.item}>
            {" "}
            <img
              src="./clira/image61.png"
              alt="clira-image"
              className={styles.project__image}
            ></img>
          </div>
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
