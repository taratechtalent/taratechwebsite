/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Resume from "./resume";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [description, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const sendRequest = () => {
    setShowAlert(false);
    setShowError(false);

    const data = {
      name,
      email,
      description,
      linkedIn,
    };
    setLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}talent`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        debugger;
        if (!response.ok) {
          throw new Error("Sorry, we could not save your request");
        }
        setShowAlert(true);
        setEmail("");
        setName("");
        setMessage("");
        setLinkedIn("");
      })
      .catch((error) => {
        setShowError(true);
        debugger;
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section className="pt-100 ws-wrapper content-section">
            <div className="container">
              <div className="bc-1-wrapper bg--02 bg--fixed r-16">
                <div className="section-overlay">
                  <div className="row d-flex align-items-center">
                    {/* TEXT BLOCK */}
                    <div className="col-md-6 order-last order-md-2">
                      <div className="txt-block left-column wow fadeInRight">
                        {/* Section ID */}
                        {/* Title */}
                        <h2 className="s-46 w-700">
                          Join to our Talent network
                        </h2>
                        {/* Text */}
                      </div>
                    </div>
                    {/* END TEXT BLOCK */}
                    {/* IMAGE BLOCK */}
                    <div className="col-md-6 order-first order-md-2">
                      <div className="img-block right-column wow fadeInLeft">
                        <img
                          className="img-fluid   rounded-lg"
                          src="/images/talentJoin.png"
                          alt="content-image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* End section overlay */}
              </div>
              {/* End content wrapper */}
            </div>
            {/* End container */}
          </section>
          <section
            id="contacts-1"
            className="pb-50 inner-page-hero contacts-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title text-center mb-80">
                    {/* Title */}
                    <h2 className="s-52 w-700">Introduce your self</h2>
                    {/* Text */}

                    <p className="p-lg">
                      We will collect all information about you from your
                      linkedin profile, so please keep it update
                    </p>
                  </div>
                </div>
              </div>
              {/* CONTACT FORM */}
              <div className="row justify-content-center">
                <div className="col-md-11 col-lg-10 col-xl-8">
                  <div className="form-holder">
                    <form name="contactform" className="row contact-form">
                      {/* Contact Form Input */}
                      <div className="col-md-12">
                        <p className="p-lg">Your Full Name: </p>
                        <input
                          type="text"
                          name="name"
                          className="form-control name"
                          placeholder="Your Name*"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">LinkedIn address: </p>
                        <input
                          type="text"
                          name="name"
                          className="form-control name"
                          placeholder="https://www.linkedin.com/in/"
                          value={linkedIn}
                          onChange={(e) => setLinkedIn(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">Your Email Address: </p>
                        <span></span>
                        <input
                          type="text"
                          name="email"
                          className="form-control email"
                          placeholder="Email Address*"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">Your Resume: </p>

                        <Resume
                          resumeFile={resumeFile}
                          setResumeFile={setResumeFile}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">Tell us more if you want</p>

                        <textarea
                          className="form-control message"
                          name="message"
                          rows={6}
                          placeholder="Every thing you think that make us know you better. "
                          value={description}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      {/* Contact Form Button */}
                      <div className="col-md-12 mt-15 form-btn text-right">
                        <button
                          type="button"
                          className="btn btn--theme hover--theme submit "
                          onClick={sendRequest}
                        >
                          <div className="flex items-center">
                            {loading && (
                              <div
                                className="spinner-grow spinner-grow-sm !mr-6"
                                role="status"
                              >
                                <span className="sr-only"></span>
                              </div>
                            )}
                            Register In our Talent Network
                          </div>
                        </button>
                      </div>
                      {showAlert && (
                        <div className={`col-lg-12 contact-form-msg } `}>
                          <div
                            className={`alert alert-success text-center fadeDiv ${
                              showAlert ? "show" : ""
                            }  `}
                            role="alert"
                          >
                            Registration Done! we will call you ASAP
                          </div>
                        </div>
                      )}

                      {showError && (
                        <div className={`col-lg-12 contact-form-msg } `}>
                          <div
                            className={`alert alert-danger text-center`}
                            role="alert"
                          >
                            {errorMessage}
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
              {/* END CONTACT FORM */}
            </div>
            {/* End container */}
          </section>
          {/* END CONTACTS-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* NEWSLETTER-1
			============================================= */}
        </div>
      </Layout>
    </>
  );
}
