/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ServiceComponent from "../component/service.component";
import ServiceContactComponent from "../component/service.contact.component";
export default function Help() {
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
          <ServiceComponent
            title={"Exclusive, Cutting-Edge Services"}
            desc="Unique, advanced solutions crafted by experts for your specific needs."
            image="/images/services/allservices.webp"
          />
        </div>
        <div className="row p-4 m-4" style={{ backgroundColor: "#37939b" }}>
          <div className="col-sm-12 text-center">
            <Link
              href="/book"
              className="btn r-04 btn--theme hover--theme mb-20  mt-20"
            >
              Team up for success
            </Link>
          </div>
        </div>
        <hr className="divider" />

     

        <div className="row p-4 m-4" style={{ backgroundColor: "#37939b" }}>
          <div className="col-sm-12 text-center">
            <Link
              href="/book"
              className="btn r-04 btn--theme hover--theme mb-20  mt-20"
            >
              Team up for success
            </Link>
          </div>
        </div>
        <hr className="divider" />

          <section className="py-100 ct-02 content-section division">
          <div className="container">
            <div className="row">
              <div className="col text-center mb-32">
                <h2 className="s-52 w-700">How to work with Us</h2>
                <h4 className="font-bold pt-6">
                  Achive your goal in the way you never experienced before
                </h4>
              </div>
            </div>
            {/* SECTION CONTENT (ROW) */}
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-12">
                <div className="txt-block flex right-column wow fadeInLeft">
                  {/* CONTENT BOX #1 */}
                  <div className="cbox-2 process-step col-md-4">
                    {/* Icon */}
                    <div className="ico-wrap">
                      <div className="cbox-2-ico bg--theme color--white">1</div>
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      <h5 className="s-22 w-700">Registeration</h5>
                      <p>
                        Register now to take the next step in your career
                        journey; complete the application form by uploading your
                        CV and let us connect you with your future
                        opportunities.
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT BOX #1 */}
                  {/* CONTENT BOX #2 */}
                  <div className="cbox-2 process-step col-md-4">
                    {/* Icon */}
                    <div className="ico-wrap">
                      <div className="cbox-2-ico bg--theme color--white">2</div>
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      <h5 className="s-22 w-700">Some Amazing Test skills</h5>
                      <p>
                        Enhance your career with our comprehensive testing
                        suite, featuring
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT BOX #2 */}
                  {/* CONTENT BOX #3 */}
                  <div className="cbox-2 process-step col-md-4">
                    {/* Icon */}
                    <div className="ico-wrap">
                      <div className="cbox-2-ico bg--theme color--white">3</div>
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      <h5 className="s-22 w-700">
                        Finalize contract and start Trial Period
                      </h5>
                      <p className="mb-0">
                        Finalize your contract with us and embark on a trial
                        period, where {`you'll`} have the opportunity to
                        showcase your skills,
                      </p>
                    </div>
                  </div>{" "}
                  {/* END CONTENT BOX #3 */}
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>{" "}
            {/* END SECTION CONTENT (ROW) */}
          </div>{" "}
          {/* End container */}
        </section>
        <ServiceContactComponent
          title="Come Along and Let's Build a Team Where Achievements Are Limitless!"
          desc="Your distinct skills and viewpoints are the essential elements we need to complete our shared journey of achievement."
        />
      </Layout>
    </>
  );
}
