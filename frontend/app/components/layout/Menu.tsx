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
              <Link href="/industries/marketing">Financial Services</Link>
            </li>{" "}
          </ul>
        </li>

        <li className="nl-simple">
          <Link href="/about" className="h-link">
            About Us
          </Link>
        </li>

        {/* SIGN IN LINK */}
        {/* SIGN UP BUTTON */}
        <li className="nl-simple ">
          <Link
            href="/calculator"
            className="btn r-04  hover--tra-red last-link ml-20"
            style={{
              color: "black",
              border: "1px solid black",
              marginLeft: "60px",
              padding: "4px 10px !important",
              fontSize: "14px !important",
            }}
          >
            Estimate Price
          </Link>
        </li>
        <li className="nl-simple ">
          <Link
            href="/book"
            className="btn r-04 btn--theme hover--tra-white last-link ml-2 header-btn"
            style={{
              padding: "4px 10px !important",
              fontSize: "14px !important",
            }}
          >
            Schedual a Call
          </Link>
        </li>
        <li className="nl-simple ">
          <Link
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
      </ul>
    </>
  );
}
