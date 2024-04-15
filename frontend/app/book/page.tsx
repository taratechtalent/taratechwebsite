"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { usePathname, useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";
export default function Book() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: any) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const searchParams = useSearchParams();
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState(
    searchParams.get("service")
      ? `Regarding the results on the Quote page, you have selected a talent in ${searchParams.get(
          "service"
        )} service with a ${searchParams.get("level")} level.
        If you have any additional information to include, please feel free to share it here.

   


  `
      : ""
  );
  const router = useRouter();
  const arrangeCall = () => {
    setShowAlert(false);
    setShowError(false);
    const data = {
      name,
      position,
      email,
      request,
      company,
    };

    if (!data.name?.trim()) {
      setShowError(true);
      setErrorMessage("Please enter your name");
      return;
    }

    if (!data.company?.trim()) {
      setShowError(true);
      setErrorMessage("Please enter your company");
      return;
    }

    if (!data.position?.trim()) {
      setShowError(true);
      setErrorMessage("Please enter your position in the company");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setShowError(true);
      setErrorMessage("Please enter valid email");
      return;
    }

    if (!data.request?.trim()) {
      setShowError(true);
      setErrorMessage("Please enter something about your request");
      return;
    }

    setLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/client/request`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sorry, we could not save your request");
        }
        setShowAlert(true);
        setEmail("");
        setName("");
        setCompany("");
        setPosition("");
        setRequest("");
        router.push("https://calendly.com/tara-talent/consulting_meeting");
      })
      .catch((error) => {
        setShowError(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          <div
            id="login"
            className="bg--fixed contact-form division mt-40"
            style={{ color: "black" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <section
                    id="faqs-4"
                    className="gr--whitesmoke faqs-section division"
                    style={{ paddingTop: "100px !important" }}
                  >
                    <div className="container">
                      {/* SECTION TITLE */}
                      {/* TABS NAVIGATION */}
                      <div className="row wow fadeInLeft">
                        <div className="col">
                          <div className="tabs-nav tabs--theme clearfix">
                            <ul className="tabs-1">
                              <li
                                className={
                                  activeIndex === 1
                                    ? "tab-link ico-45 r-16 current"
                                    : "tab-link ico-45 r-16"
                                }
                                onClick={() => handleOnClick(1)}
                              >
                                <div
                                  className="tab-link-ico text-center"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/png_icons/meeting.png"
                                    style={{
                                      width: "60px",
                                      height: "60px",
                                      marginBottom: "15px",
                                    }}
                                  ></img>
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
                              <div className="row wow fadeInRight">
                                <div className="col-md-12 col-lg-12 ">
                                  {/* TITLE */}
                                  <div className="col-md-12">
                                    <div className="register-form-title">
                                      <p className="p-md">
                                        Thank you for reaching out.
                                      </p>
                                      <p>
                                        {" "}
                                        Please share your contact details to set
                                        up a meeting with our specialist
                                      </p>
                                    </div>
                                  </div>
                                  {/* LOGIN FORM */}
                                  <form
                                    name="contact-form"
                                    className="row sign-in-form"
                                  >
                                    {/* Google Button */}
                                    {/* Login Separator */}
                                    {/* Form Input */}
                                    <div className="col-md-12">
                                      <p className="p-sm input-header">Name</p>
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
                                        Company Name
                                      </p>
                                      <input
                                        className="form-control text"
                                        type="text"
                                        name="text"
                                        placeholder="Tell us the name of your company."
                                        value={company}
                                        onChange={(e) =>
                                          setCompany(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div className="col-md-12">
                                      <p className="p-sm input-header">
                                        Position
                                      </p>
                                      <input
                                        className="form-control text"
                                        type="text"
                                        name="text"
                                        placeholder="What's your role at the company? (e.g., CEO, CTO, Project Manager)"
                                        value={position}
                                        onChange={(e) =>
                                          setPosition(e.target.value)
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
                                        placeholder="Please enter an email address where we can contact you."
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                      />
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <p className="p-sm input-header">
                                        Feel free to share any thoughts or
                                        points {`you'd`} like to address ahead
                                        of our meeting.(Optional)
                                      </p>

                                      <textarea
                                        className="form-control message"
                                        name="message"
                                        rows={5}
                                        placeholder="Let us know your preferences to tailor our meeting to your needs. "
                                        value={request}
                                        onChange={(e) =>
                                          setRequest(e.target.value)
                                        }
                                      />
                                    </div>
                                    {/* Form Submit Button */}
                                    <div className="col-md-12 col-sm-12 text-center">
                                      <button
                                        onClick={arrangeCall}
                                        type="button"
                                        className="btn btn--theme hover--theme submit"
                                      >
                                        Schedule a Call
                                      </button>
                                    </div>
                                  </form>{" "}
                                  {/* END LOGIN FORM */}
                                </div>
                              </div>
                              {showAlert && (
                                <div
                                  className={`col-lg-12 contact-form-msg } `}
                                >
                                  <div
                                    className={`alert alert-success text-center fadeDiv ${
                                      showAlert ? "show" : ""
                                    }  `}
                                    role="alert"
                                  >
                                    Thank you for your comments, we wil call you
                                    soon
                                  </div>
                                </div>
                              )}

                              {showError && (
                                <div
                                  className={`col-lg-12 contact-form-msg } `}
                                >
                                  <div
                                    className={`alert alert-danger text-center`}
                                    role="alert"
                                  >
                                    {errorMessage}
                                  </div>
                                </div>
                              )}
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
