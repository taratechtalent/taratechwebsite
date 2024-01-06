/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MyContext from "../context";
import { SelectServiceItem, services } from "./SelectServiceItem";

export default function Book() {
  const { info, setInfo } = useContext(MyContext);
  const [finalPrice, setFinalPrice] = useState("0 K€/y");
  const [finalCount, setFinalCount] = useState(0);
  const calculate = () => {
    let start = 0;
    let end = 0;
    let count = 0;
    info?.components?.map((item: any) => {
      const level = services
        .filter(
          (service) => service.value == item.selectedInfo.selectedService
        )[0]
        .levels.filter(
          (level) => level.name == item.selectedInfo.selectedLevel
        )[0];

      start += level.start * item.selectedInfo.selectedCount || 0;
      end += level.end * item.selectedInfo.selectedCount || 0;
      count += parseInt(item.selectedInfo.selectedCount);
    });
    setFinalPrice(` ( ${start} - ${end} ) K€/y `);
    setFinalCount(count);
  };

  // const manageServiceItem = (serviceIndex: any, selectedInfo: any) => {
  //   const result = serviceItems.map((item: any) => {
  //     if (item.id == serviceIndex) {
  //       item.selectedInfo = selectedInfo;
  //     }
  //     return item;
  //   });
  //   setServiceItems(result);
  // };

  const addServiceitem = () => {
    setInfo({
      components: [
        ...info.components,
        {
          index: info.components.length + 1,
          selectedInfo: {},
          component: (
            <SelectServiceItem
              key={info.components.length + 1}
              index={info.components.length + 1}
            />
          ),
        },
      ],
    });
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

  const clearList = () => {
    setInfo({
      components: [],
    });
  };

  useEffect(() => {
    calculate();
  }, [info, calculate]);

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
                <div className="col-sm-12 col-md-3 wow fadeInUp text-center justify-center flex ml-20">
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
                                      {info?.components?.length > 0 && (
                                        <div>
                                          <div className="separator-line">
                                            Selected Talent List
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-12">
                                              <table className="table text-center">
                                                <thead>
                                                  <tr>
                                                    <th
                                                      style={{ width: "22%" }}
                                                    >
                                                      Service
                                                    </th>
                                                    <th
                                                      style={{ width: "22%" }}
                                                    >
                                                      Level
                                                    </th>
                                                    <th
                                                      style={{ width: "22%" }}
                                                    >
                                                      Count
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {info?.components?.map(
                                                    (item: any) => {
                                                      return (
                                                        <tr key={item.id}>
                                                          <th
                                                            scope="row"
                                                            className="color--black"
                                                          >
                                                            {
                                                              item.selectedInfo
                                                                .selectedService
                                                            }
                                                          </th>
                                                          <td className="color--black">
                                                            {
                                                              item.selectedInfo
                                                                .selectedLevel
                                                            }
                                                          </td>
                                                          <td className="color--black">
                                                            {
                                                              item.selectedInfo
                                                                .selectedCount
                                                            }
                                                          </td>
                                                        </tr>
                                                      );
                                                    }
                                                  )}
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      )}
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
                                      {info?.components?.map(
                                        (item: any) => item.component
                                      )}
                                    </div>
                                    <div className="col-sm-12">
                                      <button
                                        className=" r-04 btn--theme hover--theme !text-xs pt-2 pb-2 !pr-6 !pl-6 "
                                        onClick={addServiceitem}
                                      >
                                        + Add{" "}
                                        <b>
                                          {info?.components?.length > 0
                                            ? "next"
                                            : "first"}
                                        </b>{" "}
                                        talent
                                      </button>
                                    </div>
                                    <div className="col-sm-12 text-right">
                                      {info?.components?.length > 0 && (
                                        <button
                                          className="r-04 btn--theme hover--theme pt-2 pb-2 !pr-6 !pl-6"
                                          onClick={() => calculate()}
                                        >
                                          calculate
                                        </button>
                                      )}
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="separator-line">
                                        Total price
                                      </div>
                                      <div className="row">
                                        <div className="col-sm-7">
                                          Estimate price for your selection
                                        </div>
                                        <div className="col-sm-2 flex align-middle">
                                          Count : <b>{finalCount}</b>
                                        </div>
                                        <div className="col-sm-3 text-center flex">
                                          Price: <b>{finalPrice}</b>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mt-60 flex justify-start ">
                                      {info?.components?.length > 0 && (
                                        <button
                                          className="btn r-04 btn-danger pt-2 pb-2 !pr-6 !pl-6"
                                          onClick={() => clearList()}
                                        >
                                          Clear this List
                                        </button>
                                      )}
                                    </div>{" "}
                                    <div className="col-sm-12 col-md-6 mt-60 flex justify-end">
                                      <button
                                        className=" r-04 btn--theme hover--theme pt-2 pb-2 !pr-6 !pl-6"
                                        onClick={() => setActiveIndex(1)}
                                      >
                                        Submit this List
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
