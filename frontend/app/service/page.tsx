/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ServiceComponent from "../component/service.component";
import ServiceContactComponent from "../component/service.contact.component";
export default function Help() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: any) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: any) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <ServiceComponent
            title={"Our unique solutions"}
            desc="Best solutions for your bussiness with amazing talent"
            image="/images/services/allservices.webp"
          />
        </div>
        <div className="flex justify-center">
          <div
            className="w-1/2 text-center  p-3 m-4"
            style={{ backgroundColor: "#ff000017", borderRadius: 15 }}
          >
            <Link
              href="/book"
              className="btn r-04 btn--theme hover--theme mb-20  mt-20"
            >
              Team up for success
            </Link>
          </div>
        </div>

        <hr className="divider" />

        <section id="faqs-3" className="gr--whitesmoke pt-100 faqs-section">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                  {/* Title */}
                  <h2 className="s-52 w-700">Our Unique solutions FAQ</h2>
                  {/* Text */}

                  <p className="s-21 color--grey">
                    Most important questions maybe help you better to work with
                    us
                  </p>
                </div>
              </div>
            </div>
            {/* FAQs-3 QUESTIONS */}
            <div className="faqs-3-questions">
              <div className="row">
                {/* QUESTIONS HOLDER */}
                <div className="col-lg-6">
                  <div className="questions-holder">
                    {/* QUESTION #1 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>1.</span> Getting started with Martex
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        Etiam amet mauris suscipit in odio integer congue metus
                        and vitae arcu mollis blandit ultrice ligula egestas
                        magna suscipit lectus magna suscipit luctus blandit and
                        laoreet
                      </p>
                    </div>
                    {/* QUESTION #2 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>2.</span> How do I choose a plan?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        An enim nullam tempor sapien gravida donec ipsum and
                        enim porta justo integer at velna vitae auctor integer
                        congue undo magna laoreet augue pretium purus pretium
                        ligula
                      </p>
                    </div>
                    {/* QUESTION #3 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>3.</span> Do I need a credit card to sign up?
                      </h5>
                      {/* Answer */}
                      <ul className="simple-list color--grey">
                        <li className="list-item">
                          <p>
                            Fringilla risus, luctus mauris orci auctor purus
                            ligula euismod pretium purus pretium rutrum tempor
                            sapien
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Nemo ipsam egestas volute undo turpis purus lipsum
                            primis aliquam sapien quaerat sodales pretium a
                            purus
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* END QUESTIONS HOLDER */}
                {/* QUESTIONS WRAPPER */}
                <div className="col-lg-6">
                  <div className="questions-holder">
                    {/* QUESTION #4 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>4.</span> Discounts for annual plans
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        Quaerat sodales sapien euismod blandit purus a purus
                        ipsum primis in cubilia laoreet augue luctus dolor
                        luctus
                      </p>
                      {/* Answer */}
                      <p className="color--grey">
                        An enim nullam tempor sapien gravida donec congue metus.
                        Vitae arcu mollis blandit integer nemo volute velna
                      </p>
                    </div>
                    {/* QUESTION #5 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>5.</span> How to request a refund?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        Cubilia laoreet augue egestas and luctus donec curabite
                        diam vitae dapibus libero and quisque gravida donec
                        neque blandit justo aliquam molestie nunc sapien justo
                      </p>
                    </div>
                    {/* QUESTION #6 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>6.</span> Can I cancel at anytime?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        An enim nullam tempor sapien gravida donec ipsum and
                        enim porta justo integer at velna vitae auctor integer
                        congue undo magna laoreet augue pretium purus pretium
                        ligula
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END QUESTIONS HOLDER */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END FAQs-3 QUESTIONS */}
            {/* MORE QUESTIONS LINK */}
          </div>{" "}
          {/* End container */}
        </section>

        <div className="row p-4 m-4" style={{ backgroundColor: "#ff000017" }}>
          <div className="col-sm-12 text-center">
            <Link
              href="/book"
              className="btn r-04 btn--theme hover--theme mb-20  mt-20"
            >
              Team up for success
            </Link>
          </div>
        </div>
        <hr className="divider" />

        <section className="py-100 ct-02 content-section division">
          <div className="container">
            <div className="row">
              <div className="col text-center mb-32">
                <h2 className="s-52 w-700">How to work with Us</h2>
                <h4 className="font-bold pt-6">
                  Achive your goal in the way you never experienced before
                </h4>
              </div>
            </div>
            {/* SECTION CONTENT (ROW) */}
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-12">
                <div className="txt-block flex right-column wow fadeInLeft">
                  {/* CONTENT BOX #1 */}
                  <div className="cbox-2 process-step col-md-4">
                    {/* Icon */}
                    <div className="ico-wrap">
                      <div className="cbox-2-ico bg--theme color--white">1</div>
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      <h5 className="s-22 w-700">Registeration</h5>
                      <p>
                        Register now to take the next step in your career
                        journey; complete the application form by uploading your
                        CV and let us connect you with your future
                        opportunities.
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT BOX #1 */}
                  {/* CONTENT BOX #2 */}
                  <div className="cbox-2 process-step col-md-4">
                    {/* Icon */}
                    <div className="ico-wrap">
                      <div className="cbox-2-ico bg--theme color--white">2</div>
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      <h5 className="s-22 w-700">Some Amazing Test skills</h5>
                      <p>
                        Enhance your career with our comprehensive testing
                        suite, featuring
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT BOX #2 */}
                  {/* CONTENT BOX #3 */}
                  <div className="cbox-2 process-step col-md-4">
                    {/* Icon */}
                    <div className="ico-wrap">
                      <div className="cbox-2-ico bg--theme color--white">3</div>
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      <h5 className="s-22 w-700">
                        Finalize contract and start Trial Period
                      </h5>
                      <p className="mb-0">
                        Finalize your contract with us and embark on a trial
                        period, where {`you'll`} have the opportunity to
                        showcase your skills,
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT BOX #3 */}
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>{" "}
            {/* END SECTION CONTENT (ROW) */}
          </div>{" "}
          {/* End container */}
        </section>
        <ServiceContactComponent />
      </Layout>
    </>
  );
}
