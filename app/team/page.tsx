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
                    <h2 className="s-52 w-700">
                      All we do is dream and craft amazing products
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
                            <Link href="#">
                              <span className="flaticon-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span className="flaticon-twitter" />
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
                        <p className="color--grey">Founder and CEO</p>
                        {/* Social Links */}
                        <ul className="tm-social ico-20 clearfix">
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
                            <Link href="#">
                              <span className="flaticon-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span className="flaticon-dribbble" />
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
                            <Link href="#">
                              <span className="flaticon-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span className="flaticon-dribbble" />
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
                            <Link href="#">
                              <span className="flaticon-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span className="flaticon-dribbble" />
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
                        <h2 className="s-45 w-700">
                          We are looking for talented individuals
                        </h2>
                        {/* Text */}
                        <p className="p-lg">
                          {`We're`} constantly looking for talented people to
                          join our team. {`Don't`} hesitate to get in touch with
                          us
                        </p>
                        {/* Button */}
                        <Link
                          href="#careers-1"
                          className="btn r-04 btn--theme hover--tra-white"
                        >
                          See open roles
                        </Link>
                      </div>
                    </div>{" "}
                    {/* END BANNER-12 TEXT */}
                    {/* BANNER-12 IMAGE */}
                    <div className="col-md-5">
                      <div className="banner-12-img text-center">
                        <img
                          className="img-fluid"
                          src="/images/img-16.png"
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
          <section id="careers-1" className="pt-100 pb-60 careers-section">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">Open Roles at Martex</h2>
                    {/* Text */}
                    <p className="p-lg">
                      We’re building a better way to work, fueled by
                      transparency, trust, and technology that is a force for
                      positive change for the hourly workforce
                    </p>
                  </div>
                </div>
              </div>
              {/* OPEN ROLES */}
              <div className="row row-cols-1 row-cols-md-2">
                {/* OPEN ROLE #1 */}
                <div className="col">
                  <div className="role-box bg--white-300 r-10">
                    <Link href="/career-role">
                      <span>Sales</span>
                      <h6 className="s-20 w-700">Senior Account Executive</h6>
                      <p>New York, NY / Full time</p>
                    </Link>
                  </div>
                </div>{" "}
                {/* END OPEN ROLE #1 */}
                {/* OPEN ROLE #2 */}
                <div className="col">
                  <div className="role-box bg--white-300 r-10">
                    <Link href="/career-role">
                      <span>Engineering</span>
                      <h6 className="s-20 w-700">
                        Software Engineer, Security
                      </h6>
                      <p>Vancouver, British Columbia, Canada / Remote</p>
                    </Link>
                  </div>
                </div>{" "}
                {/* END OPEN ROLE #2 */}
                {/* OPEN ROLE #3 */}
                <div className="col">
                  <div className="role-box bg--white-300 r-10">
                    <Link href="/career-role">
                      <span>Engineering</span>
                      <h6 className="s-20 w-700">Senior Backend Engineer</h6>
                      <p>New York, NY / Full time</p>
                    </Link>
                  </div>
                </div>{" "}
                {/* END OPEN ROLE #3 */}
                {/* OPEN ROLE #4 */}
                <div className="col">
                  <div className="role-box bg--white-300 r-10">
                    <Link href="/career-role">
                      <span>Engineering</span>
                      <h6 className="s-20 w-700">Engineering Tech Lead</h6>
                      <p>Vancouver, British Columbia, Canada / Remote</p>
                    </Link>
                  </div>
                </div>{" "}
                {/* END OPEN ROLE #4 */}
                {/* OPEN ROLE #5 */}
                <div className="col">
                  <div className="role-box bg--white-300 r-10">
                    <Link href="/career-role">
                      <span>Sales</span>
                      <h6 className="s-20 w-700">
                        Mid-Market Account Executive
                      </h6>
                      <p>New York, NY / Full time</p>
                    </Link>
                  </div>
                </div>{" "}
                {/* END OPEN ROLE #5 */}
                {/* OPEN ROLE #6 */}
                <div className="col">
                  <div className="role-box bg--white-300 r-10">
                    <Link href="/career-role">
                      <span>Marketing</span>
                      <h6 className="s-20 w-700">Product Marketing Manager</h6>
                      <p>Vancouver, British Columbia, Canada / Remote</p>
                    </Link>
                  </div>
                </div>{" "}
                {/* END OPEN ROLE #6 */}
              </div>{" "}
              {/* END OPEN ROLES */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CAREERS-1 */}
          {/* BANNER-4
			============================================= */}
          <section id="banner-4" className="banner-section">
            <div className="banner-overlay pb-100">
              <div className="container">
                {/* BANNER-4 WRAPPER */}
                <div className="banner-4-wrapper">
                  <div className="row justify-content-center">
                    {/* BANNER-4 TEXT */}
                    <div className="col-md-9">
                      <div className="banner-4-txt text-center">
                        {/* Title */}
                        <h2 className="s-46 w-700">
                          We {`can't`} wait to meet you
                        </h2>
                        {/* Button */}
                        <Link
                          href="mailto:yourdomain@mail.com"
                          className="btn r-04 btn--theme hover--theme"
                        >
                          hello@yourdomain.com
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
