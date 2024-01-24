/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/layout/Layout";
import Link from "next/link";

import ServiceComponent from "../component/service.component";
import ServiceContactComponent from "../component/service.contact.component";
import Brands from "../components/section/Brand";
export default function ServicePage() {
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
        {/* <div className="row p-4 m-4" style={{ backgroundColor: "#37939b" }}>
          <div className="col-sm-12 text-center">
            <Link
              href="/book"
              className="btn r-04 btn--theme hover--theme mb-20  mt-20"
            >
              Team up for success
            </Link>
          </div>
        </div> */}
        <hr className="divider" />

        <Brands
          header={"We support most popular stack"}
          desc={"Popular stack from each servic"}
        />

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
                      <h5 className="s-22 w-700">Engage with TaraTalent</h5>
                      <p>
                        Start your journey by engaging with TaraTalent. Connect
                        with us to discuss your business objectives and talent
                        needs.
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
                      <h5 className="s-22 w-700">Customize Your Solution</h5>
                      <p>
                        Tailor your solution by choosing from our comprehensive
                        suite of services and talent options. {`We'll`} work
                        with you to create a customized plan that aligns with
                        your goals.
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
                      <h5 className="s-22 w-700">Finalize Collaboration</h5>
                      <p className="mb-0">
                        Finalize the collaboration and get started on achieving
                        your business objectives. During the trial period,
                        {` you'll`} have the opportunity to experience the
                        expertise of our talented professionals and see your
                        projects thrive.
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
