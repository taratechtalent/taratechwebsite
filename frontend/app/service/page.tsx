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
          />
        </div>
        <hr className="divider" />

        <section
          id="faqs-4"
          className="gr--whitesmoke inner-page-hero pb-100 faqs-section division !pt-10"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                <div className="inner-page-title">
                  <h2 className="s-52 w-700">FAQ about our solution</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="accordion-wrapper">
                      <ul className="accordion">
                        {/* QUESTION #1 */}
                        <li
                          className={
                            isActive.key == 1
                              ? "accordion-item is-active"
                              : "accordion-item"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          {/* Question */}
                          <div className="accordion-thumb">
                            <h5 className="s-22 w-700">
                              What is Martex and how does it work?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div
                            className="accordion-panel color--grey"
                            style={{
                              display: `${
                                isActive.key == 1 ? "block" : "none"
                              }`,
                            }}
                          >
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit egestas magna ipsum vitae purus
                              congue efficitur and ipsum primis in cubilia
                              laoreet augue egestas luctus donec and curabitur
                              dapibus
                            </p>
                          </div>
                        </li>{" "}
                        {/* END QUESTION #1 */}
                        {/* QUESTION #2 */}
                        <li
                          className={
                            isActive.key == 2
                              ? "accordion-item is-active"
                              : "accordion-item"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          {/* Question */}
                          <div className="accordion-thumb">
                            <h5 className="s-22 w-700">
                              {` What's`} inside the package?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div
                            className="accordion-panel color--grey"
                            style={{
                              display: `${
                                isActive.key == 2 ? "block" : "none"
                              }`,
                            }}
                          >
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit egestas tempor magna undo ipsum
                              vitae purus and efficitur ipsum primis in cubilia
                              laoreet tempor gravida luctus neque purus ipsum
                              neque
                            </p>
                            {/* Text */}
                            <p>
                              Sapien egestas, congue gestas posuere cubilia
                              congue ipsum mauris lectus laoreet and gestas
                              neque vitae auctor dolor luctus placerat a magna
                              cursus congue magna mpedit ligula undo congue.
                              Maecenas agravida augue porttitor nunc, quis
                              vehicula magna luctus tempor. Quisque vel laoreet
                              turpis. Viverra augue, a augue tempor, dictum
                              tempor diam. Sed pulvinar a consectetur nibh,
                              imperdiet varius viverra
                            </p>
                          </div>
                        </li>{" "}
                        {/* END QUESTION #2 */}
                        {/* QUESTION #3 */}
                        <li
                          className={
                            isActive.key == 3
                              ? "accordion-item is-active"
                              : "accordion-item"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          {/* Question */}
                          <div className="accordion-thumb">
                            <h5 className="s-22 w-700">General settings</h5>
                          </div>
                          {/* Answer */}
                          <div
                            className="accordion-panel color--grey"
                            style={{
                              display: `${
                                isActive.key == 3 ? "block" : "none"
                              }`,
                            }}
                          >
                            {/* Text */}
                            <p>
                              An augue cubilia laoreet magna suscipit egestas
                              magna ipsum purus ipsum a primis an augue ultrice
                              ligula egestas suscipit lectus gestas integer
                              congue a lectus porta phasellus neque blandit
                              tristique
                            </p>
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit egestas and magna and vehicula
                            </p>
                            {/* Text */}
                            <p>
                              Sagittis congue augue egestas volutpat egestas
                              magna suscipit lipsum egestas magna ipsum vitae a
                              purus ipsum congue efficitur ipsum primis in
                              cubilia laoreet augue egestas luctus donec and
                              curabitur
                            </p>
                          </div>
                        </li>{" "}
                        {/* END QUESTION #3 */}
                        {/* QUESTION #4 */}
                        <li
                          className={
                            isActive.key == 4
                              ? "accordion-item is-active"
                              : "accordion-item"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          {/* Question */}
                          <div className="accordion-thumb">
                            <h5 className="s-22 w-700">
                              Which languages does Martex support?
                            </h5>
                          </div>
                          {/* Answer */}
                          <div
                            className="accordion-panel color--grey"
                            style={{
                              display: `${
                                isActive.key == 4 ? "block" : "none"
                              }`,
                            }}
                          >
                            {/* Text */}
                            <p>
                              An augue cubilia laoreet and magna suscipit
                              egestas magna ipsum purus ipsum primis undo augue
                              ultrice ligula egestas suscipit lectus gestas
                              integer congue a lectus porta tristique phasellus
                              neque a blandit and tristique justo aliquam justo
                              suscipit congue augue egestas volutpat egestas
                              magna sem congue
                            </p>
                            {/* Text */}
                            <p>
                              An augue cubilia laoreet and magna suscipit
                              egestas magna ipsum purus ipsum primis and augue
                              efficitur ligula egestas suscipit lectus gestas
                              integer congue a lectus porta phasellus neque
                            </p>
                          </div>
                        </li>{" "}
                        {/* END QUESTION #4 */}
                        {/* QUESTION #5 */}
                        <li
                          className={
                            isActive.key == 5
                              ? "accordion-item acc-last-item is-active"
                              : "accordion-item acc-last-item"
                          }
                          onClick={() => handleToggle(5)}
                        >
                          {/* Question */}
                          <div className="accordion-thumb">
                            <h5 className="s-22 w-700">
                              Automate testing with API
                            </h5>
                          </div>
                          {/* Answer */}
                          <div
                            className="accordion-panel color--grey"
                            style={{
                              display: `${
                                isActive.key == 5 ? "block" : "none"
                              }`,
                            }}
                          >
                            {/* Text */}
                            <ul className="simple-list">
                              <li className="list-item">
                                <p>
                                  Curabitur ac dapibus libero quisque eu congue
                                  tristique egestas phasellus blandit tristique
                                  justo aliquam. Aliquam vitae molestie quisque
                                  sapien justo, aliquet aliquam molestie sed
                                  purus undo venenatis tempor gravida eget
                                  lacinia. Augue aliquam a suscipit tincidunt
                                  tincidunt massa
                                </p>
                              </li>
                              <li className="list-item">
                                <p>
                                  Aliquam vitae molestie nunc. Quisque sapien
                                  justo, aliquet non molestie sed purus,
                                  venenatis
                                </p>
                              </li>
                              <li className="list-item">
                                <p>
                                  Sagittis congue augue egestas volutpat egestas
                                  magna suscipit egestas magna ipsum vitae an
                                  efficitur purus undo ipsum primis in cubilia
                                  laoreet augue egestas luctus donec curabitur
                                  dapibus libero
                                </p>
                              </li>
                            </ul>
                          </div>
                        </li>{" "}
                        {/* END QUESTION #5 */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
