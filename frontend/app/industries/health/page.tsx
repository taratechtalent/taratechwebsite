/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
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
          <section className="ct-01 inner-page-hero content-section division mt-24">
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
                      Schedule a Call
                    </Link>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="/images/industries/header_7c81af9e-e2ff-49c9-9f32-319622544232.jpg"
                      alt="content-image"
                      style={{
                        borderRadius: "15px",
                        boxShadow: "0 4px 12px 0 hsla(192,8%,47%,.43)",
                      }}
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
                  <div id="a3-1" className="txt-block shadow">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Our Expertise</h5>
                    {/* Text */}
                    <p>
                      At TaraTalent, we understand the critical importance of
                      having highly skilled technical professionals who are
                      well-versed in the nuances of healthcare and life
                      sciences. Our experts have a deep understanding of the{" "}
                      {`industry's`} unique challenges and opportunities.
                    </p>
                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block shadow">
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
                  <div id="a3-2" className="txt-block shadow">
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
                            <img src="\images\png_icons\icons8-software-development-64.png"></img>
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
                            <img src="\images\png_icons\icons8-data-analytic-96.png"></img>
                            {/* <span className="flaticon-idea" /> */}
                            {/* Shape */}
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
                            <img src="\images\png_icons\icons8-telemedicine-64.png"></img>
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
                            <img src="\images\png_icons\icons8-tonometer-64.png"></img>
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
          <hr className="divider" />
          <section className="py-100 ct-02 content-section division">
            <div className="container">
              <div className="row">
                <div className="col text-center mb-24">
                  <h2 className="s-52 w-700 mb-20">How to Work With Us</h2>
                  <p className="s-21 color--grey">
                    Achive Your Goal in the Way You Never Experienced Before
                  </p>
                </div>
              </div>
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-12">
                  <div className="txt-block flex right-column wow fadeInLeft row !mb-10">
                    {/* CONTENT BOX #1 */}
                    <div className="cbox-2 process-step col-md-4 col-sm-12">
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
                    <div className="cbox-2 process-step col-md-4 col-sm-12">
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
                    <div className="cbox-2 process-step col-md-4 col-sm-12">
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
                  <ServiceContactComponent
                    title="Come Along and Let's Build a Team Where Achievements Are Limitless!"
                    desc="Your distinct skills and viewpoints are the essential elements we need to complete our shared journey of achievement."
                  />
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
