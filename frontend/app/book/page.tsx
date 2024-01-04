/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
{
  /* <option value="web">
Web App Development
</option>
<option value="mobile">
Mobile App Development
</option>
<option value="devops">
UI/UX Design
</option>{" "}
<option value="devops">
Devops
</option>{" "}
<option value="devops">
AI/Machine Learning
</option>{" "}
<option value="devops">
Digital Art
</option>{" "}
<option value="qa">
Software testing & QA
</option> */
}

const services = [
  {
    name: "Web App Development",
    value: "web",
    levels: [
      {
        name: "Senior",
        start: 70,
        end: 82,
      },
      {
        name: "Mid-Level",
        start: 60,
        end: 70,
      },
      {
        name: "Junior",
        start: 60,
        end: 70,
      },
    ],
  },
  {
    name: "Mobile App Development",
    value: "mobile",
    levels: [
      {
        name: "Senior",
        start: 76,
        end: 65,
      },
      {
        name: "Mid-Level",
        start: 60,
        end: 65,
      },
      {
        name: "Junior",
        start: 55,
        end: 60,
      },
    ],
  },
  {
    name: "UI/UX Design",
    value: "ui",
    levels: [
      {
        name: "Senior",
        start: 60,
        end: 70,
      },
      {
        name: "Mid-Level",
        start: 55,
        end: 60,
      },
      {
        name: "Junior",
        start: 48,
        end: 55,
      },
    ],
  },
];

export default function Book() {
  const [serviceItems, setServiceItems] = useState([
    <SelectServiceItem key={1} />,
  ]);

  const addServiceitem = () => {
    setServiceItems([
      <SelectServiceItem key={serviceItems.length + 1} />,
      ...serviceItems,
    ]);
  };
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <Layout
        headerStyle0={1}
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
                                <p>Book a call </p>
                              </li>
                              {/* TAB-3 LINK */}
                              <li
                                className={
                                  activeIndex === 2
                                    ? "tab-link ico-45 r-16 current"
                                    : "tab-link ico-45 r-16"
                                }
                                onClick={() => handleOnClick(2)}
                              >
                                <div className="tab-link-ico">
                                  <span className="flaticon-price-label" />
                                </div>
                                <p>Try our Pricing calculator</p>
                              </li>
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
                                        <h3 className="s-32 w-700">
                                          Book a Call
                                        </h3>
                                        <p className="p-md">
                                          Thank you for reaching out. Please
                                          provide your contact information so we
                                          can arrange a meeting with our
                                          specialist.
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
                                          placeholder="your fullname"
                                          value={name}
                                          onChange={(e) =>
                                            setName(e.target.value)
                                          }
                                        />
                                      </div>{" "}
                                      <div className="col-md-12">
                                        <p className="p-sm input-header">
                                          Phone
                                        </p>
                                        <input
                                          className="form-control text"
                                          type="phone"
                                          name="phone"
                                          placeholder="A phone number to can call you"
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
                                          placeholder="An email to can contact you"
                                          value={email}
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                        />
                                      </div>{" "}
                                      {/* Form Input */}
                                      {/* Reset Password Link */}
                                      {/* Form Submit Button */}
                                      <div className="col-md-12 col-sm-12 text-center">
                                        <button
                                          style={{ width: "30%" }}
                                          type="submit"
                                          className="btn btn--theme hover--theme submit"
                                        >
                                          Submit a request
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
                            <div
                              id="tab-2"
                              className={
                                activeIndex === 2
                                  ? "tab-content current"
                                  : "tab-content "
                              }
                            >
                              <div className="row ">
                                <div className="col-sm-12">
                                  <h5>
                                    Choose the technical expertise you need
                                  </h5>

                                  <div className="row mt-40 ">
                                    <div className="col-sm-12 mb-20">
                                      <h6>
                                        Select in which field you need a talent
                                      </h6>
                                    </div>
                                    <div className="col-sm-12">
                                      {serviceItems.map((item) => item)}
                                    </div>
                                    <div className="col-sm-12">
                                      <button
                                        className="btn r-04 btn--theme hover--theme "
                                        onClick={addServiceitem}
                                      >
                                        Add more talent
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
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

const SelectServiceItem = () => {
  const [selectedService, setSelectedService] = useState("web");
  const [selectedLevel, setSelectedLevel] = useState("Senior");
  const [selectedCount, setSelectedCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState("");
  const selectService = (service: any) => {
    setSelectedService(service);
  };
  const selectLevel = (level: any) => {
    setSelectedLevel(level);
  };
  const selectCount = (cnt: any) => {
    try {
      parseInt(cnt);
      setSelectedCount(cnt);
    } catch (error) {
      setSelectedCount(1);
    }
  };

  useEffect(() => {
    const level = services
      .filter((service) => service.value == selectedService)[0]
      .levels.filter((level) => level.name == selectedLevel)[0];

    const totalPrice = `${selectedCount * level.start} - ${
      selectedCount * level.end
    } k`;
    setTotalPrice(totalPrice);
  }, [selectedService, selectedLevel, selectedCount]);

  return (
    <div className="row m-4">
      <div className="col-sm-4">
        <select
          name="example"
          id="exampleDropdown"
          className="form-control"
          value={selectedService}
          onChange={(e) => selectService(e.target.value)}
        >
          {services.map((item) => {
            return (
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-sm-3">
        <select
          name="example"
          id="exampleDropdown"
          className="form-control"
          value={selectedLevel}
          onChange={(e) => selectLevel(e.target.value)}
        >
          {services
            .filter((service) => service.value == selectedService)[0]
            .levels.map((item) => {
              return (
                <option value={item.name} key={item.name}>
                  {item.name} : {`(${item.start}-${item.end}) k`}
                </option>
              );
            })}
        </select>
      </div>
      <div className="col-sm-1">
        <input
          type="text"
          className="form-control text-center"
          id="formGroupExampleInput"
          placeholder=""
          value={selectedCount}
          onChange={(e) => selectCount(e.target.value)}
        />
      </div>
      <div className="col-sm-3 flex items-center justify-center ">
        <span className="s-16 w-700">{totalPrice}</span>
      </div>
    </div>
  );
};
