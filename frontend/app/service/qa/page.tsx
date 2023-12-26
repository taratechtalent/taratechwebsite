/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";

export default function QAService() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={3}
      headerCls="navbar-dark inner-page-header"
    >
      <div>
        <section
          id="project-1"
          className="gr--whitesmoke inner-page-hero single-project"
        >
          <div className="container">
            <div className="row justify-content-center">
              {/* PROJECT DISCRIPTION */}
              <div className="col-lg-11 col-xl-10">
                <div className="project-description">
                  {/* PROJECT TITLE */}
                  <div className="project-title">
                    {/* Title */}
                    <h2 className="s-52 w-700">Software testing & QA</h2>
                  </div>{" "}
                  {/* END PROJECT TITLE */}
                  {/* PROJECT PREVIEW IMAGE  */}
                  <div className="project-priview-img mb-50 text-center">
                    <img
                      className="img-fluid r-16"
                      src="/images/services/qaService.webp"
                      alt="project-preview"
                    />
                  </div>
                  {/* PROJECT TEXT */}
                  <div className="project-txt">
                    {/* Text */}
                    <p>
                      Software testing and QA are critical components of the
                      software development lifecycle, ensuring that applications
                      meet the required standards and specifications. This
                      section introduces the concepts and explains their
                      significance in delivering reliable and high-quality
                      software products.
                    </p>
                    {/* Small Title */}
                    <section
                      id="features-12"
                      className="shape--bg shape--white-400 pt-100 features-section division mb-40"
                    >
                      <div className="container">
                        <div className="row d-flex align-items-center">
                          {/* TEXT BLOCK */}
                          <div className="col-md-5">
                            <div className="txt-block left-column wow fadeInRight">
                              {/* Section ID */}
                              <span className="section-id">
                                Fundamentals of{" "}
                              </span>
                              {/* Title */}
                              <h2 className="s-46 w-700">Software Testing</h2>
                              {/* Text */}
                              <p>
                                Software testing is the systematic activity to
                                find defects in software and assess its overall
                                quality. It involves the execution of
                                software/system components using manual or
                                automated tools to evaluate one or more
                                properties of interest.
                              </p>
                            </div>
                          </div>{" "}
                          {/* END TEXT BLOCK */}
                          {/* FEATURES-12 WRAPPER */}
                          <div className="col-md-7">
                            <div className="fbox-12-wrapper wow fadeInLeft">
                              <div className="row">
                                <div className="col-md-6">
                                  {/* FEATURE BOX #1 */}
                                  <div
                                    id="fb-12-1"
                                    className="fbox-12 bg--white-100 block-shadow r-12 mb-30"
                                  >
                                    {/* Icon */}
                                    <div className="fbox-ico ico-50">
                                      <div className="shape-ico color--theme">
                                        {/* Vector Icon */}
                                        <span className="flaticon-layers-1" />
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
                                    </div>{" "}
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">
                                        Integration Testing
                                      </h5>
                                    </div>
                                  </div>
                                  {/* FEATURE BOX #2 */}
                                  <div
                                    id="fb-12-2"
                                    className="fbox-12 bg--white-100 block-shadow r-12 !min-h-[150px]"
                                  >
                                    {/* Icon */}
                                    <div className="fbox-ico ico-50">
                                      <div className="shape-ico color--theme">
                                        {/* Vector Icon */}
                                        <span className="flaticon-click-1" />
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
                                    </div>{" "}
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">
                                        Unit Testing
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  {/* FEATURE BOX #3 */}
                                  <div
                                    id="fb-12-3"
                                    className="fbox-12 bg--white-100 block-shadow r-12 mb-30 !min-h-[150px]"
                                  >
                                    {/* Icon */}
                                    <div className="fbox-ico ico-50">
                                      <div className="shape-ico color--theme">
                                        {/* Vector Icon */}
                                        <span className="flaticon-prioritize" />
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
                                    </div>{" "}
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">
                                        Acceptance Testing
                                      </h5>
                                    </div>
                                  </div>
                                  {/* FEATURE BOX #4 */}
                                  <div
                                    id="fb-12-4"
                                    className="fbox-12 bg--white-100 block-shadow r-12"
                                  >
                                    {/* Icon */}
                                    <div className="fbox-ico ico-50">
                                      <div className="shape-ico color--theme">
                                        {/* Vector Icon */}
                                        <span className="flaticon-analytics" />
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
                                    </div>{" "}
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">
                                        System Testing
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                            {/* End row */}
                          </div>{" "}
                          {/* END FEATURES-12 WRAPPER */}
                        </div>{" "}
                        {/* End row */}
                      </div>{" "}
                      {/* End container */}
                    </section>
                    {/* Text */}
                    {/* END PROJECT IMAGES */}
                    {/* WIDE IMAGE */}
                    <div className="project-inner-img mt-60">
                      <div className="project-image project-preview r-10">
                        {/* Project Preview */}
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="/images/services/10-Web-Development-Frameworks.webp"
                            alt="project-preview"
                          />
                          <div className="item-overlay" />
                        </div>
                        {/* Project Link */}
                      </div>
                    </div>{" "}
                    {/* END WIDE IMAGE */}
                    {/* Small Title */}
                    {/* END VIDEO PREVIEW */}
                    <section
                      id="features-2"
                      className="pt-100 features-section division"
                    >
                      <div className="container">
                        {/* SECTION TITLE */}
                        {/* FEATURES-2 WRAPPER */}
                        <div className="fbox-wrapper text-center">
                          <div className="row row-cols-1 row-cols-md-3">
                            {/* FEATURE BOX #1 */}
                            <div className="col-md-6">
                              <div className="fbox-2 fb-1 wow fadeInUp">
                                {/* Image */}
                                <div className="fbox-img gr--whitesmoke h-175">
                                  <img
                                    className="img-fluid light-theme-img"
                                    src="/images/services/Design and User Experience.webp"
                                    alt="feature-image"
                                  />
                                  <img
                                    className="img-fluid dark-theme-img"
                                    src="/images/f_01_dark.png"
                                    alt="feature-image"
                                  />
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Test Planning and Design
                                  </h6>
                                  <p className="text-left">
                                    Test planning involves defining the
                                    objectives and approach to testing, while
                                    test design is about creating test cases
                                    that effectively cover expected outcomes and
                                    edge cases, ensuring comprehensive testing
                                    coverage.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                            {/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col-md-6">
                              <div className="fbox-2 fb-2 wow fadeInUp">
                                {/* Image */}
                                <div className="fbox-img gr--whitesmoke h-175">
                                  <img
                                    className="img-fluid light-theme-img"
                                    src="/images/services/Development Process.webp"
                                    alt="feature-image"
                                  />
                                  <img
                                    className="img-fluid dark-theme-img"
                                    src="/images/services/Development Process.webp"
                                    alt="feature-image"
                                  />
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Quality Assurance Processes
                                  </h6>
                                  <p className="text-left">
                                    QA encompasses a broader aspect of ensuring
                                    the software meets the desired quality and
                                    standards throughout the development
                                    lifecycle. It involves a proactive approach
                                    with continuous monitoring and systematic
                                    activities to improve the processes.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="fbox-2 fb-2 wow fadeInUp">
                                {/* Image */}
                                <div className="fbox-img gr--whitesmoke h-175">
                                  <img
                                    className="img-fluid light-theme-img"
                                    src="/images/services/Testing and Quality Assurance.webp"
                                    alt="feature-image"
                                  />
                                  <img
                                    className="img-fluid dark-theme-img"
                                    src="/images/f_05_dark.png"
                                    alt="feature-image"
                                  />
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Test Automation
                                  </h6>
                                  <p className="text-left">
                                    Test automation involves using specialized
                                    tools to execute tests and compare actual
                                    outcomes against expected results. It
                                    significantly enhances testing speed,
                                    accuracy, and efficiency, especially in
                                    large and complex projects.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="fbox-2 fb-2 wow fadeInUp">
                                {/* Image */}
                                <div className="fbox-img gr--whitesmoke h-175">
                                  <img
                                    className="img-fluid light-theme-img"
                                    src="/images/services/Security Considerations.webp"
                                    alt="feature-image"
                                  />
                                  <img
                                    className="img-fluid dark-theme-img"
                                    src="/images/f_05_dark.png"
                                    alt="feature-image"
                                  />
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Managing Testing Activities
                                  </h6>
                                  <p className="text-left">
                                    Effective test management includes
                                    organizing teams, managing resources,
                                    scheduling activities, and handling test
                                    environments and data. {`It's`} about
                                    overseeing the testing process to ensure it
                                    is efficient, systematic, and productive.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            {/* END FEATURE BOX #3 */}
                          </div>{" "}
                          {/* End row */}
                        </div>{" "}
                        {/* END FEATURES-2 WRAPPER */}
                      </div>{" "}
                      {/* End container */}
                    </section>
                    {/* Small Title */}
                    <section className="pt-100 ct-04 content-section division mb-60">
                      <div className="container">
                        {/* SECTION CONTENT (ROW) */}
                        <div className="row d-flex align-items-center">
                          {/* TEXT BLOCK */}
                          <div className="col-md-9 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                              {/* CONTENT BOX #1 */}
                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    **
                                  </div>
                                  <span className="cbox-2-line" />
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">
                                    Challenges in Software Testing
                                  </h5>
                                  <p>
                                    Testing faces challenges like rapidly
                                    changing requirements, limited resources,
                                    and maintaining relevance with evolving
                                    technology. Addressing these requires
                                    strategic planning, adaptability, and
                                    continuous learning.
                                  </p>
                                </div>
                              </div>{" "}
                              {/* END CONTENT BOX #1 */}
                              {/* CONTENT BOX #2 */}
                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    **
                                  </div>
                                  <span className="cbox-2-line" />
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">
                                    Emerging Trends and Technologies
                                  </h5>
                                  <p>
                                    The field of software testing is continually
                                    evolving with trends like AI in testing,
                                    Continuous Integration/Continuous Deployment
                                    (CI/CD), and incorporating DevOps in QA
                                    processes, shaping the future of how we test
                                    software.
                                  </p>
                                </div>
                              </div>{" "}
                              {/* END CONTENT BOX #2 */}
                              {/* CONTENT BOX #3 */}
                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    **
                                  </div>
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">
                                    Best Practices in Software Testing & QA
                                  </h5>
                                  <p className="mb-0">
                                    Adopting best practices such as early
                                    testing, prioritizing bug fixes, and
                                    maintaining clear documentation leads to
                                    effective and efficient testing processes,
                                    ultimately resulting in higher quality
                                    software.
                                  </p>
                                </div>
                              </div>{" "}
                              {/* END CONTENT BOX #3 */}
                            </div>
                          </div>{" "}
                          {/* END TEXT BLOCK */}
                          {/* IMAGE BLOCK */}
                        </div>{" "}
                        {/* END SECTION CONTENT (ROW) */}
                      </div>{" "}
                      {/* End container */}
                    </section>
                  </div>{" "}
                  {/* END PROJECT TEXT */}
                  {/* MORE PROJECTS BUTTON */}
                </div>
              </div>{" "}
              {/* END PROJECT DISCRIPTION */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END SINGLE PROJECT-1 */}
        {/* BANNER-6
============================================= */}
      </div>
      <ServiceContactComponent />
    </Layout>
  );
}
