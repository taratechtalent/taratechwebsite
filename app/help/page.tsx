/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
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
          <section
            id="faqs-4"
            className="gr--whitesmoke inner-page-hero pb-100 faqs-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">
                  <div className="inner-page-title">
                    <h2 className="s-52 w-700">Our Services</h2>
                  </div>
                </div>
              </div>
              {/* TABS NAVIGATION */}
              <div className="row">
                <div className="col">
                  <div className="tabs-nav tabs--theme clearfix">
                    <ul className="tabs-1">
                      {/* TAB-1 LINK */}
                      <li
                        className={
                          activeIndex === 1
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(1)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-mechanics" />
                        </div>
                        <p>Web App Development</p>
                      </li>
                      {/* TAB-2 LINK */}
                      <li
                        className={
                          activeIndex === 2
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(2)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-suit" />
                        </div>
                        <p>Mobile App Development</p>
                      </li>
                      {/* TAB-3 LINK */}
                      <li
                        className={
                          activeIndex === 3
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(3)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-price-label" />
                        </div>
                        <p>UI/UX Design</p>
                      </li>
                      {/* TAB-4 LINK */}
                      <li
                        className={
                          activeIndex === 4
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(4)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>Software testing & QA</p>
                      </li>
                      <li
                        className={
                          activeIndex === 5
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(5)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>Digital Art</p>
                      </li>
                      <li
                        className={
                          activeIndex === 6
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(6)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>AI/Machine Learning</p>
                      </li>
                      <li
                        className={
                          activeIndex === 7
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(7)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>Devops</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              {/* END TABS NAVIGATION */}
              {/* TABS CONTENT */}
              <div className="tabs-content">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/* TAB-1 CONTENT */}
                    <div
                      id="tab-1"
                      className={
                        activeIndex === 1
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <div className="fbox-wrapper text-center">
                        <div className="row d-flex align-items-center">
                          {/* FEATURE BOX #1 */}
                          <div className="col-md-6">
                            <div className="fbox-5 fb-1 bg--white-400 r-16 wow fadeInUp">
                              {/* Text */}
                              <div className="fbox-txt order-last order-md-2">
                                <h5 className="s-26 w-700">
                                  Marketing Integrations
                                </h5>
                                <p>
                                  Aliquam a augue suscipit luctus diam neque
                                  purus ipsum neque and dolor primis libero
                                </p>
                              </div>
                              {/* Image */}
                              <div className="fbox-5-img order-first order-md-2">
                                <img
                                  className="img-fluid light-theme-img"
                                  src="/images/f_06.png"
                                  alt="feature-image"
                                />
                                <img
                                  className="img-fluid dark-theme-img"
                                  src="/images/f_06_dark.png"
                                  alt="feature-image"
                                />
                              </div>
                            </div>
                          </div>{" "}
                          {/* END FEATURE BOX #1 */}
                          {/* FEATURE BOX #2 */}
                          <div className="col-md-6">
                            <div className="fbox-5 fb-2 bg--white-400 r-16 wow fadeInUp">
                              {/* Image */}
                              <div className="fbox-5-img">
                                <img
                                  className="img-fluid light-theme-img"
                                  src="/images/f_04.png"
                                  alt="feature-image"
                                />
                                <img
                                  className="img-fluid dark-theme-img"
                                  src="/images/f_04_dark.png"
                                  alt="feature-image"
                                />
                              </div>
                              {/* Text */}
                              <div className="fbox-txt">
                                <h5 className="s-26 w-700">
                                  Enhance Engagement
                                </h5>
                                <p>
                                  Aliquam a augue suscipit luctus diam neque
                                  purus ipsum neque and dolor primis libero
                                </p>
                              </div>
                            </div>
                          </div>{" "}
                          {/* END FEATURE BOX #2 */}
                        </div>{" "}
                        {/* End row */}
                      </div>{" "}
                    </div>{" "}
                    {/* END TAB-1 CONTENT */}
                    {/* TAB-2 CONTENT */}
                    <div
                      id="tab-2"
                      className={
                        activeIndex === 2
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <div className="accordion-wrapper">
                        <ul className="accordion">
                          {/* QUESTION #1 */}
                          <li
                            className={
                              isActive.key == 6
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(6)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Sign up and manage your account
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 6 ? "block" : "none"
                                }`,
                              }}
                            >
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
                                    Sagittis congue augue egestas volutpat
                                    egestas
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
                          </li>{" "}
                          {/* END QUESTION #1 */}
                          {/* QUESTION #2 */}
                          <li
                            className={
                              isActive.key == 7
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(7)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Manage account settings
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 7 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sapien egestas, congue gestas posuere cubilia
                                congue ipsum mauris lectus laoreet gestas neque
                                and vitae undo auctor dolor luctus placerat a
                                magna cursus congue magna mpedit ligula congue
                                maecenas gravida augue porttitor nunc, quis
                                vehicula magna luctus tempor. Quisque vel
                                laoreet turpis. Viverra augue, a augue tempor,
                                dictum tempor diam. Sed pulvinar a consectetur
                                nibh, imperdiet varius viverra
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #2 */}
                          {/* QUESTION #3 */}
                          <li
                            className={
                              isActive.key == 8
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(8)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Change language or location settings
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 8 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sapien egestas, congue gestas posuere cubilia
                                congue ipsum mauris lectus laoreet gestas neque
                                and vitae undo auctor dolor luctus placerat a
                                magna cursus congue magna mpedit ligula congue
                                maecenas gravida augue porttitor nunc, quis
                                vehicula magna luctus tempor. Quisque vel
                                laoreet turpis. Viverra augue, a augue tempor,
                                dictum tempor diam. Sed pulvinar a consectetur
                                nibh, imperdiet varius viverra
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #3 */}
                          {/* QUESTION #4 */}
                          <li
                            className={
                              isActive.key == 9
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(9)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Troubleshoot account issues
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 9 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                An augue cubilia laoreet and magna suscipit
                                egestas magna ipsum purus ipsum primis an augue
                                ultrice ligula egestas suscipit lectus gestas
                                integer congue a lectus porta tristique
                                phasellus neque a blandit and tristique justo
                                aliquam justo suscipit congue augue egestas
                                volutpat egestas magna sem congue
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
                              isActive.key == 10
                                ? "accordion-item acc-last-item is-active"
                                : "accordion-item acc-last-item"
                            }
                            onClick={() => handleToggle(10)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Manage accessibility settings
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 10 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sapien egestas, congue gestas posuere cubilia
                                congue ipsum mauris lectus laoreet gestas neque
                                and vitae undo auctor dolor luctus placerat a
                                magna cursus congue magna mpedit ligula congue
                                maecenas gravida augue porttitor nunc, quis
                                vehicula magna luctus tempor. Quisque vel
                                laoreet turpis. Viverra augue, a augue tempor,
                                dictum tempor diam. Sed pulvinar a consectetur
                                nibh, imperdiet varius viverra
                              </p>
                              {/* Text */}
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas and magna ipsum vitae
                                purus and efficitur ipsum primis in cubilia
                                laoreet tempor gravida
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #5 */}
                        </ul>
                      </div>
                    </div>{" "}
                    {/* END TAB-2 CONTENT */}
                    {/* TAB-3 CONTENT */}
                    <div
                      id="tab-3"
                      className={
                        activeIndex === 3
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <div className="accordion-wrapper">
                        <ul className="accordion">
                          {/* QUESTION #1 */}
                          <li
                            className={
                              isActive.key == 11
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(11)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                How much does Martex cost?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 11 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                An augue cubilia laoreet and magna suscipit
                                egestas magna ipsum purus ipsum primis undo
                                augue ultrice ligula egestas suscipit lectus
                                gestas integer congue a lectus porta neque
                                blandit tristique
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #1 */}
                          {/* QUESTION #2 */}
                          <li
                            className={
                              isActive.key == 12
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(12)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                I {`didn't`} receive the license key after
                                purchased
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 12 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <ul className="simple-list">
                                <li className="list-item">
                                  <p>
                                    Curabitur ac dapibus libero. Quisque eu
                                    congue tristique neque. Phasellus blandit
                                    tristique aliquam justo undo. Aliquam vitae
                                    molestie nunc. Quisque sapien justo, aliquet
                                    non molestie purus tempor
                                  </p>
                                </li>
                                <li className="list-item">
                                  <p>
                                    Sagittis congue augue egestas volutpat
                                    egestas magna suscipit egestas magna ipsum
                                    vitae purus undo efficitur ipsum primis in
                                    cubilia laoreet augue egestas luctus donec
                                    curabitur dapibus libero
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #2 */}
                          {/* QUESTION #3 */}
                          <li
                            className={
                              isActive.key == 13
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(13)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Do you offer discounts for annual plans?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 13 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <ul className="simple-list">
                                <li className="list-item">
                                  <p>
                                    Curabitur ac dapibus libero. Quisque eu
                                    congue justo undo tristique neque phasellus
                                    and blandit tristique aliquam. Aliquam vitae
                                    molestie nunc. Quisque sapien justo, aliquet
                                    non molestie purus tempor
                                  </p>
                                </li>
                                <li className="list-item">
                                  <p>
                                    Sagittis congue augue egestas volutpat
                                    egestas magna suscipit egestas magna ipsum
                                    vitae purus undo efficitur ipsum primis in
                                    cubilia laoreet augue egestas luctus donec
                                    curabitur dapibus libero
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #3 */}
                          {/* QUESTION #4 */}
                          <li
                            className={
                              isActive.key == 14
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(14)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                How safe is my data?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 14 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                An augue cubilia laoreet and magna suscipit
                                egestas magna an ipsum purus ipsum primis an
                                augue ultrice ligula egestas suscipit lectus
                                gestas integer congue a lectus porta tristique
                                phasellus neque a blandit undo tristique justo
                                aliquam justo suscipit congue augue egestas
                                volutpat egestas magna sem
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
                              isActive.key == 15
                                ? "accordion-item acc-last-item is-active"
                                : "accordion-item acc-last-item"
                            }
                            onClick={() => handleToggle(15)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                How to request a refund?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 15 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <ul className="simple-list">
                                <li className="list-item">
                                  <p>
                                    Curabitur ac dapibus libero. Quisque eu
                                    congue tristique
                                  </p>
                                </li>
                                <li className="list-item">
                                  <p>
                                    Congue tristique neque phasellus blandit
                                    tristique justo undo aliquam. Aliquam vitae
                                    molestie quisque sapien justo, aliquet non
                                    molestie purus tempor
                                  </p>
                                </li>
                                <li className="list-item">
                                  <p>
                                    Sagittis congue augue egestas volutpat
                                    egestas magna suscipit egestas magna ipsum
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #5 */}
                        </ul>
                      </div>
                    </div>{" "}
                    {/* END TAB-3 CONTENT */}
                    {/* TAB-4 CONTENT */}
                    <div
                      id="tab-4"
                      className={
                        activeIndex === 4
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <div className="accordion-wrapper">
                        <ul className="accordion">
                          {/* QUESTION #1 */}
                          <li
                            className={
                              isActive.key == 16
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(16)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                How do I get the error log?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 16 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas and magna ipsum vitae
                              </p>
                              {/* Text */}
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                and magna suscipit an egestas magna ipsum vitae
                                purus congue efficitur ipsum primis in cubilia
                                laoreet augue egestas luctus donec and curabitur
                                dapibus
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #1 */}
                          {/* QUESTION #2 */}
                          <li
                            className={
                              isActive.key == 17
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(17)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                I forgot my folder password, what should I do?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 17 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum vitae purus
                                congue efficitur ipsum primis in cubilia laoreet
                                augue egestas luctus donec and curabitur dapibus
                              </p>
                              {/* Text */}
                              <ol className="digit-list">
                                <li className="list-item">
                                  <p>Gestas integer congue a lectus porta</p>
                                </li>
                                <li className="list-item">
                                  <p>An aliquam justo suscipit congue augue</p>
                                </li>
                                <li className="list-item">
                                  <p>
                                    Sagittis congue augue egestas volutpat
                                    egestas
                                  </p>
                                </li>
                              </ol>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #2 */}
                          {/* QUESTION #3 */}
                          <li
                            className={
                              isActive.key == 18
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(18)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Limitations of folder password protection
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 18 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sapien egestas, congue gestas posuere cubilia
                                congue ipsum mauris lectus laoreet gestas neque
                                and vitae undo auctor dolor luctus placerat a
                                magna cursus congue magna mpedit ligula congue
                                maecenas gravida augue porttitor nunc, quis
                                vehicula magna luctus tempor. Quisque vel
                                laoreet turpis. Viverra augue, a augue tempor,
                                dictum tempor diam. Sed pulvinar a consectetur
                                nibh, imperdiet varius viverra
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #3 */}
                          {/* QUESTION #4 */}
                          <li
                            className={
                              isActive.key == 19
                                ? "accordion-item is-active"
                                : "accordion-item"
                            }
                            onClick={() => handleToggle(19)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                Import existing library
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 19 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                Sapien egestas, congue gestas posuere cubilia
                                congue ipsum mauris lectus laoreet gestas neque
                                and vitae undo auctor dolor luctus placerat a
                                magna cursus congue magna mpedit ligula congue
                                maecenas gravida augue porttitor nunc, quis
                                vehicula magna luctus tempor. Quisque vel
                                laoreet turpis. Viverra augue, a augue tempor,
                                dictum tempor diam. Sed pulvinar a consectetur
                                nibh, imperdiet varius viverra
                              </p>
                              {/* Text */}
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas and magna ipsum vitae
                                purus and efficitur ipsum primis in cubilia
                                laoreet tempor gravida
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #4 */}
                          {/* QUESTION #5 */}
                          <li
                            className={
                              isActive.key == 20
                                ? "accordion-item acc-last-item is-active"
                                : "accordion-item acc-last-item"
                            }
                            onClick={() => handleToggle(20)}
                          >
                            {/* Question */}
                            <div className="accordion-thumb">
                              <h5 className="s-22 w-700">
                                I lost my license. Can you send it to me?
                              </h5>
                            </div>
                            {/* Answer */}
                            <div
                              className="accordion-panel color--grey"
                              style={{
                                display: `${
                                  isActive.key == 20 ? "block" : "none"
                                }`,
                              }}
                            >
                              {/* Text */}
                              <p>
                                An augue cubilia laoreet and magna suscipit
                                egestas magna ipsum purus ipsum primis undo
                                augue ultrice ligula egestas suscipit lectus
                                gestas integer congue phasellus neque blandit
                                tristique
                              </p>
                              {/* Text */}
                              <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas and magna ipsum vitae
                              </p>
                            </div>
                          </li>{" "}
                          {/* END QUESTION #5 */}
                        </ul>
                      </div>
                    </div>{" "}
                    {/* END TAB-4 CONTENT */}
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TABS CONTENT */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END  FAQs-4 */}
          {/* BANNER-9
			============================================= */}
          <section
            id="banner-9"
            className="bg--02 py-70 x-border banner-section"
          >
            <div className="container">
              {/* BANNER-9 WRAPPER */}
              <div className="banner-7-wrapper">
                <div className="row justify-content-center d-flex align-items-center">
                  {/* BANNER-9 TEXT */}
                  <div className="col-md-7 col-xl-5">
                    <div className="banner-9-txt">
                      {/* Title */}
                      <h3 className="s-40 w-700">Join our network</h3>
                      {/* Text */}
                      <p className="p-lg">
                        Join Us in Crafting a Partnership Where Success Knows No
                        Bounds
                      </p>
                      {/* Button */}
                      <Link
                        href="/book"
                        className="btn r-04 btn--theme hover--theme"
                      >
                        Book a Consulant Call
                      </Link>
                    </div>
                  </div>
                  {/* BANNER-9 IMAGE */}
                  <div className="col-md-5 col-xl-5">
                    <div className="banner-9-img text-end">
                      <img
                        className="img-fluid rounded-full"
                        src="/images/contactus.png"
                        alt="banner-image"
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END BANNER-9 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>
        </div>
      </Layout>
    </>
  );
}
