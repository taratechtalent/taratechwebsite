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
              <div className="footer-info flex">
                <img
                  className="footer-logo"
                  src="/images/logo/footer.png"
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
                  {/* <li>
                    <p>
                      <Link href="/team">Team</Link>
                    </p>
                  </li> */}
                  <li>
                    <p>
                      <Link href="/about">About Us</Link>
                    </p>
                  </li>

                  <li>
                    <p>
                      <Link href="/terms">Terms of Use</Link>
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
                      <Link href="/faq">FAQ</Link>
                    </p>
                  </li>{" "}
                  <li>
                    <p>
                      <Link href="/contact">Contact Us</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-lg-2">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">Career</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p>
                      <Link href="/career">Career</Link>
                    </p>
                  </li>{" "}
                  <li>
                    <p>
                      <Link href="/calculator"> Get a Quote</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-lg-2">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">Resource</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  {/* <li>
                    <p>
                      <Link href="/blog">Blog</Link>
                    </p>
                  </li> */}
                  <li>
                    <p>
                      <Link href="/service">Services</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="/industries/technology">Industries</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link href="/technology">Technologies</Link>
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
                    © 2012 - 2024 Tara Talent. <span>All Rights Reserved</span>
                  </p>
                </div>
              </div>
              {/* FOOTER SOCIALS */}
              <div className="col">
                <ul className="bottom-footer-socials ico-20 text-end">
                  <li>
                    <Link href="https://www.linkedin.com/in/fhassani2005">
                      <span className="flaticon-linkedin-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:support@tara-talent.com">
                      <span className="flaticon-email" />
                    </Link>
                  </li>
                  {/* <li>
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
                  </li> */}
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
