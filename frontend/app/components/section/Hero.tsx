/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { services } from "@/app/calculator/util";
import Link from "next/link";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const items = services.map(
  // (item) => item.name + ": €" + item.start + "k - €" + item.end + "k"
  (item) =>
    "<span class='item-style'>" +
    item.dev +
    "</span><br /> for just <span class='item-style2'> €" +
    item.end +
    "k </span>"
);
export default function Hero() {
  return (
    <>
      <section id="hero-2" className="bg--scroll hero-section">
        <div className="container">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              interval: 4000,
              autoplay: true,
              rewind: true,
            }}
          >
            <SplideSlide>
              <div className="row d-flex align-items-center">
                {/* HERO IMAGE */}
                <div className="col-md-6 order-last order-md-2">
                  <div className="hero-2-img  wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/hero-2-img.png"
                      alt="hero-image"
                    />
                  </div>
                </div>
                {/* HERO TEXT */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="hero-2-txt wow fadeInLeft">
                    {/* Title */}
                    <h2 className="s-56 w-700 color--black">
                      {" "}
                      Affordable Remote{" "}
                      <span className="main-text">Senior Talents</span> for
                      Startups
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Elevates your business with experienced tech professionals
                      who offer the perfect blend of quality and
                      <b style={{ padding: 4 }}>cost-efficiency</b>. Partner
                      with us to harness{" "}
                      <b style={{ padding: 4 }}> global expertise</b> that fits
                      your startup <b style={{ padding: 4 }}> budget </b>and
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
              </div>{" "}
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
                    <h2 className="s-56 w-700 color--black">
                    Smart {" "}<span className="main-text">Hiring</span>  {" "} Smarter <span className="main-text">Budgeting</span> 
                    </h2>
                 
                    <p className="p-lg">
                     
                      We offer a transparent,<b style={{ padding: 4 }}>tailor-made pricing</b>  structure that
                      fits snugly into your budget, without compromising on
                      expertise. Discover the perfect balance between <b style={{ padding: 4 }}>quality</b> 
                      and <b style={{ padding: 4 }}>affordability</b> , and forecast your investment in
                      top-tier tech talent with confidence.
                    </p>
                    <Link
                        href="/book"
                        className="btn r-04 btn--theme hover--theme last-link ml-20"
                      >
                        Estimate a price
                      </Link>
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
