"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: any) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: 0,
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
        <section
          id="faqs-2"
          className="gr--whitesmoke pb-30 inner-page-hero faqs-section division"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                {/* INNER PAGE TITLE */}
                <div className="inner-page-title">
                  <h2 className="s-52 w-700">FAQs</h2>
                  <p className="p-lg">
                    Answers to Common Inquiries for our Valued Clients and
                    professional Talents
                  </p>
                </div>
                {/* QUESTIONS ACCORDION */}
                <div className="accordion-wrapper">
                  <ul className="accordion">
                    {/* QUESTIONS CATEGORY #1 */}
                    <li
                      className={
                        isActive.key == 1
                          ? "accordion-item is-active"
                          : "accordion-item"
                      }
                      onClick={() => handleToggle(1)}
                    >
                      {/* CATEGORY HEADER */}
                      <div className="accordion-thumb">
                        <h4 className="s-28 w-700"> Client Queries</h4>
                      </div>
                      {/* CATEGORY ANSWERS */}
                      <div
                        className="accordion-panel"
                        style={{
                          display: `${isActive.key == 1 ? "block" : "none"}`,
                        }}
                      >
                        {/* QUESTION #1 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>1.</span> What is {`TaraTalent's`} primary
                              focus?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              TaraTalent specializes in connecting companies,
                              especially startups, with highly skilled and
                              affordable talent from the Middle East.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #1 */}
                        {/* QUESTION #2 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>2.</span> How can TaraTalent offer
                              cost-effective talent solutions?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              We leverage our workforce in regions with a lower
                              cost of living to provide competitive rates for
                              top-tier talent.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #2 */}
                        {/* QUESTION #3 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>3.</span> What types of talent does
                              TaraTalent offer?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <ul className="simple-list">
                              <li className="list-item">
                                <p>
                                  We offer a wide range of talent, including
                                  full-stack developers, UI/UX designers, and
                                  more, catering to various tech-related roles.
                                </p>
                              </li>
                              <li className="list-item">
                                <p>
                                  TaraTalent provides a diverse array of
                                  opportunities in the tech industry, covering
                                  various domains such as web app development,
                                  DevOps, software testing, mobile app
                                  development, AI/machine learning, UI/UX design
                                  and building architecture.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #3 */}
                        {/* QUESTION #4 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>4.</span> What engagement model do we offer?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              We follow a staff augmentation model, seamlessly
                              integrating our talent with your existing teams.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #4 */}
                        {/* QUESTION #5 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>5.</span> How does TaraTalent ensure
                              timezone alignment?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              We match talent with clients in compatible
                              timezones, ensuring smooth collaboration and
                              communication.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #5 */}
                        {/* QUESTION #6 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>6.</span> Can startups hire senior talent
                              through TaraTalent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Absolutely! We connect startups with experienced
                              senior professionals, allowing them to benefit
                              from seasoned expertise.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #6 */}
                        {/* QUESTION #7 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>7.</span> Do you provide continuous support
                              to your talents?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Yes, we have a dedicated team that supports our
                              talents even after they are hired, helping them
                              succeed in their roles.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #7 */}
                        {/* QUESTION #8 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>8.</span> Is TaraTalent committed to privacy
                              and copyright protection?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Yes, we prioritize the protection of intellectual
                              property and personal information, maintaining a
                              strict commitment to privacy and copyright.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #8 */}
                        {/* QUESTION #9 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>9.</span> How are payments handled for
                              talent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              We make it easy for clients to transfer payments
                              every month, Salaries are deposited into an
                              account in the European Union, providing a
                              hassle-free and compliant payment process.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #9 */}
                        {/* QUESTION #10 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>10.</span> What concerns do CEOs and company
                              leaders typically have when hiring talent through
                              traditional methods?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              CEOs and company leaders often worry about the
                              administrative hassles, employment-related
                              obligations, and legal complexities that come with
                              hiring talent directly. They may also have
                              concerns about handling salary payments and
                              ensuring compliance with local regulations.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #10 */}
                        {/* QUESTION #11 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>11.</span> How does TaraTalent alleviate
                              these concerns for CEOs and company leaders?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              TaraTalent provides a solution that takes care of
                              all these worries. When you partner with us, our
                              talent becomes our employees, and we handle all
                              administrative tasks.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #11 */}
                        {/* QUESTION #12 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>12.</span> What specific administrative
                              tasks and obligations does TaraTalent manage on
                              behalf of CEOs and company leaders?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              TaraTalent manages various administrative tasks,
                              including handling employment contracts, managing
                              vacations, sick leaves, maternity/paternity
                              leaves, and ensuring compliance with local labor
                              laws. This allows CEOs to focus solely on their
                              {`project's`} success.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #12 */}
                        {/* QUESTION #13 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>13.</span> What is {`TaraTalent's`} trial
                              period policy for new talent placements?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              TaraTalent offers a one-month free trial period.
                              If {`you're`} not satisfied with the talent within
                              this period, you can cancel the contract without
                              any financial obligation.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #13 */}
                        {/* QUESTION #14 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>14.</span> How does TaraTalent handle
                              contract cancellations?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              For all contract cancellations, TaraTalent
                              requires a two-week notice period, applicable both
                              during and after the trial period, to ensure a
                              smooth transition without any additional
                              penalties.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #14 */}
                        {/* QUESTION #15 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>15.</span> Can we replace a talent if{" "}
                              {`they're`} not a good fit?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Yes, if the talent provided by TaraTalent does not
                              meet your expectations, we offer the option to
                              replace them with another qualified professional
                              to ensure a perfect match for your project.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #15 */}
                        {/* QUESTION #16 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>16.</span> How can I get started with
                              TaraTalent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Getting started with TaraTalent is easy. Simply
                              reach out to us through our website, and our team
                              will guide you through the process of finding the
                              right talent for your needs. {`We'll`} schedule a
                              consultation meeting to discuss your requirements
                              and address any concerns you may have about the
                              hiring process.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #16 */}
                      </div>{" "}
                      {/* END CATEGORY ANSWERS */}
                    </li>{" "}
                    {/* END QUESTIONS CATEGORY #1 */}
                    {/* QUESTIONS CATEGORY #1 */}
                    <li
                      className={
                        isActive.key == 2
                          ? "accordion-item is-active"
                          : "accordion-item"
                      }
                      onClick={() => handleToggle(2)}
                    >
                      {/* CATEGORY HEADER */}
                      <div className="accordion-thumb">
                        <h4 className="s-28 w-700">Talent Queries</h4>
                      </div>
                      {/* CATEGORY ANSWERS */}
                      <div
                        className="accordion-panel"
                        style={{
                          display: `${isActive.key == 2 ? "block" : "none"}`,
                        }}
                      >
                        {/* QUESTION #1 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>1.</span> What qualifications do I need to
                              become a TaraTalent member?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              We value top-notch skills and experience. While
                              requirements may vary depending on the role, we
                              typically look for professionals with a strong
                              track record in their field, extensive experience
                              and a commitment to excellence.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #1 */}
                        {/* QUESTION #2 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>2.</span> How does the selection process
                              work?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Our selection process is rigorous but fair. It
                              typically involves an English language proficiency
                              test, HR assessments, technical tests, and
                              practical assignments to evaluate your skills and
                              compatibility for opportunities.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #2 */}
                        {/* QUESTION #3 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>3.</span> Is there a cost to join TaraTalent
                              as a talent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              No, there is no cost to join TaraTalent. Our
                              platform is designed to connect talents with
                              opportunities, and we do not charge any fees to
                              talents.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #3 */}
                        {/* QUESTION #4 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>4.</span> Is there room for career growth
                              and development?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Absolutely! We offer continuous opportunities for
                              professional growth, including mentorship,
                              training, and specialized courses to help you
                              thrive in your career.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #4 */}
                        {/* QUESTION #5 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>5.</span> Can I choose my work location and
                              schedule?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Yes, we offer remote work opportunities, allowing
                              you to choose your work location and schedule. We
                              believe in giving you the flexibility to balance
                              work and life.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #5 */}
                        {/* QUESTION #6 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>6.</span> Do I have to handle administrative
                              tasks like contracts and payments?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              No, we handle administrative tasks on your behalf.
                              You can focus on your work while we take care of
                              contracts, payments, insurance, and compliance
                              with local regulations.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #6 */}
                        {/* QUESTION #7 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>7.</span> How and when do I get paid?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              At TaraTalent, we ensure that you receive your
                              salary comfortably and on time. We pay salaries in
                              your local currency, providing you with a
                              competitive income that significantly surpasses
                              local standards. Payments are made on a monthly
                              basis, allowing you to enjoy financial stability
                              while focusing on your work. Additionally, we take
                              care of insurance coverage for your peace of mind.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #7 */}
                        {/* QUESTION #8 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>8.</span> What if I need technical support
                              while working remotely?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Your success is our priority. TaraTalent offers
                              continuous technical support to assist you in your
                              projects. Our dedicated team is here to ensure you
                              have the assistance you need.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #8 */}
                        {/* QUESTION #9 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>9.</span> What facilities do you provide for
                              remote work?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              At TaraTalent, we offer a range of facilities to
                              ensure your success while working remotely. These
                              include high-speed internet access, modern work
                              infrastructure, flexible workspaces, and
                              continuous technical support. {`We're`} committed
                              to creating an optimal work environment for you,
                              wherever you choose to work.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #9 */}
                        {/* QUESTION #10 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>10.</span> How do we handle insurance and
                              payment processes for remote talent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              We simplify administrative hassles by providing
                              insurance coverage and salary payments in your
                              local currency. You can focus on your work,
                              knowing that your financial security is taken care
                              of.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #10 */}
                        {/* QUESTION #11 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>11.</span> Can I choose where I work while
                              being part of TaraTalent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Absolutely! We offer the flexibility to work from
                              anywhere, whether {`it's`} the comfort of your
                              home, a cozy café, a scenic destination, or even
                              one of our office spaces if you prefer a more
                              traditional work environment. Embrace the digital
                              nomad lifestyle and find your ideal work setting.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #11 */}
                        {/* QUESTION #12 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>12.</span> How do we support work-life
                              balance for remote workers?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Work-life balance is essential, and we encourage
                              it. Our remote work opportunities allow you to set
                              your own schedule, ensuring you have time for both
                              your professional and personal life.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #12 */}
                        {/* QUESTION #13 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>13.</span> How do I join TaraTalent as a
                              talent?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Joining TaraTalent is easy. Visit our website and
                              fill out the talent application form. Our team
                              will review your application, and if you meet our
                              criteria, {`we'll`} connect you with exciting
                              opportunities.
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #13 */}
                      </div>{" "}
                      {/* END CATEGORY ANSWERS */}
                    </li>{" "}
                  </ul>
                </div>{" "}
                {/* END QUESTIONS ACCORDION */}
                {/* MORE QUESTIONS LINK */}
                <div className="more-questions">
                  <div className="more-questions-txt bg--white-400 r-100">
                    <p className="p-lg">
                      Have any questions?{" "}
                      <Link href="/contact" className="color--theme">
                        Get in Touch
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>
      </Layout>
    </>
  );
}
