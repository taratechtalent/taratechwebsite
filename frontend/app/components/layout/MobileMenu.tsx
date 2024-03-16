import Link from "next/link";
import { useState } from "react";
export default function MobileMenu() {
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
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple">
          <Link href="/toptalent" className="h-link">
            Top 1%
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/service" className="h-link">
            Services
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/career" className="h-link">
            Career
          </Link>
        </li>{" "}
        <li>
          <span
            className={
              isActive.key == "1"
                ? "wsmenu-click ws-activearrow"
                : "wsmenu-click"
            }
            onClick={() => handleToggle("1")}
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
              <Link href="/industries/health">Healthcare & Life Sciences</Link>
            </li>
            <li>
              <Link href="/industries/technology">Technology</Link>
            </li>
            <li>
              <Link href="/industries/communication">
                Communication,Media & Entertainment
              </Link>
            </li>
            <li>
              <Link href="/industries/marketing">Financial Services</Link>
            </li>
          </ul>
        </li>
        <li className="nl-simple">
          <Link href="/about" className="h-link">
            About us
          </Link>
        </li>
      </ul>
    </>
  );
}
