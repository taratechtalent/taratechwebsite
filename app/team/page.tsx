/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import Link from "next/link";
export default function Team() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section
            id="team-2"
            className="gr--whitesmoke pb-40 inner-page-hero team-section"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-80">
                    <h2 className="s-52 w-700">Meet Our Visionaries</h2>
                    <h2 className="s-40 w-700 pt-10">
                      The Driving Force Behind Our Success
                    </h2>
                  </div>
                </div>
              </div>
              {/* TEAM MEMBERS WRAPPER */}
              <div className="team-members-wrapper">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                  {/* TEAM MEMBER #1 */}
                  <div className="col">
                    <div id="tm-2-1" className="team-member mb-60 wow fadeInUp">
                      {/* Team Member Photo */}
                      <div className="team-member-photo r-14">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/team/amin.png"
                            alt="team-member-foto"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* Team Member Data */}
                      <div className="team-member-data">
                        {/* Data */}
                        <h6 className="s-20 color--black w-700">
                          Amin Derakhshan
                        </h6>
                        <p className="color--grey">Founder and CEO</p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
                          <li>
                            <Link
                              href="https://www.linkedin.com/in/amin-derakhshan/"
                              target="_blank"
                            >
                              <span className="flaticon-linkedin-logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END TEAM MEMBER #1 */}
                  {/* TEAM MEMBER #2 */}
                  <div className="col">
                    <div id="tm-2-3" className="team-member mb-60 wow fadeInUp">
                      {/* Team Member Photo */}
                      <div className="team-member-photo r-14">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/team/naser.png"
                            alt="team-member-foto"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* Team Member Data */}
                      <div className="team-member-data">
                        {/* Data */}
                        <h6 className="s-20 color--black w-700">
                          Naser Derakhshan
                        </h6>
                        <p className="color--grey">Devops Consultant</p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
                          <li>
                            <Link
                              href="https://www.linkedin.com/in/naser-derakhshan-51951828/"
                              target="_blank"
                            >
                              <span className="flaticon-linkedin-logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END TEAM MEMBER #2 */}
                  {/* TEAM MEMBER #3 */}
                  {/* END TEAM MEMBER #3 */}
                  {/* TEAM MEMBER #4 */}
                  <div className="col">
                    <div id="tm-2-4" className="team-member mb-60 wow fadeInUp">
                      {/* Team Member Photo */}
                      <div className="team-member-photo r-14">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/team/zeinab.hassani.png"
                            alt="team-member-foto"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* Team Member Data */}
                      <div className="team-member-data">
                        {/* Data */}
                        <h6 className="s-20 color--black w-700">
                          Zeinab Hassani
                        </h6>
                        <p className="color--grey">Operation Consultant</p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
                          <li>
                            <Link
                              href="https://www.linkedin.com/in/zeinab-hassani-422b678a/"
                              target="_blank"
                            >
                              <span className="flaticon-linkedin-logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col">
                    <div id="tm-2-4" className="team-member mb-60 wow fadeInUp">
                      {/* Team Member Photo */}
                      <div className="team-member-photo r-14">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/team/hassani.png"
                            alt="team-member-foto"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* Team Member Data */}
                      <div className="team-member-data">
                        {/* Data */}
                        <h6 className="s-20 color--black w-700">
                          Fatemeh Hassani
                        </h6>
                        <p className="color--grey">Head of Talent Operations</p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
                          <li>
                            <Link
                              href="https://www.linkedin.com/in/fhassani2005/"
                              target="_blank"
                            >
                              <span className="flaticon-linkedin-logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END TEAM MEMBER #4 */}
                  {/* TEAM MEMBER #5 */}
                  <div className="col">
                    <div id="tm-2-5" className="team-member mb-60 wow fadeInUp">
                      {/* Team Member Photo */}
                      <div className="team-member-photo r-14">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/team/ahmadian.png"
                            alt="team-member-foto"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* Team Member Data */}
                      <div className="team-member-data">
                        {/* Data */}
                        <h6 className="s-20 color--black w-700">
                          Seyed Mohamed Ahmadian
                        </h6>
                        <p className="color--grey">CTO</p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
                          <li>
                            <Link
                              href="https://www.linkedin.com/in/ahmadianzadeh/"
                              target="_blank"
                            >
                              <span className="flaticon-linkedin-logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div id="tm-2-5" className="team-member mb-60 wow fadeInUp">
                      {/* Team Member Photo */}
                      <div className="team-member-photo r-14">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/team/farajian.png"
                            alt="team-member-foto"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* Team Member Data */}
                      <div className="team-member-data">
                        {/* Data */}
                        <h6 className="s-20 color--black w-700">
                          Mina Farajian
                        </h6>
                        <p className="color--grey">
                          Director of Talent Acquisition
                        </p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
                          <li>
                            <Link
                              href="https://www.linkedin.com/in/mina-farajian/"
                              target="_blank"
                            >
                              <span className="flaticon-linkedin-logo" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* TEAM MEMBERS WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TEAM-2 */}
          {/* BANNER-12
			============================================= */}
          <section id="banner-12" className="banner-section">
            <div className="container">
              {/* BANNER-12 WRAPPER */}
              <div className="banner-12-wrapper bg--05 bg--fixed r-16">
                <div className="banner-overlay">
                  <div className="row d-flex align-items-center">
                    {/* BANNER-12 TEXT */}
                    <div className="col-md-7">
                      <div className="banner-12-txt color--white">
                        {/* Title */}
                        <h2 className="s-35 w-700">
                          Join Us in Crafting a Partnership Where Success Knows
                          No Bounds
                        </h2>
                        {/* Text */}
                        <p className="p-lg">
                          Your unique perspective and talents are the missing
                          pieces to our collective success story.
                        </p>
                        {/* Button */}
                        <Link
                          href="/book"
                          className="btn r-04 btn--theme hover--tra-white"
                        >
                          Team up for success
                        </Link>
                      </div>
                    </div>{" "}
                    {/* END BANNER-12 TEXT */}
                    {/* BANNER-12 IMAGE */}
                    <div className="col-md-5">
                      <div className="banner-12-img text-center">
                        <img
                          className="img-fluid rounded-full"
                          src="/images/join.png"
                          alt="banner-image"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* End banner overlay */}
              </div>{" "}
              {/* END BANNER-12 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END BANNER-12 */}
          {/* CAREERS-1
			============================================= */}
          <section id="banner-4" className="banner-section pt-48">
            <div className="banner-overlay pb-100">
              <div className="container">
                {/* BANNER-4 WRAPPER */}
                <div className="banner-4-wrapper">
                  <div className="row justify-content-center">
                    {/* BANNER-4 TEXT */}
                    <div className="col-md-10">
                      <div className="banner-4-txt text-center">
                        {/* Title */}
                        <h2 className="s-45 w-700">
                          Counting down to our meeting with you
                        </h2>
                        {/* Button */}
                        <Link
                          href="mailto:yourdomain@mail.com"
                          className="btn r-04 btn--theme hover--theme"
                        >
                          support@tara-talent.com
                        </Link>
                      </div>
                    </div>
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* END BANNER-4 WRAPPER */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* End banner overlay */}
          </section>{" "}
          {/* END BANNER-4 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
        </div>
      </Layout>
    </>
  );
}
