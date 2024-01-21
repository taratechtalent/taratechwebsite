/* eslint-disable @next/next/no-img-element */
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section className="ct-01 inner-page-hero content-section division">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-6 order-last order-md-2">
                  <div className="txt-block left-column wow fadeInRight">
                    {/* Section ID */}
                    <span className="section-id">Productivity Focused</span>
                    {/* Title */}
                    <h2 className="s-46 w-700">
                      Sculpting Success in HealthTech Innovation
                    </h2>
                    {/* Text */}
                    <p>
                      In {`today's`} healthcare and life sciences landscape,
                      technological innovation is key to delivering better
                      patient care, advancing medical research, and staying
                      competitive. TaraTalent is your strategic partner in
                      harnessing the power of technology for success in this
                      dynamic industry.
                    </p>
                    <Link href="/book" className="btn btn--theme hover--theme">
                      Arrange a Call
                    </Link>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="/images/img-06.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* END SECTION CONTENT (ROW) */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TEXT CONTENT */}
          {/* FEATURES-11
			============================================= */}
          <div id="about-3" className="pt-100 about-section division">
            <div className="container">
              <div className="row">
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-1" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Our Expertise</h5>
                    {/* Text */}
                    <p>
                      At TaraTalent, we understand the critical importance of
                      having highly skilled technical professionals who are
                      well-versed in the nuances of healthcare and life
                      sciences. Our experts have a deep understanding of the
                      {`industry's`} unique challenges and opportunities.
                    </p>
                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Tailored Solutions</h5>
                    {/* Text */}
                    <p>
                      We specialize in connecting healthcare and life sciences
                      companies with top-tier tech talent. Unlike traditional
                      outsourcing, we provide a direct link to exceptional
                      professionals who can help you meet your project goals.
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Industry Impact</h5>
                    {/* Text */}
                    <p>
                      Our professionals have a proven track record of making
                      significant contributions to healthcare IT, medical device
                      development, clinical research data analytics, and more.
                      {`We've`} played a vital role in advancing telemedicine,
                      healthtech solutions, and patient care.
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END ABOUT-3 */}
          <section
            id="features-11"
            className="pt-100 features-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-50 w-700">Healthcare Solutions</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Discover our diverse range of services that empower the
                      healthcare industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURES-11 WRAPPER */}
              <div className="fbox-wrapper">
                <div className="row row-cols-1 row-cols-md-2 rows-3">
                  {/* FEATURE BOX #1 */}
                  <div className="col">
                    <div className="fbox-11 fb-1 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico color--theme">
                            {/* Vector Icon */}
                            <span className="flaticon-graphics" />
                            {/* Shape */}
                            <svg
                              viewBox="0 0 200 200"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                                transform="translate(100 100)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Custom Software Development
                        </h6>
                        <p>
                          From building electronic health record (EHR) systems
                          to developing innovative healthcare applications, our
                          experts create tailored software solutions to
                          streamline processes and improve patient outcomes.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #1 */}
                  {/* FEATURE BOX #2 */}
                  <div className="col">
                    <div className="fbox-11 fb-2 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico color--theme">
                            {/* Vector Icon */}
                            <span className="flaticon-idea" />
                            {/* Shape */}
                            <svg
                              viewBox="0 0 200 200"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                                transform="translate(100 100)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Data Analytics</h6>
                        <p>
                          We leverage data-driven insights to enhance clinical
                          decision-making, research, and operational efficiency.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #2 */}
                  {/* FEATURE BOX #3 */}
                  <div className="col">
                    <div className="fbox-11 fb-3 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico color--theme">
                            {/* Vector Icon */}
                            <span className="flaticon-graphic" />
                            {/* Shape */}
                            <svg
                              viewBox="0 0 200 200"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                                transform="translate(100 100)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Telemedicine Solutions</h6>
                        <p>
                          Our team excels in developing telehealth platforms
                          that bring medical services directly to patients,
                          enabling remote consultations and improving access to
                          care.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #3 */}
                  {/* FEATURE BOX #4 */}
                  <div className="col">
                    <div className="fbox-11 fb-4 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico color--theme">
                            {/* Vector Icon */}
                            <span className="flaticon-wireframe" />
                            {/* Shape */}
                            <svg
                              viewBox="0 0 200 200"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                                transform="translate(100 100)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Medical Device Development
                        </h6>
                        <p>
                          TaraTalent professionals have contributed to the
                          design and development of cutting-edge medical
                          devices, ensuring compliance with industry standards.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #4 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FEATURES-11 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
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
                        <div className="cbox-2-ico bg--theme color--white">
                          1
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-22 w-700">
                          Consult with Our Industry Experts
                        </h5>
                        <p>
                          Our team collaborates with you to understand your
                          industry-specific goals, technical requirements, and
                          team dynamics.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #1 */}
                    {/* CONTENT BOX #2 */}
                    <div className="cbox-2 process-step col-md-4">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          2
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-22 w-700">
                          Access Hand-Picked Talent
                        </h5>
                        <p>
                          Connect with the ideal talent for your industry,
                          typically within days.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                    {/* CONTENT BOX #3 */}
                    <div className="cbox-2 process-step col-md-4">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          3
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-22 w-700">
                          Trial Period, Risk-Free Hiring
                        </h5>
                        <p className="mb-0">
                          Evaluate your new team member on a trial basis,
                          ensuring a perfect match.
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
          {/* END FEATURES-11 */}
        </div>
      </Layout>
    </>
  );
}
