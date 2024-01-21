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
                    <h2 className="s-46 w-700">Transforming Tech Excellence</h2>
                    {/* Text */}
                    <p>
                      At TaraTalent, we understand that technology drives the
                      modern world. Our mission is to connect forward-thinking
                      companies in the technology sector with the exceptional
                      talent they need to innovate, create cutting-edge
                      solutions, and stay ahead in this rapidly evolving
                      industry.
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
                    <h5 className="s-24 w-700 mb-20">Tech Insights</h5>
                    {/* Text */}
                    <p>
                      At TaraTalent, we understand the tech landscape. Our
                      experts keep pace with industry trends, offering tailored
                      talent for your tech needs.
                    </p>

                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Custom Solutions</h5>
                    {/* Text */}
                    <p>
                      We connect tech-driven companies with skilled
                      professionals. No outsourcing. Just direct access to the
                      right experts across tech domains.
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Tech Impact</h5>
                    {/* Text */}
                    <p>
                      Our professionals drive tech innovation. From software
                      development to AI, web dev, and cybersecurity, they
                      elevate digital experiences and safeguard assets.
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
                    <h2 className="s-50 w-700">
                      Mastering the Technological Frontier
                    </h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Discover {`TaraTalent's`} unparalleled expertise in the
                      technology realm. Our carefully selected professionals are
                      at the forefront of innovation, specializing in various
                      key domains:
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
                        <h6 className="s-22 w-700">Software Development</h6>
                        <p>
                          Our hand-picked professionals excel in software
                          development, crafting robust and scalable applications
                          tailored to your needs.
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
                        <h6 className="s-22 w-700">AI & Machine Learning</h6>
                        <p>
                          Harness the power of artificial intelligence and
                          machine learning with our expert talent who bring
                          intelligence to your products and services.
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
                        <h6 className="s-22 w-700">Web Development</h6>
                        <p>
                          Elevate your online presence with our web development
                          experts, creating user-friendly websites and web
                          applications.
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
                        <h6 className="s-22 w-700">Cybersecurity</h6>
                        <p>
                          Protect your digital assets with our cybersecurity
                          specialists who ensure your systems are safe from
                          threats.
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
