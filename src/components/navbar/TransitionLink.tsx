import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
    body?.classList.add("stop-overflow");
    const removeClassWithDelay = async () => {
      const body = document.querySelector("body");
      await sleep(800);
      if (pageTransition) {
        body?.classList.remove(pageTransition);
      }
      await sleep(4000);
      if (pageTransition) {
        body?.classList.remove("stop-overflow");
      }
    };
    removeClassWithDelay();
  }, []);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleNavigate = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (pathname === href) return;
    const body = document.querySelector("body");

    if (pageTransition) {
      body?.classList.add(pageTransition);
    }
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
