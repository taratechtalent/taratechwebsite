/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
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
  const [finalPrice, setFinalPrice] = useState("");
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
      start: 53,
      end: 82,
    },
    {
      name: ServiceEnum.Mobile,
      value: "mobile",
      selected: false,
      index: 1,
      technologies: ["IOS", "Android", "Kotlin", "swift", "Java"],
      start: 55,
      end: 76,
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
      start: 51,
      end: 72,
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
      start: 62,
      end: 83,
    },
    {
      name: ServiceEnum.UX,
      value: "ui",
      selected: false,
      index: 2,
      technologies: ["Figma", "Adobe XD", "Adobe Illustrator", "Photoshop"],
      start: 48,
      end: 70,
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
      start: 45,
      end: 59,
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
      start: 57,
      end: 79,
    },
  ]);

  const [levels, setLevels] = useState(["Junior", "Mid-Level", "Senior"]);
  const [periods, setPriods] = useState([
    {
      key: "3 months",
      value: 3,
    },
    {
      key: "6 months",
      value: 6,
    },
    {
      key: "1 year",
      value: 12,
    },
  ]);
  const [selectedLevel, setSelectedLevel] = useState("Junior");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedPeriod, setSelectedPeriod] = useState(12);

  const [selectedService, setSelectedService] = useState(ServiceEnum.Web);
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

  useEffect(() => {
    let startPrice = 0,
      endPrice = 0;

    const calSelectedService = services.filter(
      (item) => item.name == selectedService
    )[0] as any;

    const step = Math.floor(
      (parseInt(calSelectedService.end) - parseInt(calSelectedService.start)) /
        3
    );
    switch (selectedLevel) {
      case ServiceLeveEnum.Junior:
        startPrice = calSelectedService.start;
        endPrice = calSelectedService.start + step;
        break;
      case ServiceLeveEnum.Mid:
        startPrice = calSelectedService.start + step;
        endPrice = calSelectedService.start + step + step;
        break;
      case ServiceLeveEnum.Senior:
        startPrice = calSelectedService.start + step + step;
        endPrice = calSelectedService.end;
        break;
    }

    setFinalPrice(
      Math.floor((startPrice / 12) * selectedPeriod) +
        " - " +
        Math.floor((endPrice / 12) * selectedPeriod)
    );
  }, [selectedService, selectedLevel, selectedPeriod]);

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
                                        key={item.name}
                                        className={
                                          selectedService === item.name
                                            ? "tab-link ico-45 r-16 current"
                                            : "tab-link ico-45 r-16"
                                        }
                                        onClick={() => selectService(item.name)}
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
                                  (service) => service.name == selectedService
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
                                    key={item.key}
                                    className={
                                      item.value == selectedPeriod
                                        ? "tab-link ico-45 r-16 current"
                                        : "tab-link ico-45 r-16"
                                    }
                                    onClick={() => selectPeriod(item.value)}
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
                                      {item.key}
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
                              border: "3px solid #37939b",
                              padding: "45px",
                              borderRadius: "15px",
                              position: "fixed",
                              boxShadow: "0px 15px 20px 0px rgba(5, 5, 5, 0.2)",
                            }}
                          >
                            <hr className="divider !mb-6" />
                            <div className="text-center">
                              <b className="s-20 w-700 ">Final Price</b>
                              <div className="row mt-10">
                                <div className="col-sm-12 text-center">
                                  <h2 className="w-700">
                                    {finalPrice}
                                    <span className="s-20"> K€</span>
                                  </h2>
                                </div>
                              </div>
                              <br />
                              <b
                                className="s-16 w-400 "
                                style={{ paddingLeft: "15px" }}
                              >
                                <b style={{ color: "#37939b" }}>
                                  {selectedLevel}
                                </b>{" "}
                                talent in <br />
                                <b style={{ color: "#37939b" }}>
                                  {selectedService}
                                </b>{" "}
                                <br /> for{" "}
                                <b style={{ color: "#37939b" }}>
                                  {selectedPeriod}
                                </b>{" "}
                                months
                              </b>
                              <br />
                            </div>
                            <hr className="divider !mt-6" />
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
