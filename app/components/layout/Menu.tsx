import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        {/* DROPDOWN SUB MENU */}
        <li>
          <Link href="/" className="h-link">
            About <span className="wsarrow" />
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="#lnk-1">Why Martex?</Link>
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
            Team
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/project" className="h-link">
            Project
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/career" className="h-link">
            Career
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/about" className="h-link">
            About
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/contact" className="h-link">
            Contact
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/term" className="h-link">
            Term
          </Link>
        </li>
        <li className="nl-simple">
          <Link href="/help" className="h-link">
            Help
          </Link>
        </li>
        {/* MEGAMENU */}

        {/* END MEGAMENU */}
        {/* SIMPLE NAVIGATION LINK */}
        {/* SIMPLE NAVIGATION LINK */}
        <li className="nl-simple">
          <Link href="/faq" className="h-link">
            FAQs
          </Link>
        </li>
      </ul>
    </>
  );
}
