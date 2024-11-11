"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "./animations.css";

export default function PageTransition({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();
  const [animation, setAnimation] = useState("page-enter");

  async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleNavigation = async () => {
    // apply the exit animation
    setAnimation(() => "page-exit");
    await sleep(1000);

    // now this component which hold the children has the exit animation and should transition to that.
    router.push(href);
  };

  return (
    <div className={animation} onClick={handleNavigation}>
      {children}
    </div>
  );
}
