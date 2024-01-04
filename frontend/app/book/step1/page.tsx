/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ServiceContactComponent from "../../component/service.contact.component";
export default function Book() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section
            id="features-11"
            className="py-100 features-section division mt-32"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9 ">
                  <div className="section-title mb-70 ">
                    {/* Title */}
                    <h2 className="s-50 w-700">Hello world</h2>
                    {/* Text */}

                    <p className="s-21 color--grey">Description</p>
                  </div>
                </div>
              </div>
              {/* FEATURES-11 WRAPPER */}
              <div className="fbox-wrapper">
                <div className="row">
                  <div className="col-md-5 col-sm-12  shadow-box ">
                    <Service title="Web development" price={"€48K - €70"} />
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5 col-sm-12  shadow-box ">
                    <Service title="Mobile development" price={"€48K - €70"} />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 col-sm-12 shadow-box ">
                    <Service title="UI/Ux desgin" price={"€48K - €70"} />
                  </div>
                  <div className="col-md-6 col-sm-12  shadow-box ">
                    <Service title="AI/Machine Learning" price={"€48K - €70"} />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 col-sm-12 shadow-box ">
                    <Service title="UI/Ux desgin" price={"€48K - €70"} />
                  </div>
                  <div className="col-md-6 col-sm-12  shadow-box ">
                    <Service title="AI/Machine Learning" price={"€48K - €70"} />
                  </div>
                </div>

                {/* End row */}
              </div>
              {/* END FEATURES-11 WRAPPER */}
            </div>
            {/* End container */}
          </section>
        </div>

        <hr className="divider" />

        <ServiceContactComponent />
      </Layout>
    </>
  );
}

const Service = ({ title, price }: any) => (
  <div className="fbox-11 fb-1 wow fadeInUp">
    {/* Icon */}
    <div className="fbox-ico-wrap">
      <div className="fbox-ico ico-50">
        <div className="shape-ico !mt-6">
          {/* Vector Icon */}
          {/* Shape */}
          <img src="images/services/web.png" />
        </div>
      </div>
    </div>
    {/* End Icon */}
    {/* Text */}
    <div className="fbox-txt">
      <Link href="/service/web">
        <h6 className="s-30 w-700 mt-30">{title}</h6>
        <p
          style={{
            marginTop: "15px",
            fontSize: "40px",
            fontWeight: "bold",
            paddingLeft: "0px",
            // fontFamily: "Plus Jakarta Sans",
          }}
        >
          {price} <span style={{ fontSize: "20px" }}>K/year</span>
          <br />
          <span
            className="btn  btn--theme hover--tra-white mt-10 "
            style={{ fontSize: "20px" }}
          >
            +
          </span>
        </p>
      </Link>
    </div>
  </div>
);
