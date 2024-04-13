import Link from "next/link";
import { useState } from "react";

export default function Menu({ isMobileMenu }: any) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key: any) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const removeMenuPanel = () => {
    document.body.classList.remove("wsactive");
  };
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        <li className="nl-simple">
          <Link href="/toptalent" className="h-link" onClick={removeMenuPanel}>
            Top 1%
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/service" className="h-link" onClick={removeMenuPanel}>
            Services
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/career" className="h-link" onClick={removeMenuPanel}>
            Career
          </Link>
        </li>
        <li>
          <span
            className={
              isActive.key == "1"
                ? "wsmenu-click ws-activearrow"
                : "wsmenu-click"
            }
            onClick={() => handleToggle(1)}
          >
            <i className="wsmenu-arrow" />
          </span>
          <Link href="#" className="h-link">
            Industries <span className="wsarrow" />
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == "1" ? "block" : "none"}` }}
          >
            <li>
              <Link href="/industries/health" onClick={removeMenuPanel}>
                Healthcare & Life Sciences
              </Link>
            </li>
            <li>
              <Link href="/industries/technology" onClick={removeMenuPanel}>
                Technology
              </Link>
            </li>
            <li>
              <Link href="/industries/communication" onClick={removeMenuPanel}>
                Communication,Media & Entertainment
              </Link>
            </li>
            <li>
              <Link href="/industries/marketing" onClick={removeMenuPanel}>
                Financial Services
              </Link>
            </li>
          </ul>
        </li>

        <li className="nl-simple">
          <Link href="/about" className="h-link" onClick={removeMenuPanel}>
            About Us
          </Link>
        </li>

        {/* SIGN IN LINK */}
        {/* SIGN UP BUTTON */}
        {
          <>
            <li className="nl-simple ">
              <Link
                onClick={removeMenuPanel}
                href="/calculator"
                className="btn r-04  hover--tra-red last-link ml-20 estimateHeader"
                style={{
                  color: "black",
                  border: "1px solid black",
                  padding: "4px 10px !important",
                  fontSize: "14px !important",
                }}
              >
                Estimate Price
              </Link>
            </li>
            <li className="nl-simple ">
              <Link
                onClick={removeMenuPanel}
                href="/book"
                className="btn r-04 btn--theme hover--tra-white last-link ml-2 header-btn"
                style={{
                  padding: "4px 10px !important",
                  fontSize: "14px !important",
                }}
              >
                Schedule a Call
              </Link>
            </li>
            <li className="nl-simple ">
              <Link
                onClick={removeMenuPanel}
                href="/career/join"
                className="btn r-04  hover--tra-red last-link ml-20"
                style={{
                  color: "black",
                  border: "0",
                  padding: "4px 10px !important",
                  fontSize: "14px !important",
                }}
              >
                Apply as a Talent
              </Link>
            </li>
          </>
        }
      </ul>
    </>
  );
}
