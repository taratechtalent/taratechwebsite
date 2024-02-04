/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import { ServiceItemDetails } from "../serviceItem.component";

export default function UIUXService() {
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
                <section className="ct-01 inner-page-hero content-section division">
                  <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                      {/* TEXT BLOCK */}
                      <div className="col-md-6 order-last order-md-2">
                        <div className="txt-block left-column wow fadeInRight">
                          {/* Section ID */}
                          {/* Title */}
                          <h2 className="s-46 w-700">UI/UX Design</h2>
                          {/* Text */}
                          <p>
                            UI/UX Design involves creating engaging and
                            intuitive user interfaces for digital products.
                            While User Interface (UI) focuses on the look and
                            layout, User Experience (UX) ensures the logical
                            flow and user journey. This section explores the
                            integral role of UI/UX design in creating successful
                            digital products.
                          </p>
                        </div>
                      </div>{" "}
                      {/* END TEXT BLOCK */}
                      {/* IMAGE BLOCK */}
                      <div className="col-md-6 order-first order-md-2">
                        <div className="img-block right-column wow fadeInLeft">
                          <img
                            className="img-fluid"
                            src="/images/services/internals/ui ux design.png"
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
                <hr
                  className="divider"
                  style={{ marginTop: "50px !important" }}
                />
                <div className="project-description">
                  {/* PROJECT TEXT */}
                  <div className="project-txt">
                    {/* Text */}
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
                              <span className="section-id">The UI/UX </span>
                              {/* Title */}
                              <h2 className="s-46 w-700">Design Process</h2>
                              {/* Text */}
                              <p>
                                UI Design is the graphical layout of an
                                application. It consists of the buttons users
                                click on, the text they read, the images,
                                sliders, text entry fields, and all the rest of
                                the items the user interacts with. This section
                                emphasizes the importance of visually appealing
                                and interactive elements.
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
                                    className="fbox-12 bg--white-100 block-shadow r-12 mb-30 !min-h-[150px]"
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
                                      <h5 className="s-20 w-700">Research</h5>
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
                                      <h5 className="s-20 w-700">Design</h5>
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
                                      <h5 className="s-20 w-700">Testing</h5>
                                    </div>
                                  </div>
                                  {/* FEATURE BOX #4 */}
                                  <div
                                    id="fb-12-4"
                                    className="fbox-12 bg--white-100 block-shadow r-12 !min-h-[150px]"
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
                                      <h5 className="s-20 w-700">Launch</h5>
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
                    <hr
                      className="divider"
                      style={{ marginTop: "20px !important" }}
                    />
                    {/* Text */}
                    {/* END PROJECT IMAGES */}
                    {/* WIDE IMAGE */}
                    <div className="project-inner-img mt-60">
                      <div className="project-image project-preview r-10">
                        {/* Project Preview */}
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="https://segwitz.com/wp-content/uploads/5757453-scaled.jpg"
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
                      <div className="row">
                        <div className="col text-center mb-32">
                          <h2 className="s-46 w-700">
                            Innovative UI/UX Design Services
                          </h2>
                          <p className="s-21 color--grey mt-6">
                            Delivering elegant, user-centric UI/UX design
                            solutions tailored for the future of digital
                            interaction.
                          </p>
                        </div>
                      </div>
                      <div className="container wow fadeInRight">
                        {/* SECTION TITLE */}
                        {/* TESTIMONIALS-2 WRAPPER */}
                        <div className="reviews-2-wrapper rel">
                          <div className="row align-items-center row-cols-1 row-cols-md-2">
                            {/* TESTIMONIAL #1 */}
                            <ServiceItemDetails
                              title="Principles of Good UI/UX Design"
                              description="A dive into the core principles that make a design effective, including clarity, simplicity, consistency, accessibility, and feedback. Understanding these principles is crucial for creating intuitive and enjoyable user experiences."
                            />
                            <ServiceItemDetails
                              title="User-Centered Design (UCD)"
                              description="Exploring the UCD process, which involves designing a product from the perspective of how it will be understood and used by the user. This section emphasizes the importance of involving users throughout the design process."
                            />
                            <ServiceItemDetails
                              title="Challenges in UI/UX Design"
                              description="Discussing common challenges faced by UI/UX designers, such as keeping up with changing user preferences, designing for diverse user groups, and integrating user feedback effectively."
                            />{" "}
                            <ServiceItemDetails
                              title="Future of UI/UX Design"
                              description="Exploring current trends in UI/UX design like voice UI, augmented reality, virtual reality, and how these are shaping the future of user interfaces and experiences."
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
