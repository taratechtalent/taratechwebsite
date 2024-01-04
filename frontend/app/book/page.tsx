/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";
export default function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <section
          id="features-11"
          className="pt-100 features-section division mt-80"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                  {/* Title */}
                  <h2 className="s-50 w-700">Our amazing Pricing Table</h2>
                  {/* Text */}
                  <p className="s-21 color--grey">
                    Affordable software developer beyond expectations in your
                    opinion
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURES-11 WRAPPER */}
            <div className="fbox-wrapper">
              <div className="row">
                {/* FEATURE BOX #1 */}
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/web app developement.png" />
                </div>{" "}
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/mobile app developement.png" />
                </div>{" "}
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/devops.png" />
                </div>{" "}
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/ui ux design.png" />
                </div>{" "}
                {/* END FEATURE BOX #6 */}
              </div>{" "}
              <div className="row mt-20">
                {/* FEATURE BOX #1 */}
                <div className="col-sm-12 col-md-1"></div>
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/QA .png" />
                </div>{" "}
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/digital art.png" />
                </div>{" "}
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex">
                  <img src="/images/book/ai machine learning.png" />
                </div>{" "}
                {/* END FEATURE BOX #6 */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END FEATURES-11 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </section>

        <div id="page" className="page font--jakarta mt-80">
          {/* LOGIN PAGE
============================================= */}
          <div id="login" className="bg--fixed login-1 login-section division">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                  <div className="register-page-form">
                    {/* TITLE */}
                    <div className="col-md-12">
                      <div className="register-form-title">
                        <h3 className="s-32 w-700">Book a Call</h3>
                        <p className="p-md">
                          Thank you for reaching out. Please provide your
                          contact information so we can arrange a meeting with
                          our specialist.
                        </p>
                      </div>
                    </div>
                    {/* LOGIN FORM */}
                    <form name="signinform" className="row sign-in-form">
                      {/* Google Button */}
                      {/* Login Separator */}
                      {/* Form Input */}
                      <div className="col-md-12">
                        <p className="p-sm input-header">Name</p>
                        <input
                          className="form-control text"
                          type="text"
                          name="name"
                          placeholder="your fullname"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>{" "}
                      <div className="col-md-12">
                        <p className="p-sm input-header">Phone</p>
                        <input
                          className="form-control text"
                          type="phone"
                          name="phone"
                          placeholder="A phone number to can call you"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-sm input-header">Email address</p>
                        <input
                          className="form-control email"
                          type="email"
                          name="email"
                          placeholder="An email to can contact you"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>{" "}
                      {/* Form Input */}
                      {/* Reset Password Link */}
                      {/* Form Submit Button */}
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn--theme hover--theme submit"
                        >
                          Submit a request
                        </button>
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="separator-line">
                          Or, If you want to see our price calculator
                        </div>
                      </div>
                      <div className="col-sm-12  text-center">
                        <Link
                          style={{ width: "50%" }}
                          href="/calculator"
                          className="btn btn--theme hover--theme submit"
                        >
                          Price calculator
                        </Link>
                      </div>
                    </form>{" "}
                    {/* END LOGIN FORM */}
                  </div>
                </div>
              </div>{" "}
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
