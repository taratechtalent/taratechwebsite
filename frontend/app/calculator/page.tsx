/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Layout from "../components/layout/Layout";

export default function Book() {
  const [finalPrice, setFinalPrice] = useState("0 K€/y");
  const [finalCount, setFinalCount] = useState(0);
  const [info, setInfo] = useState(0);
  const [services, setService] = useState([
    {
      name: "Web App Development",
      value: "web",
      selected: true,
      index: 0,
    },
    {
      name: "Mobile App Development",
      value: "mobile",
      selected: false,
      index: 1,
    },
    {
      name: "UI/UX Design",
      value: "ui",
      selected: false,
      index: 2,
    },
    {
      name: "Digital Art",
      value: "art",
      selected: false,
      index: 3,
    },
    {
      name: "Software testing & QA",
      value: "qa",
      selected: false,
      index: 4,
    },
    {
      name: "Devops",
      value: "devops",
      selected: false,
      index: 5,
    },
    {
      name: "AI/Machine Learning",
      value: "ai",
      selected: false,
      index: 6,
    },
  ]);

  const [levels, setLevels] = useState(["Junior", "Mid-level", "Senior"]);
  const [selectedLevel, setSelectedLevel] = useState(["Junior"]);

  const [activeIndex, setActiveIndex] = useState(1);
  const selectService = (index: any) => {
    setActiveIndex(index);
  };

  const selectLevel = (level: string) => {
    let result = [...selectedLevel];
    if (selectedLevel.includes(level)) {
      result = result.filter((item) => item != level);
    } else {
      result.push(level);
    }
    setSelectedLevel(result);
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
        <div id="page" className="page font--jakarta  ">
          {/* LOGIN PAGE
============================================= */}
          <div
            id="login"
            className="bg--fixed login-1 login-section division !mt-20"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <section
                    id="faqs-4"
                    className="gr--whitesmoke faqs-section division"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="separator-line">
                            Choose Service for Talent
                          </div>
                          <div className="tabs-nav tabs--theme clearfix">
                            <ul className="tabs-1">
                              {/* TAB-1 LINK */}

                              {/* TAB-2 LINK */}
                              {services.map((item) => {
                                return (
                                  <li
                                    key={item.name}
                                    className={
                                      activeIndex === item.index
                                        ? "tab-link ico-45 r-16 current"
                                        : "tab-link ico-45 r-16"
                                    }
                                    onClick={() => selectService(item.index)}
                                  >
                                    <div className="tab-link-ico">
                                      <span className="flaticon-suit" />
                                    </div>
                                    <p>{item.name} </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="separator-line">Talent Level</div>
                      <div className="tabs-nav tabs--theme clearfix">
                        <ul className="tabs-1">
                          {/* TAB-1 LINK */}

                          {/* TAB-2 LINK */}
                          {levels.map((item) => {
                            return (
                              <li
                                key={item}
                                className={
                                  selectedLevel.includes(item)
                                    ? "tab-link ico-45 r-16 current"
                                    : "tab-link ico-45 r-16"
                                }
                                onClick={() => selectLevel(item)}
                              >
                                <div className="tab-link-ico">
                                  <span className="flaticon-suit" />
                                </div>
                                <p>{item} </p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
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
