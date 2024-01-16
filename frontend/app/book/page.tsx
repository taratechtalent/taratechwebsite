/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Layout from "../components/layout/Layout";

export default function Book() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: any) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setMessage] = useState("");
  return (
    <>
      <Layout
        headerStyle0={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div id="page" className="page font--jakarta ">
          {/* LOGIN PAGE
============================================= */}
          <div id="login" className="bg--fixed login-1 login-section division">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <section
                    id="faqs-4"
                    className="gr--whitesmoke inner-page-hero  faqs-section division"
                  >
                    <div className="container">
                      {/* SECTION TITLE */}
                      {/* TABS NAVIGATION */}
                      <div className="row">
                        <div className="col">
                          <div className="tabs-nav tabs--theme clearfix">
                            <ul className="tabs-1">
                              {/* TAB-1 LINK */}

                              {/* TAB-2 LINK */}
                              <li
                                className={
                                  activeIndex === 1
                                    ? "tab-link ico-45 r-16 current"
                                    : "tab-link ico-45 r-16"
                                }
                                onClick={() => handleOnClick(1)}
                              >
                                <div className="tab-link-ico">
                                  <span className="flaticon-suit" />
                                </div>
                                <p>Schedule a Meeting </p>
                              </li>
                              {/* TAB-3 LINK */}

                              {/* TAB-4 LINK */}
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
                              <div className="row">
                                <div className="col-md-12 col-lg-12 ">
                                  <div className="register-page-form">
                                    {/* TITLE */}
                                    <div className="col-md-12">
                                      <div className="register-form-title">
                                        <p className="p-md">
                                          Thank you for reaching out.Please
                                          share your contact details to set up a
                                          meeting with our specialist.
                                        </p>
                                      </div>
                                    </div>
                                    {/* LOGIN FORM */}
                                    <form
                                      name="signinform"
                                      className="row sign-in-form"
                                    >
                                      {/* Google Button */}
                                      {/* Login Separator */}
                                      {/* Form Input */}
                                      <div className="col-md-12">
                                        <p className="p-sm input-header">
                                          Name
                                        </p>
                                        <input
                                          className="form-control text"
                                          type="text"
                                          name="name"
                                          placeholder="Please provide your full name."
                                          value={name}
                                          onChange={(e) =>
                                            setName(e.target.value)
                                          }
                                        />
                                      </div>{" "}
                                      <div className="col-md-12">
                                        <p className="p-sm input-header">
                                          Company Name:
                                        </p>
                                        <input
                                          className="form-control text"
                                          type="text"
                                          name="text"
                                          placeholder="Tell us the name of your company."
                                          value={phone}
                                          onChange={(e) =>
                                            setPhone(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="col-md-12">
                                        <p className="p-sm input-header">
                                          Position:
                                        </p>
                                        <input
                                          className="form-control text"
                                          type="text"
                                          name="text"
                                          placeholder="What's your role at the company? (e.g., CEO, CTO, Project Manager)"
                                          value={phone}
                                          onChange={(e) =>
                                            setPhone(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="col-md-12">
                                        <p className="p-sm input-header">
                                          Email address
                                        </p>
                                        <input
                                          className="form-control email"
                                          type="email"
                                          name="email"
                                          placeholder="Please enter a valid email address where we can contact you."
                                          value={email}
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                        />
                                      </div>{" "}
                                      <div className="col-md-12">
                                        <p className="p-sm input-header">
                                          How can we help? (Optional):
                                        </p>

                                        <textarea
                                          className="form-control "
                                          name="message"
                                          rows={5}
                                          placeholder="Let us know your preferences to tailor our meeting to your needs. "
                                          value={description}
                                          onChange={(e) =>
                                            setMessage(e.target.value)
                                          }
                                        />
                                      </div>
                                      {/* Form Submit Button */}
                                      <div className="col-md-12 col-sm-12 text-center">
                                        <button
                                          style={{ width: "25%" }}
                                          type="submit"
                                          className="btn btn--theme hover--theme submit"
                                        >
                                          Arrange a Call
                                        </button>
                                      </div>
                                    </form>{" "}
                                    {/* END LOGIN FORM */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END TAB-1 CONTENT */}
                            {/* TAB-2 CONTENT */}
                          </div>
                        </div>{" "}
                        {/* End row */}
                      </div>{" "}
                      {/* END TABS CONTENT */}
                    </div>{" "}
                    {/* End container */}
                  </section>
                </div>
              </div>

              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END LOGIN PAGE */}
        </div>
      </Layout>
    </>
  );
}
