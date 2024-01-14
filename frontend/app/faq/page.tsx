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
                  <h2 className="s-52 w-700">Questions &amp; Answers</h2>
                  <p className="p-lg">
                    Some important question for our talents
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
                        <h4 className="s-28 w-700">Talent Questions</h4>
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
                                  development, AI/machine learning, UI/UX
                                  design, and digital art.
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
                      </div>{" "}
                      {/* END CATEGORY ANSWERS */}
                    </li>{" "}
                    {/* END QUESTIONS CATEGORY #1 */}
                    {/* QUESTIONS CATEGORY #2 */}
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
                        <h4 className="s-28 w-700">Client questions</h4>
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
                              <span>1.</span> Sign up and manage your account
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <ol className="digit-list">
                              <li className="list-item">
                                <p>
                                  Curabitur ac dapibus libero eu congue
                                  tristique neque
                                </p>
                              </li>
                              <li className="list-item">
                                <p>
                                  Sagittis congue augue egestas volutpat egestas
                                </p>
                              </li>
                              <li className="list-item">
                                <p>An aliquam justo suscipit congue augue</p>
                              </li>
                              <li className="list-item">
                                <p>Gestas integer congue a lectus porta</p>
                              </li>
                            </ol>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #1 */}
                        {/* QUESTION #2 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>2.</span> Manage account settings
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit egestas magna ipsum vitae purus
                              congue and efficitur ipsum primis in cubilia
                              laoreet augue egestas luctus donec and curabitur
                              dapibus
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #2 */}
                        {/* QUESTION #3 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>3.</span> Change language or location
                              settings
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Sapien egestas, congue gestas posuere cubilia
                              congue ipsum mauris lectus laoreet gestas neque
                              pulvinar vitae auctor eros dolor luctus placerat a
                              magna cursus congue magna nihil mpedit ligula
                              congue. Maecenas gravida porttitor nunc, quis
                              vehicula magna luctus tempor. Quisque vel laoreet
                              turpis. Viverra augue augue eget, dictum tempor
                              diam. Sed pulvinar a consectetur nibh, imperdiet
                              varius viverra
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #3 */}
                        {/* QUESTION #4 */}
                        <div className="accordion-panel-item mb-35">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>4.</span> Troubleshoot account issues
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              An augue cubilia laoreet and magna suscipit
                              egestas magna ipsum purus ipsum primis and augue
                              ultrice ligula egestas suscipit lectus gestas
                              integer congue a lectus porta phasellus neque
                              blandit tristique
                            </p>
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit egestas and magna ipsum vitae
                            </p>
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas and
                              magna suscipit egestas magna ipsum vitae efficitur
                              purus congue ipsum primis in cubilia laoreet augue
                              egestas luctus donec and curabitur dapibus
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #4 */}
                        {/* QUESTION #5 */}
                        <div className="accordion-panel-item">
                          {/* Question */}
                          <div className="faqs-2-question">
                            <h5 className="s-22 w-700">
                              <span>5.</span> Manage accessibility settings
                            </h5>
                          </div>
                          {/* Answer */}
                          <div className="faqs-2-answer color--grey">
                            {/* Text */}
                            <p>
                              Sapien egestas, congue gestas posuere cubilia
                              congue ipsum mauris lectus laoreet at gestas neque
                              cubilia vitae auctor eros dolor luctus placerat a
                              magna cursus congue magna nihil mpedit ligula
                              congue. Maecenas gravida porttitor nunc, quis
                              vehicula magna luctus tempor. Quisque vel laoreet
                              turpis augue
                            </p>
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit egestas and magna ipsum and vitae
                              purus efficitur ipsum primis in cubilia laoreet
                              tempor gravida sapien cursus congue magna purus
                              quaerat
                            </p>
                          </div>
                        </div>{" "}
                        {/* END QUESTION #5 */}
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
