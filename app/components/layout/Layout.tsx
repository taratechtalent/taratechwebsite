"use client";
import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";

import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ breadcrumbTitle, children, headerCls }: any) {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("wsactive")
      : document.body.classList.remove("wsactive");
  };
  return (
    <>
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
