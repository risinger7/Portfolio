import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { sleep } from "@/utils/sleep";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  pageTransition: string | undefined;
}

export const TransitionLink = ({
  children,
  href,
  pageTransition,
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;

    body.classList.remove(
      "home-transition",
      "about-transition",
      "projects-transition",
      "project-zoom-in",
      "project-zoom-out",
      "stop-overflow"
    );
  }, []);

  const handleNavigate = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (pathname === href) return;
    const body = document.querySelector("body");

    if (!body) {
      // Fallback
      router.push(href);
      return;
    }

    // This class prevents scollbars from showing during the animation
    body.classList.add("stop-overflow");

    // Add animation class to the body
    if (pageTransition) {
      body.classList.add(pageTransition);
    }

    // wait before push to let the animation do its thing
    await sleep(800);
    router.push(href);
  };

  return (
    <Link
      onClick={(e) => {
        handleNavigate(e);
      }}
      href={href}
    >
      {children}
    </Link>
  );
};
