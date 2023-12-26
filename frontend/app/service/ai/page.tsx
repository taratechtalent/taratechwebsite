/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";

export default function AIService() {
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
                    <h2 className="s-52 w-700">AI/Machine Learning</h2>
                  </div>{" "}
                  {/* END PROJECT TITLE */}
                  {/* PROJECT PREVIEW IMAGE  */}
                  <div className="project-priview-img mb-50 text-center">
                    <img
                      className="img-fluid r-16"
                      src="/images/services/webDevelopment.png"
                      alt="project-preview"
                    />
                  </div>
                  {/* PROJECT TEXT */}
                  <div className="project-txt">
                    {/* Text */}
                    <p>
                      AI/Machine Learning is a field of computer science that
                      focuses on creating systems that learn from data and
                      improve their performance over time. This section
                      introduces the concepts of AI and machine learning,
                      highlighting their significance in driving innovation
                      across various industries.
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
                              <span className="section-id">Understanding </span>
                              {/* Title */}
                              <h2 className="s-46 w-700">Artificial Intelligence </h2>
                              {/* Text */}
                              <p>
                                Artificial Intelligence (AI) is the broader
                                concept of machines being able to carry out
                                tasks in a way that we would consider{" "}
                                {`"smart."`}
                                It involves technologies that enable computers
                                to mimic human intelligence, using logic,
                                decision trees, and algorithms.
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
                                        Single Page Applications (SPAs)
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
                                        Static application
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
                                        Dynamic Application
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
                                        Progressive Web Apps (PWAs)
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
                                    Design and User Experience
                                  </h6>
                                  <p className="text-left">
                                    An effective web application combines
                                    aesthetics with functionality. Responsive
                                    design ensures your app looks great on any
                                    device, while adaptive design tailors to
                                    specific devices or screen sizes.
                                    Prioritizing accessibility makes your app
                                    usable by as many people as possible,
                                    including those with disabilities.
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
                                    Development Process
                                  </h6>
                                  <p className="text-left">
                                    Web development typically follows stages:
                                    planning, design, development, testing, and
                                    deployment. Agile methodologies focus on
                                    iterative development and collaboration,
                                    while Waterfall is a linear approach.
                                    Choosing the right method depends on project
                                    size, team dynamics, and other factors.
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
                                    Technologies and Frameworks
                                  </h6>
                                  <p className="text-left">
                                    Building web applications requires a mix of
                                    client-side and server-side technologies.
                                    HTML, CSS, and JavaScript are foundational
                                    for creating user interfaces, enhanced by
                                    libraries like React or Angular. Server-side
                                    languages such as Node.js, Python, or Ruby
                                    on Rails manage the {`app's `}logic and
                                    database interactions. The choice of
                                    technology impacts the {`app's`}{" "}
                                    performance, scalability, and
                                    maintainability.
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
                                    Security Considerations
                                  </h6>
                                  <p className="text-left">
                                    Security is paramount in web development to
                                    protect sensitive data and maintain user
                                    trust. Developers must guard against SQL
                                    injection, Cross-Site Scripting (XSS), and
                                    other vulnerabilities. Implementing HTTPS,
                                    regular security audits, and following best
                                    practices helps mitigate risks.
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
                                    Testing and Quality Assurance
                                  </h5>
                                  <p>
                                    Testing ensures your web application
                                    functions correctly and meets quality
                                    standards. This includes unit testing
                                    individual components, integration testing
                                    combined parts, and system testing the
                                    entire application. Effective QA identifies
                                    bugs and issues before users encounter them.
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
                                    Deployment and Maintenance
                                  </h5>
                                  <p>
                                    Deployment involves transferring the web
                                    application from a local environment to a
                                    production server. Considerations include
                                    choosing the right hosting, managing
                                    databases, and configuring servers.
                                    Post-launch, regular maintenance and updates
                                    keep the app secure and functional.
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
                                    Emerging Trends and Future of Web
                                    Application Development
                                  </h5>
                                  <p className="mb-0">
                                    The field of web development is continuously
                                    evolving with trends like AI, machine
                                    learning, and the Internet of Things (IoT)
                                    shaping its future. Developers need to stay
                                    informed about these trends to create
                                    innovative and competitive applications.
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
