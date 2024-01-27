"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { ServiceEnum, ServiceLeveEnum, services } from "./util";

export default function Book() {
  const [finalYearlyPriceStart, setFinalYearlyPriceStart] = useState("");
  const [finalYearlyPriceEnd, setFinalYearlyPriceEnd] = useState("");
  

  const [finalMonthlyPriceStart, setFinalMonthlyPriceStart] = useState("");
  const [finalMonthlyPriceEnd, setFinalMonthlyPriceEnd] = useState("");
  

  const [levels, setLevels] = useState(["Junior", "Mid-Level", "Senior"]);
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



  const selectTechnologies = (tech: string) => {
    let result = [...selectedTechnologies];
    if (selectedTechnologies.includes(tech)) {
      result = result.filter((item) => item != tech);
    } else {
      result.push(tech);
    }
    setSelectedTechnologies(result);
  };


  useEffect(() => {
    let startPrice = 0,
      endPrice = 0;

    const calSelectedService = services.filter(
      (item) => item.name == selectedService
    )[0] as any;
    const step =
      (parseInt(calSelectedService.end) - parseInt(calSelectedService.start)) /
      3;
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


    // K€

    setFinalYearlyPriceStart(startPrice.toString())
    setFinalYearlyPriceEnd(endPrice.toFixed(1).toString().endsWith(".0") ? parseInt(endPrice.toFixed(1)).toString() : endPrice.toFixed(1))



    let start: any = ((startPrice / 12)).toFixed(1).toString();
    start = start.endsWith(".0") ? parseInt(start) : start;

    let end: any = ((endPrice / 12)).toFixed(1).toString();
    end = end.endsWith(".0") ? parseInt(end) : end;

    setFinalMonthlyPriceStart(start.toString())
    setFinalMonthlyPriceEnd(end.toString())

    
 
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
                                    onClick={() => setSelectedLevel(item)}
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
                              width:"420px",
                              border: "3px solid #37939b",
                              padding: "45px",
                              borderRadius: "15px",
                              position: "fixed",
                              boxShadow: "0px 15px 20px 0px rgba(5, 5, 5, 0.2)",
                            }}
                          >
                            <hr className="divider !mb-6" />
                            <div className="text-center">
                              <b className="s-20 w-700 ">Estimated Price</b>
                              <div className="row mt-10">
                                <div className="col-sm-12 text-center">
                                  <h2 className="w-700">
                                    <span
                                      style={{
                                        color: "#80808096",
                                        fontSize: "30px",
                                      }}
                                    >
                                      €
                                    </span>
                                    {finalYearlyPriceStart}
                                    <span
                                      style={{
                                        color: "black",
                                        fontSize: "30px",
                                      }}
                                    >
                                      K
                                    </span>{" "}
                                    -{" "}
                                    <span
                                      style={{
                                        color: "#80808096",
                                        fontSize: "30px",
                                      }}
                                    >
                                      €
                                    </span>
                                    {finalYearlyPriceEnd}
                                    <span
                                      style={{
                                        color: "black",
                                        fontSize: "30px",
                                      }}
                                    >
                                      K
                                    </span>
                                    {"  "}
                                    <span style={{ fontSize: "26px" }}>/</span>
                                    <span
                                      style={{
                                        fontSize: "20px",
                                        color: "black",
                                      }}
                                    >
                                      year
                                    </span>
                                    <span className="s-20"> </span>
                                  </h2>

                                  <h2 className="w-700 pt-2 s-24 text-center">
                                    <span
                                      style={{
                                        color: "#80808096",
                                        fontSize: "20px",
                                      }}
                                    >
                                      €
                                    </span>
                                    {finalMonthlyPriceStart}
                                    <span
                                      style={{
                                        color: "black",
                                        fontSize: "20px",
                                      }}
                                    >
                                      K
                                    </span>{" "}
                                    -{" "}
                                    <span
                                      style={{
                                        color: "#80808096",
                                        fontSize: "20px",
                                      }}
                                    >
                                      €
                                    </span>
                                    {finalMonthlyPriceEnd}
                                    <span
                                      style={{
                                        color: "black",
                                        fontSize: "20px",
                                      }}
                                    >
                                      K
                                    </span>
                                    {"  "}
                                    <span style={{ fontSize: "26px" }}>/</span>
                                    <span
                                      style={{
                                        fontSize: "20px",
                                        color: "black",
                                      }}
                                    >
                                      month
                                    </span>
                                    <span className="s-20"> </span>
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
                              </b>
                              <br />
                            </div>
                            <hr className="divider !mt-6 !mb-3" />
                            <div className="text-center">
                              <b className="s-16 w-300 ">
                                <Link href={`/book?level=${selectedLevel}&service=${selectedService}`}>
                                  <b className="w-500 s-32">{`let's`} talk</b>
                                </Link>
                              </b>
                            </div>
                            <hr className="divider !mt-3" />
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
