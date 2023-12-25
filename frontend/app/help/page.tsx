/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Service() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: any) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: any) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section
            id="faqs-4"
            className="gr--whitesmoke inner-page-hero pb-100 faqs-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">
                  <div className="inner-page-title">
                    <h2 className="s-52 w-700">Our Services</h2>
                  </div>
                </div>
              </div>
              {/* TABS NAVIGATION */}
              <div className="row">
                <div className="col">
                  <div className="tabs-nav tabs--theme clearfix">
                    <ul className="tabs-1">
                      {/* TAB-1 LINK */}
                      <li
                        className={
                          activeIndex === 1
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(1)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-mechanics" />
                        </div>
                        <p>Web App Development</p>
                      </li>
                      {/* TAB-2 LINK */}
                      <li
                        className={
                          activeIndex === 2
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(2)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-suit" />
                        </div>
                        <p>Mobile App Development</p>
                      </li>
                      {/* TAB-3 LINK */}
                      <li
                        className={
                          activeIndex === 3
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(3)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-price-label" />
                        </div>
                        <p>UI/UX Design</p>
                      </li>
                      {/* TAB-4 LINK */}
                      <li
                        className={
                          activeIndex === 4
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(4)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>Software testing & QA</p>
                      </li>
                      <li
                        className={
                          activeIndex === 5
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(5)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>Digital Art</p>
                      </li>
                      <li
                        className={
                          activeIndex === 6
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(6)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>AI/Machine Learning</p>
                      </li>
                      <li
                        className={
                          activeIndex === 7
                            ? "tab-link ico-45 r-16 current"
                            : "tab-link ico-45 r-16"
                        }
                        onClick={() => handleOnClick(7)}
                      >
                        <div className="tab-link-ico">
                          <span className="flaticon-screenplay" />
                        </div>
                        <p>Devops</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              {/* END TABS NAVIGATION */}
              {/* TABS CONTENT */}
              <div className="tabs-content">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/* TAB-1 CONTENT */}
                    <div
                      id="tab-1"
                      className={
                        activeIndex === 1
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"Web App Development"}
                        desc={
                          "Web app development combines HTML, CSS, and JavaScript with backend languages to create interactive, responsive applications. Focused on user experience and scalability, it evolves with technological advancements, driving innovation in accessible, efficient global web solutions."
                        }
                      />
                    </div>{" "}
                    {/* END TAB-1 CONTENT */}
                    {/* TAB-2 CONTENT */}
                    <div
                      id="tab-2"
                      className={
                        activeIndex === 2
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"Mobile App Development"}
                        desc={
                          "Mobile app development involves creating software for smartphones and tablets, focusing on optimized design, functionality, and user experience across diverse platforms and devices for on-the-go accessibility and performance."
                        }
                      />
                    </div>{" "}
                    {/* END TAB-2 CONTENT */}
                    {/* TAB-3 CONTENT */}
                    <div
                      id="tab-3"
                      className={
                        activeIndex === 3
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"Software testing & QA"}
                        desc={
                          "Software testing and QA ensure that applications meet quality standards and function as intended, through systematic processes of verification, bug identification, and performance assessment to enhance product reliability."
                        }
                      />
                    </div>{" "}
                    {/* END TAB-3 CONTENT */}
                    {/* TAB-4 CONTENT */}
                    <div
                      id="tab-4"
                      className={
                        activeIndex === 4
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"UI/UX Design"}
                        desc={
                          "UI/UX design merges visual design with user experience to create intuitive and attractive interfaces, focusing on user's ease, engagement, and satisfaction with a product's look and feel."
                        }
                      />
                    </div>{" "}
                    {/* END TAB-4 CONTENT */}
                    <div
                      id="tab-5"
                      className={
                        activeIndex === 5
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"Devops"}
                        desc={
                          "DevOps integrates development and operations to improve collaboration, speed, and product quality, focusing on continuous integration, automated deployment, and quicker, more efficient delivery cycles in software development."
                        }
                      />
                    </div>{" "}
                    <div
                      id="tab-6"
                      className={
                        activeIndex === 6
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"Digital Art"}
                        desc={
                          "Digital art encompasses creating visual content using technology, ranging from illustrations to animations, utilizing software and devices to craft, manipulate, and produce innovative artistic expressions in a digital format."
                        }
                      />
                    </div>{" "}
                    <div
                      id="tab-7"
                      className={
                        activeIndex === 7
                          ? "tab-content current"
                          : "tab-content "
                      }
                    >
                      <Section
                        title={"AI/Machine Learning"}
                        desc={
                          "AI/Machine Learning involves algorithms and statistical models that enable computers to improve tasks with experience, focusing on prediction, automation, and decision-making in various fields from healthcare to finance."
                        }
                      />
                    </div>{" "}
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TABS CONTENT */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END  FAQs-4 */}
          {/* BANNER-9
			============================================= */}
          <section
            id="banner-9"
            className="bg--02 py-70 x-border banner-section"
          >
            <div className="container">
              {/* BANNER-9 WRAPPER */}
              <div className="banner-7-wrapper">
                <div className="row justify-content-center d-flex align-items-center">
                  {/* BANNER-9 TEXT */}
                  <div className="col-md-7 col-xl-5">
                    <div className="banner-9-txt">
                      {/* Title */}
                      <h3 className="s-40 w-700">Join our network</h3>
                      {/* Text */}
                      <p className="p-lg">
                        Join Us in Crafting a Partnership Where Success Knows No
                        Bounds
                      </p>
                      {/* Button */}
                      <Link
                        href="/book"
                        className="btn r-04 btn--theme hover--theme"
                      >
                        Book a Consulant Call
                      </Link>
                    </div>
                  </div>
                  {/* BANNER-9 IMAGE */}
                  <div className="col-md-5 col-xl-5">
                    <div className="banner-9-img text-end">
                      <img
                        className="img-fluid rounded-full"
                        src="/images/contactus.png"
                        alt="banner-image"
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END BANNER-9 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>
        </div>
      </Layout>
    </>
  );
}

const Section = ({ title, desc }: any) => {
  return (
    <section id="lnk-1" className="pt-10 ct-02 content-section division">
      <div className="container">
        {/* SECTION CONTENT (ROW) */}
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-6">
            <div className="img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/services/mobilewebdevelop.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id"></span>
              {/* Title */}
              <h2 className="s-46 w-700">{title}</h2>
              {/* Text */}
              <p>{desc}</p>
              {/* Small Title */}
              <h5 className="s-24 w-700">Enhance your personality</h5>
              {/* CONTENT BOX #1 */}
              <div className="cbox-1 ico-15">
                <div className="ico-wrap color--theme">
                  <div className="cbox-1-ico">
                    <span className="flaticon-check" />
                  </div>
                </div>
                <div className="cbox-1-txt">
                  <p>Magna dolor luctus at egestas sapien</p>
                </div>
              </div>
              {/* CONTENT BOX #2 */}
              <div className="cbox-1 ico-15">
                <div className="ico-wrap color--theme">
                  <div className="cbox-1-ico">
                    <span className="flaticon-check" />
                  </div>
                </div>
                <div className="cbox-1-txt">
                  <p>
                    Cursus purus suscipit vitae cubilia magnis volute egestas
                    vitae sapien turpis ultrice auctor congue varius magnis
                  </p>
                </div>
              </div>
              {/* CONTENT BOX #3 */}
              <div className="cbox-1 ico-15">
                <div className="ico-wrap color--theme">
                  <div className="cbox-1-ico">
                    <span className="flaticon-check" />
                  </div>
                </div>
                <div className="cbox-1-txt">
                  <p className="mb-0">
                    Volute turpis dolores and sagittis congue
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* END SECTION CONTENT (ROW) */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};
