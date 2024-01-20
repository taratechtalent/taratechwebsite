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
            title={"Exclusive, Cutting-Edge Services"}
            desc="Unique, advanced solutions crafted by experts for your specific needs."
            image="/images/services/allservices.webp"
          />
        </div>
        <div className="row p-4 m-4" style={{ backgroundColor: "#37939b" }}>
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

        <section id="faqs-3" className="gr--whitesmoke pt-100 faqs-section">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                  {/* Title */}
                  <h2 className="s-52 w-700">FAQs</h2>
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
                        <span>1.</span> Are there any upfront recruiting or
                        contractual costs?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        We require an initial deposit of $500 that will be
                        applied as a credit to your first invoice once you make
                        a hire. If you decide not to move forward, your deposit
                        will be refunded completely.
                      </p>
                    </div>
                    {/* QUESTION #2 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>2.</span> How is the trial period no-risk?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        We make sure to start each engagement with a trial
                        period of up to two weeks. This means that you have time
                        to help ensure the engagement will be successful. If
                        {`you’re`} completely satisfied with the results,{" "}
                        {"we’ll"}
                        bill you for the time and continue the engagement for as
                        long as you’d like. If {"you’re"} not completely
                        satisfied, you {"won’t"} be billed. From there, we can
                        either part ways, or we can provide you with another
                        expert who may be a better fit and with whom we will
                        begin a second, no-risk trial.
                      </p>
                    </div>
                    {/* QUESTION #3 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>3.</span> What happens if {`I’m`} not satisfied
                        with a Toptal expert?
                      </h5>
                      {/* Answer */}
                      <ul className="simple-list color--grey">
                        <li className="list-item">
                          <p>
                            We allow our clients to begin a trial period with up
                            to three experts from our network per position.
                            While we rigorously screen all applicants to ensure
                            talent and intelligence, we understand that not
                            every person will be a perfect fit for every
                            company. For this reason, we allow our clients to
                            work with multiple experts for each position before
                            they decide on a candidate with whom they are
                            confident and comfortable.
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
                        <span>4.</span> How does your screening process ensure
                        quality candidates that meet our requirements?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        We screen for communication skills, personality,
                        domain-specific knowledge, and a high level of
                        professionalism. Approximately 3% of applicants pass the
                        screening process.
                      </p>
                      {/* Answer */}
                      <p className="color--grey">
                        Our process includes a variety of ways to determine
                        skill and proficiency, including portfolio reviews,
                        technical coding challenges, user or market research,
                        business cases, project management backlog grooming,
                        formal assessments, as well as live problem-solving
                        sessions as appropriate to the candidate and vertical.
                      </p>
                    </div>
                    {/* QUESTION #5 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>5.</span> Where are your experts located?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        Currently, we have experts in over 100 countries, most
                        being located in the Americas and Europe.
                      </p>
                    </div>
                    {/* QUESTION #6 */}
                    <div className="question mb-35 wow fadeInUp">
                      {/* Question */}
                      <h5 className="s-22 w-700">
                        <span>6.</span> Are English skills ever an issue when
                        working with a Toptal expert?
                      </h5>
                      {/* Answer */}
                      <p className="color--grey">
                        No. Each and every Toptal expert writes and speaks
                        fluent English. In fact, before we invite candidates to
                        tackle our rigorous domain-specific tests, we conduct
                        lengthy interviews to ensure they have a high level of
                        proficiency in English and have personalities
                        well-suited to working with western technical teams.
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

        <div className="row p-4 m-4" style={{ backgroundColor: "#37939b" }}>
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
        <ServiceContactComponent
          title="Come Along and Let's Build a Team Where Achievements Are Limitless!"
          desc="Your distinct skills and viewpoints are the essential elements we need to complete our shared journey of achievement."
        />
      </Layout>
    </>
  );
}
