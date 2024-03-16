"use client";
import { useEffect, useState } from "react";
// import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import PageHead from "./PageHead";
const WOW = require("wowjs");

declare global {
  interface Window {
    wow: any; // Use appropriate type instead of any if possible
  }
}

export default function Layout({ breadcrumbTitle, children, headerCls }: any) {
  const [scroll, setScroll] = useState(false);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("wsactive")
      : document.body.classList.remove("wsactive");
  };

  const fn = () => {
    if (typeof window !== undefined) {
      // (window as any).wow = new WOW.WOW({
      //   live: false,
      // });

      // (window as any).wow.init();
      const scrollCheck = window.scrollY > 100;
      setScroll(scrollCheck);
    }
  };
  useEffect(() => {
    // Use type assertion to let TypeScript know that 'wow' exists on the window object
    if (typeof window !== undefined) {
      document.addEventListener("scroll", fn);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768); // Adjust the threshold as per your design
      if (screenWidth > 768) {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
      }
    };

    // Check initially
    checkIfMobile();

    // Handle scroll events
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    handleScroll(); // Check scroll position initially

    // Attach scroll event listener
    document.addEventListener("scroll", handleScroll);

    // Listen for resize events to update isMobile state
    window.addEventListener("resize", checkIfMobile);
  }, [scroll, isMobile]);

  return (
    <section>
      <PageHead headTitle={""} />

      <div id="page" className="page font--jakarta">
        <Header
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          headerCls={headerCls}
        />

        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

          {children}
        </main>
        <Footer />

        <BackToTop />
      </div>
    </section>
  );
}
