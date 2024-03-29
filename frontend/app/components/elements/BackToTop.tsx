"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
export default function BackToTop() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY < 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };
  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  });

  return (
    <>
      {hasScrolled && (
        <Link
          className="scroll__top scroll-to-target open"
          href="#top"
          style={{ position: "fixed", zIndex: 2147483647 }}
        >
          <i className="fas fa-angle-up"></i>
        </Link>
      )}
    </>
  );
}
