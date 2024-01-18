/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <>
      <section id="hero-2" className="bg--scroll hero-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* HERO IMAGE */}
            <div className="col-md-6 order-last order-md-2">
              <div className="hero-2-img wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/heromain.png"
                  alt="hero-image"
                />
              </div>
            </div>
            {/* HERO TEXT */}
            <div className="col-md-6 order-first order-md-2">
              <div className="hero-2-txt wow fadeInLeft">
                {/* Title */}
                <h2 className="s-56 w-700 color--black">
                  Affordable <span className="main-text">Senior Talents</span>{" "}
                  for startups
                </h2>
                {/* Text */}
                <p className="p-lg">
                  elevates your business with experienced tech professionals who
                  offer the perfect blend of quality and cost-efficiency.
                  Partner with us to harness global expertise that fits your
                  startup budget and fuels your growth
                </p>
                {/* HERO DIGITS */}
                <h2 className="s-25 w-700 color--black">
                  Unlock <span className="main-text">Senior Talents</span>{" "}
                  <span className="s-20 w-700 color--black ml-10 pd-10 mt-15">
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
