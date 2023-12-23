import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        <li>
          <Link href="/" className="h-link">
            Tara Talent <span className="wsarrow" />
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="#lnk-1">Why Us</Link>
            </li>
            <li>
              <Link href="#lnk-2">Integrations</Link>
            </li>
            <li>
              <Link href="#lnk-3">How It Works</Link>
            </li>
            <li>
              <Link href="#features-2">Best Solutions</Link>
            </li>
            <li>
              <Link href="#reviews-1">Testimonials</Link>
            </li>
          </ul>
        </li>

        <li className="nl-simple">
          <Link href="/team" className="h-link">
            {/* <Link href="/project" className="h-link"> */}
            Services - Team
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/career" className="h-link">
            Career
          </Link>
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
              <Link href="#">Top 5% telent</Link>
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
        </li>
      </ul>
    </>
  );
}
