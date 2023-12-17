"use client";
import { useEffect, useState } from "react";
// import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import PageHead from "./PageHead";
const WOW = require("wowjs");

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

  useEffect(() => {
    // Use type assertion to let TypeScript know that 'wow' exists on the window object
    (window as any).wow = new WOW.WOW({
      live: false,
    });

    (window as any).wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      setScroll(scrollCheck);
    });
  }, []);
  return (
    <>
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
    </>
  );
}
