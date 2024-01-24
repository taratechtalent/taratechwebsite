import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
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
        </li>
        <li>
          <Link href="#" className="h-link">
            Industries <span className="wsarrow" />
          </Link>
          <ul className="sub-menu">
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
              <Link href="/industries/marketing">Financial services</Link>
            </li>{" "}
          </ul>
        </li>
        <li>
          <Link href="#" className="h-link">
            About us <span className="wsarrow" />
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/team">Leadership team</Link>
            </li>
            <li>
              <Link href="/calculator">Talent Quote Generator</Link>
            </li>
          </ul>
        </li>
        {/* SIGN IN LINK */}
        {/* SIGN UP BUTTON */}
        <li className="nl-simple ">
          <Link
            href="/book"
            className="btn r-04 btn--theme hover--tra-white last-link ml-20"
            style={{ marginLeft: "60px" }}
          >
            Book a Call
          </Link>
        </li>{" "}
        <li className="nl-simple ">
          <Link
            href="/career/join"
            className="btn r-04  hover--tra-red last-link ml-20"
            style={{ color: "black", border: "1px solid black" }}
          >
            Apply as a Talent
          </Link>
        </li>
      </ul>
    </>
  );
}
