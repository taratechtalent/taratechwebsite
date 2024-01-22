/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Layout from "../components/layout/Layout";

enum ServiceEnum {
  Web = "Web Development",
  Mobile = "Mobile Development",
  QA = "Software testing",
  AI = "Machine Learning",
  UX = "UI/UX Design",
  Art = "Digital Art",
  Devops = "Devops",
}

enum ServiceLeveEnum {
  Junior = "Junior",
  Mid = "Mid-Level",
  Senior = "Senior",
}

export default function Book() {
  const [finalPrice, setFinalPrice] = useState("0 K€/y");
  const [finalCount, setFinalCount] = useState(0);
  const [info, setInfo] = useState(0);
  const [services, setService] = useState([
    {
      name: ServiceEnum.Web,
      value: "web",
      selected: true,
      index: 0,
      technologies: [
        "React",
        "Angular",
        "Vue",
        "C#",
        "Python",
        "Nodejs",
        "Nestjs",
        "Nextjs",
        "AWS",
        "Google Cloud",
      ],
    },
    {
      name: ServiceEnum.Mobile,
      value: "mobile",
      selected: false,
      index: 1,
      technologies: ["IOS", "Android", "Kotlin", "swift", "Java"],
    },
    {
      name: ServiceEnum.QA,
      value: "qa",
      selected: false,
      index: 4,
      technologies: [
        "Unit Testing",
        "Integration Testing",
        "Acceptance Testing",
        "Black Box Testing",
        "White Box Testing",
      ],
    },
    {
      name: ServiceEnum.AI,
      value: "ai",
      selected: false,
      index: 6,
      technologies: [
        "Narrow AI",
        "Deep Learning",
        "Neural Networks",
        "General AI",
        "Superintelligent AI",
      ],
    },
    {
      name: ServiceEnum.UX,
      value: "ui",
      selected: false,
      index: 2,
      technologies: ["Figma", "Adobe XD", "Adobe Illustrator", "Photoshop"],
    },
    {
      name: ServiceEnum.Art,
      value: "art",
      selected: false,
      index: 3,
      technologies: [
        "Blender",
        "Adobe Creative Suite",
        "2D and 3D Animation",
        "Motion Graphics",
        "Vector Graphics",
        "2D and 3D Digital Painting",
        "Digital Photography ",
      ],
    },

    {
      name: ServiceEnum.Devops,
      value: "devops",
      selected: false,
      index: 5,
      technologies: [
        "CI/CD",
        "Git",
        "AWS",
        "Bash/Shel scripting",
        "VMware",
        "NGinx",
      ],
    },
  ]);

  const [levels, setLevels] = useState(["Junior", "Mid-level", "Senior"]);
  const [periods, setPriods] = useState(["3 months", "6 months", "+1 year"]);
  const [selectedLevel, setSelectedLevel] = useState("Junior");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedPeriod, setSelectedPeriod] = useState("+1 year");

  const [selectedService, setSelectedService] = useState("web");
  const selectService = (index: any) => {
    setSelectedService(index);
    setSelectedTechnologies([]);
  };

  const selectPeriod = (index: any) => {
    setSelectedPeriod(index);
  };

  const selectTechnologies = (tech: string) => {
    let result = [...selectedTechnologies];
    if (selectedTechnologies.includes(tech)) {
      result = result.filter((item) => item != tech);
    } else {
      result.push(tech);
    }
    setSelectedTechnologies(result);
  };

  const selectLevel = (level: string) => {
    // let result = [...selectedLevel];
    // if (selectedLevel.includes(level)) {
    //   result = result.filter((item) => item != level);
    // } else {
    //   result.push(level);
    // }
    setSelectedLevel(level);
  };

  const calculate = () => {
    let startPrice = 0,
      endPrice = 0;

    // switch (selectedService) {
    //   case ServiceEnum.Web:
    //     switch (selectedLevel) {
    //       case ServiceLeveEnum.Junior:
    //         startPrice = 1000;
    //         endPrice = 2000;
    //         break;
    //     }
    // }
  };

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
            className="bg--fixed login-1 login-section division !mt-6"
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
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col">
                              <div className="separator-line">
                                <span className="cbox-2-ico bg--theme color--white  mr-2">
                                  1
                                </span>
                                <b className="s-20 w-700">Service of Talent</b>
                              </div>
                              <div className="tabs-nav tabs--theme clearfix">
                                <ul className="tabs-1">
                                  {/* TAB-1 LINK */}

                                  {/* TAB-2 LINK */}
                                  {services.map((item) => {
                                    return (
                                      <li
                                        key={item.value}
                                        className={
                                          selectedService === item.value
                                            ? "tab-link ico-45 r-16 current"
                                            : "tab-link ico-45 r-16"
                                        }
                                        onClick={() =>
                                          selectService(item.value)
                                        }
                                      >
                                        <p>{item.name} </p>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="separator-line">
                            {" "}
                            <span className="cbox-2-ico bg--theme color--white  mr-2">
                              2
                            </span>
                            <b className="s-20 w-700">
                              Technologies of Service
                            </b>
                          </div>
                          <div className="tabs-nav tabs--theme clearfix">
                            <ul className="tabs-1">
                              {/* TAB-1 LINK */}

                              {/* TAB-2 LINK */}
                              {services
                                .filter(
                                  (service) => service.value == selectedService
                                )[0]
                                ?.technologies?.map((item: any) => {
                                  return (
                                    <li
                                      key={item}
                                      className={
                                        selectedTechnologies.includes(item)
                                          ? "tab-link ico-45  r-16 current"
                                          : "tab-link ico-45  r-16"
                                      }
                                      onClick={() => selectTechnologies(item)}
                                      style={{
                                        margin: "10px !important",
                                        padding: "5px !important",
                                      }}
                                    >
                                      <p
                                        style={{
                                          margin: "10px !important",
                                          padding: "5px !important",
                                        }}
                                      >
                                        {item}
                                      </p>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                          <div className="separator-line">
                            {" "}
                            <span className="cbox-2-ico bg--theme color--white  mr-2">
                              3
                            </span>
                            <b className="s-20 w-700">Level of Talent </b>
                          </div>
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
                                    style={{
                                      margin: "10px !important",
                                      padding: "5px !important",
                                    }}
                                  >
                                    <p
                                      style={{
                                        padding: "5px !important",
                                        margin: "0px !important",
                                      }}
                                    >
                                      {item}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="separator-line">
                            {" "}
                            <span className="cbox-2-ico bg--theme color--white  mr-2">
                              4
                            </span>
                            <b className="s-20 w-700">Contract Period</b>
                          </div>
                          <div className="tabs-nav tabs--theme clearfix">
                            <ul className="tabs-1">
                              {/* TAB-1 LINK */}

                              {/* TAB-2 LINK */}
                              {periods.map((item) => {
                                return (
                                  <li
                                    key={item}
                                    className={
                                      item == selectedPeriod
                                        ? "tab-link ico-45 r-16 current"
                                        : "tab-link ico-45 r-16"
                                    }
                                    onClick={() => selectPeriod(item)}
                                    style={{
                                      margin: "10px !important",
                                      padding: "5px !important",
                                    }}
                                  >
                                    <p
                                      style={{
                                        padding: "5px !important",
                                        margin: "0px !important",
                                      }}
                                    >
                                      {item}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div
                            style={{
                              marginTop: "200px",
                              border: "1px solid #37939b",
                              padding: "45px",
                              borderRadius: "15px",
                            }}
                          >
                            <hr className="divider" />
                            <div>
                              <div className="separator-line !mb-1">
                                <b className="s-20 w-700">Final Price</b>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 text-center">
                                  <h2 className="w-700">
                                    25 <span className="s-20">K€</span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
