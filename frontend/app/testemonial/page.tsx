/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import Layout from "../components/layout/Layout";

/* eslint-disable @next/next/no-img-element */
export default function Testemonial() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section
            id="reviews-2"
            className="gr--whitesmoke inner-page-hero reviews-section"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">
                      Here’s what our amazing clients are saying
                    </h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Read what customers think about us
                    </p>
                  </div>
                </div>
              </div>
              {/* TESTIMONIALS-2 WRAPPER */}
              <div className="reviews-2-wrapper rel">
                <div className="row align-items-center row-cols-1 row-cols-md-2">
                  {/* TESTIMONIAL #1 */}
                  <div className="col">
                    <div
                      id="rw-2-1"
                      className="review-2 bg--white-100 block-shadow r-08"
                    >
                      {/* Quote Icon */}
                      <div className="review-ico ico-65">
                        <span className="flaticon-quote" />
                      </div>
                      {/* Text */}
                      <div className="review-txt">
                        {/* Text */}
                        <p>
                          Quaerat sodales sapien euismod blandit aliquet ipsum
                          primis undo and cubilia laoreet augue and luctus magna
                          dolor luctus egestas sapien vitae
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                          {/* Avatar */}
                          <div className="review-avatar">
                            <img
                              src="/images/review-author-1.jpg"
                              alt="review-avatar"
                            />
                          </div>
                          {/* Data */}
                          <div className="review-author">
                            <h6 className="s-18 w-700">Scott Boxer</h6>
                            <p className="p-sm">@scott_boxer</p>
                          </div>
                        </div>{" "}
                        {/* End Author */}
                      </div>{" "}
                      {/* End Text */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL #1 */}
                  {/* TESTIMONIAL #2 */}
                  <div className="col">
                    <div
                      id="rw-2-2"
                      className="review-2 bg--white-100 block-shadow r-08"
                    >
                      {/* Quote Icon */}
                      <div className="review-ico ico-65">
                        <span className="flaticon-quote" />
                      </div>
                      {/* Text */}
                      <div className="review-txt">
                        {/* Text */}
                        <p>
                          At sagittis congue augue and magna ipsum vitae a purus
                          ipsum primis diam a cubilia laoreet augue egestas
                          luctus a donec vitae ultrice ligula magna suscipit
                          lectus gestas augue into cubilia
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                          {/* Avatar */}
                          <div className="review-avatar">
                            <img
                              src="/images/review-author-2.jpg"
                              alt="review-avatar"
                            />
                          </div>
                          {/* Data */}
                          <div className="review-author">
                            <h6 className="s-18 w-700">Joel Peterson</h6>
                            <p className="p-sm">Internet Surfer</p>
                          </div>
                        </div>{" "}
                        {/* End Author */}
                      </div>{" "}
                      {/* End Text */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL #2 */}
                  {/* TESTIMONIAL #3 */}
                  <div className="col">
                    <div
                      id="rw-2-3"
                      className="review-2 bg--white-100 block-shadow r-08"
                    >
                      {/* Quote Icon */}
                      <div className="review-ico ico-65">
                        <span className="flaticon-quote" />
                      </div>
                      {/* Text */}
                      <div className="review-txt">
                        {/* Text */}
                        <p>
                          An augue cubilia laoreet magna suscipit egestas and
                          ipsum a lectus purus ipsum primis and augue ultrice
                          ligula and egestas a suscipit lectus gestas undo
                          auctor tempus feugiat impedit quaerat
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                          {/* Avatar */}
                          <div className="review-avatar">
                            <img
                              src="/images/review-author-5.jpg"
                              alt="review-avatar"
                            />
                          </div>
                          {/* Data */}
                          <div className="review-author">
                            <h6 className="s-18 w-700">Jennifer Harper</h6>
                            <p className="p-sm">App Developer</p>
                          </div>
                        </div>{" "}
                        {/* End Author */}
                      </div>{" "}
                      {/* End Text */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL #3 */}
                  {/* TESTIMONIAL #4 */}
                  <div className="col">
                    <div
                      id="rw-2-4"
                      className="review-2 bg--white-100 block-shadow r-08"
                    >
                      {/* Quote Icon */}
                      <div className="review-ico ico-65">
                        <span className="flaticon-quote" />
                      </div>
                      {/* Text */}
                      <div className="review-txt">
                        {/* Text */}
                        <p>
                          Augue at vitae purus tempus egestas volutpat augue
                          undo cubilia laoreet magna suscipit luctus dolor
                          blandit at purus tempus feugiat impedit
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                          {/* Avatar */}
                          <div className="review-avatar">
                            <img
                              src="/images/review-author-8.jpg"
                              alt="review-avatar"
                            />
                          </div>
                          {/* Data */}
                          <div className="review-author">
                            <h6 className="s-18 w-700">Evelyn Martinez</h6>
                            <p className="p-sm">WordPress Consultant</p>
                          </div>
                        </div>{" "}
                        {/* End Author */}
                      </div>{" "}
                      {/* End Text */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL #4 */}
                  {/* TESTIMONIAL #5 */}
                  <div className="col">
                    <div
                      id="rw-2-5"
                      className="review-2 bg--white-100 block-shadow r-08"
                    >
                      {/* Quote Icon */}
                      <div className="review-ico ico-65">
                        <span className="flaticon-quote" />
                      </div>
                      {/* Text */}
                      <div className="review-txt">
                        {/* Text */}
                        <p>
                          Quaerat sodales sapien euismod blandit aliquet ipsum
                          primis undo and cubilia laoreet augue and luctus magna
                          dolor luctus egestas sapien vitae
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                          {/* Avatar */}
                          <div className="review-avatar">
                            <img
                              src="/images/review-author-6.jpg"
                              alt="review-avatar"
                            />
                          </div>
                          {/* Data */}
                          <div className="review-author">
                            <h6 className="s-18 w-700">Leslie D.</h6>
                            <p className="p-sm">Web Developer</p>
                          </div>
                        </div>{" "}
                        {/* End Author */}
                      </div>{" "}
                      {/* End Text */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL #5 */}
                  {/* TESTIMONIAL #6 */}
                  <div className="col">
                    <div
                      id="rw-2-6"
                      className="review-2 bg--white-100 block-shadow r-08"
                    >
                      {/* Quote Icon */}
                      <div className="review-ico ico-65">
                        <span className="flaticon-quote" />
                      </div>
                      {/* Text */}
                      <div className="review-txt">
                        {/* Text */}
                        <p>
                          At sagittis congue augue and magna ipsum vitae a purus
                          ipsum primis diam a cubilia laoreet augue egestas
                          luctus a donec vitae ultrice ligula magna suscipit
                          lectus gestas augue into cubilia
                        </p>
                        {/* Author */}
                        <div className="author-data clearfix">
                          {/* Avatar */}
                          <div className="review-avatar">
                            <img
                              src="/images/review-author-3.jpg"
                              alt="review-avatar"
                            />
                          </div>
                          {/* Data */}
                          <div className="review-author">
                            <h6 className="s-18 w-700">Marisol19</h6>
                            <p className="p-sm">@marisol19</p>
                          </div>
                        </div>{" "}
                        {/* End Author */}
                      </div>{" "}
                      {/* End Text */}
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL #6 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TESTIMONIALS-2 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TESTIMONIALS-2 */}
          {/* PAGE PAGINATION
    ============================================= */}
          <div className="py-100 page-pagination theme-pagination">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination ico-20 justify-content-center">
                      <li className="page-item disabled">
                        <Link className="page-link" href="#" tabIndex={-1}>
                          <span className="flaticon-back" />
                        </Link>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <Link className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Next">
                          <span className="flaticon-next" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END PAGE PAGINATION */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* NEWSLETTER-1
    ============================================= */}
          {/* END NEWSLETTER-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
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
                          src="/images/contact/join.png"
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
        </div>
      </Layout>
    </>
  );
}
