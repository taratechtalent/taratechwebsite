"use client";
import { useEffect, useState } from "react";
// import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import PageHead from "./PageHead";

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

  useEffect(() => {
    if (window.innerWidth > 768) {
      const WOW = require("wowjs");
      const wow = new WOW.WOW({
        live: false,
      });
      wow.init();
    }

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);
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
