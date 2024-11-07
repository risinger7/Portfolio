"use client";
import styles from "./clira.module.css";
import { urbanist400, urbanist700 } from "@/styles/styles.fonts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProjectClira() {
  const router = useRouter();

  const handleGoBack = () => {
    if (router) {
      router.back();
    }
  };

  useEffect(() => {
    if (!router) return;
  }, [router]);

  return (
    <div className={`${styles.grid__container} mt-12`}>
      <button onClick={() => handleGoBack()}>back</button>
      <h1
        className={`${urbanist700.className} ${styles.grid__item} ${styles.title}`}
      >
        Clira
      </h1>
      <p
        className={`${urbanist400.className} ${styles.grid__item} ${styles.content}`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        iaculis risus viverra, vestibulum magna vitae, commodo mauris. Phasellus
        congue purus in congue ultricies. Suspendisse rutrum elementum tellus ut
        ornare. In magna ante, mattis a nulla vel, hendrerit aliquet massa.
        Quisque lorem erat, commodo vitae suscipit et, convallis sit amet eros.
        Sed vitae pulvinar augue. Nam pellentesque magna quis tortor viverra, a
        rhoncus felis accumsan. Fusce ac elementum urna, nec ultricies massa.
        Praesent magna tortor, fermentum id dolor ac, efficitur tristique velit.
        Duis augue nunc, auctor eget suscipit vitae, finibus eget arcu. Etiam
        interdum quis tellus id rutrum. Suspendisse in dapibus nulla, non ornare
        ipsum.
      </p>
      <img
        className={`${styles.grid__item} ${styles.grid__image}`}
        src={"./clira/image61.png"}
        alt={"Image of an inventory"}
        width={500}
        height={500}
      />
    </div>
  );
}
