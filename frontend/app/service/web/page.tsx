/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";
import { ServiceItemDetails } from "../serviceItem.component";

export default function WebDevelopmentService() {
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
                    <h2 className="s-52 w-700">Web App Development</h2>
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
                      Web applications have become integral to our daily lives,
                      powering everything from social media to online banking.
                      Unlike traditional applications, web apps run on web
                      servers and are accessed via browsers, offering
                      cross-platform compatibility and convenience. As
                      technology has advanced, so too have web apps, becoming
                      more sophisticated and integral to business strategies.
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
                              <span className="section-id">Types of</span>
                              {/* Title */}
                              <h2 className="s-46 w-700">Web Applications</h2>
                              {/* Text */}
                              <p>
                                Static web apps are the simplest type,
                                delivering the same content to every user, while
                                dynamic web apps interact with users for a
                                personalized experience. SPAs offer fluid user
                                experiences by reloading only parts of the page,
                                and PWAs combine the best of web and mobile
                                apps.
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
                      id="reviews-2"
                      className="gr--whitesmoke inner-page-hero reviews-section"
                    >
                      <div className="container">
                        {/* SECTION TITLE */}
                        {/* TESTIMONIALS-2 WRAPPER */}
                        <div className="reviews-2-wrapper rel">
                          <div className="row align-items-center row-cols-1 row-cols-md-2">
                            {/* TESTIMONIAL #1 */}
                            <ServiceItemDetails
                              title="Design and User Experience"
                              description="An effective web application combines aesthetics with functionality. Responsive design ensures your app looks great on any device, while adaptive design tailors to specific devices or screen sizes. Prioritizing accessibility makes your app usable by as many people as possible, including those with disabilities."
                            />
                            <ServiceItemDetails
                              title="Development Process"
                              description="Web development typically follows stages: planning, design, development, testing, and deployment. Agile methodologies focus on iterative development and collaboration, while Waterfall is a linear approach. Choosing the right method depends on project size, team dynamics, and other factors."
                            />
                            <ServiceItemDetails
                              title="Technologies and Frameworks"
                              description="Building web applications requires a mix of client-side and server-side technologies. HTML, CSS, and JavaScript are foundational for creating user interfaces, enhanced by libraries like React or Angular. Server-side languages such as Node.js, Python, or Ruby on Rails manage the app's logic and database interactions. The choice of technology impacts the app's performance, scalability, and maintainability."
                            />{" "}
                            <ServiceItemDetails
                              title="Security Considerations"
                              description="Security is paramount in web development to protect sensitive data and maintain user trust. Developers must guard against SQL injection, Cross-Site Scripting (XSS), and other vulnerabilities. Implementing HTTPS, regular security audits, and following best practices helps mitigate risks."
                            />{" "}
                            <ServiceItemDetails
                              title="Testing and Quality Assurance"
                              description="Testing ensures your web application functions correctly and meets quality standards. This includes unit testing individual components, integration testing combined parts, and system testing the entire application. Effective QA identifies bugs and issues before users encounter them."
                            />{" "}
                            <ServiceItemDetails
                              title="Deployment and Maintenance"
                              description="Deployment involves transferring the web application from a local environment to a production server. Considerations include choosing the right hosting, managing databases, and configuring servers. Post-launch, regular maintenance and updates keep the app secure and functional."
                            />{" "}
                          </div>{" "}
                          {/* End row */}
                        </div>{" "}
                        {/* END TESTIMONIALS-2 WRAPPER */}
                      </div>{" "}
                      {/* End container */}
                    </section>
                    {/* Small Title */}
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
