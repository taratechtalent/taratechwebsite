/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { services } from "@/app/calculator/util";
import Link from "next/link";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Hero() {
  return (
    <>
      <section id="hero-2" className="bg--scroll hero-section">
        <div className="container">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              interval: 6000,
              autoplay: true,
              rewind: true,
            }}
          >
            <SplideSlide>
              <div className="row d-flex align-items-center">
                {/* HERO IMAGE */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="hero-2-txt wow fadeInLeft pl-20">
                    {/* Title */}
                    <h2 className="s-48 w-700 color--black">
                      {" "}
                      <span className="main-text">Affordable</span>
                      <br></br> Remote<br></br>
                      <span className="main-text">Senior Talents</span>{" "}
                      <br></br>for Startups
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Elevate your business with experienced tech professionals
                      who offer the perfect blend of{" "}
                      <b style={{ padding: 4 }}>quality</b> and
                      <b style={{ padding: 4 }}>cost-efficiency</b>. Partner
                      with us to harness{" "}
                      <b style={{ padding: 4 }}> global expertise</b> that fits
                      your <b style={{ padding: 4 }}>startup budget </b>and
                      fuels your growth.
                    </p>
                    <p className="text-right">
                      <Link
                        href="/book"
                        className="btn r-04 btn--theme hover--theme last-link ml-20"
                      >
                        Schedule a Call
                      </Link>
                    </p>
                  </div>
                </div>{" "}
                {/* END HERO TEXT */}
                <div className="col-md-6 order-last order-md-2">
                  <div className="hero-2-img  wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/hero-2-img.png"
                      alt="hero-image"
                    />
                  </div>
                </div>{" "}
              </div>
              {/* HERO TEXT */}

              {/* End row */}
            </SplideSlide>
            <SplideSlide>
              <div className="row d-flex align-items-center">
                {/* HERO IMAGE */}
                {/* HERO TEXT */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="hero-2-txt wow fadeInLeft pl-20">
                    {/* Title */}

                    {/* Title */}
                    <h2 className="s-48 w-700 color--black">
                      Smart <br></br>
                      <span className="main-text">Hiring</span> <br></br>{" "}
                      Smarter <br></br><span className="main-text">Budgeting</span>
                    </h2>

                    <p className="p-lg">
                      TaraTalent{" "}
                      <b style={{ padding: 4 }}>bridges the tech talent gap</b>{" "}
                      by offering a transparent,
                      <b style={{ padding: 4 }}>tailor-made pricing</b>{" "}
                      structure that fits snugly into your
                      <b style={{ padding: 4 }}>startup budget</b> , without
                      compromising on expertise. Discover the perfect balance
                      between <b style={{ padding: 4 }}>quality</b>
                      and <b style={{ padding: 4 }}>affordability</b> , and
                      forecast your investment in
                      <b style={{ padding: 4 }}>top-tier tech talent</b> with
                      confidence.
                    </p>
                    <p className="text-right">
                      <Link
                        href="/calculator"
                        className="btn r-04 btn--theme hover--theme last-link ml-20"
                      >
                        Estimate Price
                      </Link>
                    </p>
                  </div>
                </div>{" "}
                <div className="col-md-6 order-last order-md-2">
                  <div className="hero-2-img  wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/img-11.png"
                      alt="hero-image"
                    />
                  </div>
                </div>
                {/* END HERO TEXT */}
              </div>{" "}
              {/* End row */}
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
}
