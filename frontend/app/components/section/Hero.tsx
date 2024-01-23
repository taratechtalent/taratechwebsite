/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { services } from "@/app/calculator/page";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import Typewriter from "typewriter-effect";

const items = services.map(
  // (item) => item.name + ": €" + item.start + "k - €" + item.end + "k"
  (item) =>
    "<span class='item-style'>" +
    item.dev +
    "</span><br /> just for <span class='item-style2'> €" +
    item.end +
    "k </span>"
);
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
                  <div className="col-sm-12 ">
                    {" "}
                    <h2 className="s-56 w-700 color--black herotext">
                      Affordable{" "}
                      <span className="main-text">Senior Talents</span> for
                      Startups
                    </h2>
                  </div>{" "}
                  <div className="col-sm-12">
                    {" "}
                    <p className="p-lg">
                      elevates your business with experienced tech professionals
                      who offer the perfect blend of quality and
                      cost-efficiency. Partner with us to harness global
                      expertise that fits your startup budget and fuels your
                      growth.
                    </p>
                  </div>{" "}
                  <div className="example-container">
                    <Link href="/calculator">
                      <div
                        className="col-sm-12 text-left"
                        style={{ marginTop: "18px" }}
                      >
                        <span className="s-24 w-700 color--black">
                          Unlock <span className="main-text">Senior </span>
                        </span>
                        <div
                          className="s-26 w-700 color--black"
                          style={{ marginLeft: "80px" }}
                          data-tooltip-id="my-tooltip-rounded"
                          data-tooltip-content="Click to see the Talent Value calculator"
                        >
                          <Typewriter
                            options={{
                              strings: items,
                              autoStart: true,
                              loop: true,
                              delay: 100,
                            }}
                          />
                        </div>
                      </div>
                    </Link>

                    <Tooltip
                      id="my-tooltip-rounded"
                      className="example-rounded"
                    />
                  </div>
                  <div
                    className="col-sm-12 text-right "
                    style={{ marginTop: "61px" }}
                  >
                    <Link href="/book" className="btn btn--theme hover--theme">
                      Book a Call
                    </Link>
                    {/* <img
                      src="images/play.png"
                      style={{
                        height: "50px !important",
                        marginLeft: "40px",
                      }}
                    /> */}
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
