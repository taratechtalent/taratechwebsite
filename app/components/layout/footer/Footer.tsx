/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer id="footer-3" className="pt-100 footer ft-3-ntr">
        <div className="container">
          {/* FOOTER CONTENT */}
          <div className="row">
            {/* FOOTER LOGO */}
            <div className="col-xl-3">
              <div className="footer-info">
                <img
                  className="footer-logo"
                  src="/images/logo-pink.png"
                  alt="footer-logo"
                />
                <img
                  className="footer-logo-dark"
                  src="/images/logo-pink-white.png"
                  alt="footer-logo"
                />
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className="col-sm-4 col-lg-3 col-xl-2">
              <div className="footer-links fl-1">
                {/* Title */}
                <h6 className="s-17 w-700">Company</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <Link href="/about">About Us</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="/blog-listing">Our Blog</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="/testimonials">Customers</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="#">Community</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="col-sm-4 col-lg-3 col-xl-2">
              <div className="footer-links fl-3">
                {/* Title */}
                <h6 className="s-17 w-700">Legal</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <Link href="/terms">Terms of Use</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="/privacy">Privacy Policy</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="col-sm-4 col-lg-2">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">Contact</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <Link href="/contact">Contact us</Link>
                    </p>
                  </li>{" "}
                  <li>
                    <p>
                      <Link href="/team">Team</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="/faq">FAQ</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END FOOTER CONTENT */}
          <hr /> {/* FOOTER DIVIDER LINE */}
          {/* BOTTOM FOOTER */}
          <div className="bottom-footer">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
              {/* FOOTER COPYRIGHT */}
              <div className="col">
                <div className="footer-copyright">
                  <p className="p-sm">
                    © 2023 Martex. <span>All Rights Reserved</span>
                  </p>
                </div>
              </div>
              {/* FOOTER SOCIALS */}
              <div className="col">
                <ul className="bottom-footer-socials ico-20 text-end">
                  <li>
                    <Link href="#">
                      <span className="flaticon-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="flaticon-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="flaticon-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="flaticon-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END BOTTOM FOOTER */}
        </div>{" "}
        {/* End container */}
      </footer>
    </>
  );
}
