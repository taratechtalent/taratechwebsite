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
                <h2 className="s-56 w-700 color--black mt-52">
                  Affordable <span className="main-text">Senior Talents</span>{" "}
                  for startups
                </h2>
                {/* Text */}
                <p className="p-lg">
                  elevates your business with experienced tech professionals who
                  offer the perfect blend of quality and cost-efficiency.
                </p>
                {/* HERO DIGITS */}
                <h2 className="s-25 w-700 color--black mt-24 ml-32 ">
                  Unlock <span className="main-text">Senior Talents</span>{" "}
                  <span
                    className="s-20 w-700 color--black ml-10"
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
                {/* END HERO DIGITS */}
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
