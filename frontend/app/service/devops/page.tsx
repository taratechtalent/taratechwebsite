/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";
import { ServiceItemDetails } from "../serviceItem.component";

export default function DevopsService() {
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
                    <h2 className="s-52 w-700">Devops</h2>
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
                      DevOps is a set of practices that combines software
                      development (Dev) and IT operations (Ops), aiming to
                      shorten the system development life cycle and provide
                      continuous delivery with high software quality. {`It's`} a
                      cultural shift that fosters collaboration between
                      development and operations teams, leading to more
                      efficient and reliable systems.
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
                                Key Practices in
                              </span>
                              {/* Title */}
                              <h2 className="s-46 w-700">DevOps</h2>
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
                                        Continuous Integration (CI)
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
                                        Continuous Delivery (CD)
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
                                        Infrastructure as Code (IaC)
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
                                        Monitoring & Logging
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
                            src="https://www.qentelli.com/sites/default/files/2021-04/devops-tool-part-2.jpg"
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
                              title="Benefits of DevOps"
                              description="DevOps offers numerous benefits, including faster deployment, fewer deployment failures, shortened lead time between fixes, and faster mean time to recovery. It fosters a culture of collaboration, enhances efficiencies, and generally results in happier, more productive teams."
                            />
                            <ServiceItemDetails
                              title="Implementing DevOps"
                              description="Implementing DevOps is a cultural shift as much as it is a technical one. It involves adopting new tools, practices, and often a change in mindset. Key steps include embracing collaborative culture, integrating development and operations teams, and adopting the right set of automation tools."
                            />
                            <ServiceItemDetails
                              title="DevOps Tools and Technologies"
                              description="There's a vast array of DevOps tools that cater to various aspects of the lifecycle, including Jenkins for CI/CD, Docker for containerization, Kubernetes for container orchestration, Ansible, Puppet, or Chef for automation, and many more."
                            />{" "}
                            <ServiceItemDetails
                              title="Security in DevOps - DevSecOps"
                              description="Integrating security into the DevOps process (often referred to as DevSecOps) ensures that security is a shared responsibility and is accounted for from the start, rather than being an afterthought."
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
