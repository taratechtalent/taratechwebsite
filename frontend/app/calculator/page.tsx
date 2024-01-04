/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Layout from "../components/layout/Layout";
import Link from "next/link";
export default function Calculator() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          {/* ABOUT-2
			============================================= */}
          <section
            id="about-2"
            className="rel inner-page-hero about-section division"
          >
            {/* ABOUT-2 TITLE */}
            <div className="container">
              <div className="row">
                <div className="col-md-11 col-lg-10 col-xl-9">
                  <div className="about-2-title mb-60">
                    {/* Title */}
                    <h2 className="s-52 w-700 mb-30">Calculator</h2>
                    {/* Text */}
                    <p className="mb-0">
                      Your Trusted Partner for Affordable, Senior-Driven
                      Development Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END ABOUT-2 TITLE */}
            {/* ABOUT-2 IMAGES */}
            <div className="container-fluid">
              <div className="row">
                {/* IMAGES-1 */}
                <div className="col-md-5">
                  <div className="text-end">
                    {/* IMAGE-1 */}
                    <div className="about-2-img a-2-1 r-12">
                      <img
                        className="img-fluid"
                        src="/images/a2-1.jpg"
                        alt="about-image"
                      />
                    </div>
                    {/* IMAGE-2 */}
                    <div className="about-2-img a-2-2 r-12">
                      <img
                        className="img-fluid"
                        src="/images/a2-2.jpg"
                        alt="about-image"
                      />
                    </div>
                  </div>
                </div>
                {/* END IMAGES-1 */}
                {/* IMAGES-2 */}
                <div className="col-md-7">
                  {/* IMAGE-3 */}
                  <div className="about-2-img a-2-3 r-12">
                    <img
                      className="img-fluid"
                      src="/images/a2-3.jpg"
                      alt="about-image"
                    />
                  </div>
                  <div className="row">
                    {/* TEXT */}
                    <div className="col-md-7 col-lg-6">
                      <div className="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                        {/* Icon */}
                        <div className="a2-txt-quote ico-40 o-20">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <p>
                          Naser Derakhashan, founder of an HR company, commits
                          to global client excellence with tailored strategies,
                          integrity, and innovative solutions, ensuring
                          efficient, personalized support and fostering lasting
                          partnerships in the ever-evolving world of human
                          resources.
                        </p>
                        {/* Author */}
                        <p className="a2-txt-author">
                          Amin Derakhshan <span>CEO &amp; CO-FOUNDER</span>
                        </p>
                      </div>
                    </div>
                    {/* IMAGE-4 */}
                    <div className="col-md-5 col-lg-6">
                      <div className="about-2-img a-2-4 r-12">
                        <img
                          className="img-fluid"
                          src="/images/a2-4.jpg"
                          alt="about-image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* END IMAGES-2 */}
              </div>
              {/* End row */}
            </div>
            {/* END ABOUT-2 IMAGES */}
          </section>
          {/* END ABOUT-2 */}

          {/* END FEATURES-11 */}
          {/* DIVIDER LINE */}
          <hr className="divider !mt-20" />
        </div>
      </Layout>
    </>
  );
}
