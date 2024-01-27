"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  headerCls,
}: {
  scroll: any;
  isMobileMenu: any;
  handleMobileMenu: any;
  headerCls: any;
}) {
  return (
    <>
      <header
        id="header"
        className={`tra-menu white-scroll ${headerCls ? headerCls : ""}`}
      >
        <div className="header-wrapper">
          {/* MOBILE HEADER */}
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <img src="/images/logo-pink.png" alt="mobile-logo" />
            </span>

            <a
              id="wsnavtoggle"
              className="wsanimated-arrow"
              onClick={handleMobileMenu}
            >
              <span />
            </a>
          </div>
          {/* NAVIGATION MENU */}
          <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
            <div className="wsmainwp clearfix">
              {/* HEADER BLACK LOGO */}
              <div className="desktoplogo">
                <Link href="/" className="logo-black">
                  <img
                    className="light-theme-img"
                    src="/images/logo/logo5-removebg-preview.png"
                    alt="logo"
                  />
                </Link>
              </div>
              {/* HEADER WHITE LOGO */}
              <div className="desktoplogo">
                <Link href="/" className="logo-white">
                  <img src="/images/logo/logo5-removebg-preview.png" alt="logo" />
                </Link>
              </div>
              {/* MAIN MENU */}
              <nav
                className="wsmenu clearfix"
                style={{ height: `${isMobileMenu ? "100vh" : ""}` }}
              >
                {isMobileMenu ? <MobileMenu /> : <Menu />}
              </nav>{" "}
              {/* END MAIN MENU */}
            </div>
          </div>{" "}
          {/* END NAVIGATION MENU */}
        </div>{" "}
        {/* End header-wrapper */}
      </header>
    </>
  );
}
