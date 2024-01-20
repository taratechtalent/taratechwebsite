/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <>
      <section id="hero-2" className="bg--scroll hero-section heromain">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* HERO IMAGE */}
            {/* HERO TEXT */}
            <div className="col-md-6 order-first order-md-2">
              <div className="hero-2-txt wow fadeInLeft">
                {/* Title */}
                <div className="row">
                  <div className="col-sm-12">
                    {" "}
                    <h2 className="s-56 w-700 color--black mt-10">
                      Affordable{" "}
                      <span className="main-text">Senior Talents</span> for
                      startups
                    </h2>
                  </div>{" "}
                  <div className="col-sm-12">
                    {" "}
                    <p className="p-lg">
                      elevates your business with experienced tech professionals
                      who offer the perfect blend of quality and
                      cost-efficiency. Partner with us to harness global
                      expertise that fits your startup budget and fuels your
                      growth
                    </p>
                  </div>{" "}
                  <div
                    className="col-sm-12 text-left"
                    style={{ marginTop: "18px" }}
                  >
                    <h2 className="s-25 w-700 color--black">
                      Unlock <span className="main-text">Senior Talents</span>{" "}
                      <span
                        className="s-20 w-700 color--black"
                        style={{ paddingTop: "40px !important" }}
                      >
                        <Typewriter
                          options={{
                            strings: [
                              "Web Development -> €70K/y",
                              "Devops -> €60K/y",
                              "UI/UX -> €120K/y",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                          }}
                        />
                      </span>
                    </h2>
                  </div>
                  <div
                    className="col-sm-12 text-left flex items-center"
                    style={{ marginTop: "31px" }}
                  >
                    <span className="btn btn--theme hover--theme submit">
                      Arrange a Call
                    </span>
                    <img
                      src="images/play.png"
                      style={{
                        height: "50px !important",
                        marginLeft: "40px",
                      }}
                    />
                  </div>
                </div>

                {/* Text */}

                {/* HERO DIGITS */}
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
