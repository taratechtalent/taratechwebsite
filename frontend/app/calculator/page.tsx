/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

export const services = [
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

import { useState } from "react";
import Layout from "../components/layout/Layout";

export default function Book() {
  const [finalPrice, setFinalPrice] = useState("0 K€/y");
  const [finalCount, setFinalCount] = useState(0);
  const [info, setInfo] = useState(0);
  const calculate = () => {
    let start = 0;
    let end = 0;
    let count = 0;
    // info?.components?.map((item: any) => {
    //   const level = services
    //     .filter(
    //       (service) => service.value == item.selectedInfo.selectedService
    //     )[0]
    //     .levels.filter(
    //       (level) => level.name == item.selectedInfo.selectedLevel
    //     )[0];

    //   start += level.start * item.selectedInfo.selectedCount || 0;
    //   end += level.end * item.selectedInfo.selectedCount || 0;
    //   count += parseInt(item.selectedInfo.selectedCount);
    // });
    setFinalPrice(` ( ${start} - ${end} ) K€/y `);
    setFinalCount(count);
  };

  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: any) => {
    setActiveIndex(index);
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
                                <p>Try our Pricing calculator </p>
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
                            {/* TAB-2 CONTENT */}
                            <div
                              id="tab-2"
                              className={
                                activeIndex === 1
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
