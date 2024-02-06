/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";
import { ServiceItemDetails } from "../serviceItem.component";

export default function DigitalArtService() {
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
                          <h2 className="s-46 w-700">
                            Designing Dreams Building Realities
                          </h2>
                          {/* Text */}
                          <p>
                            At TaraTalent, {`we're`} passionate about turning
                            your architectural visions into tangible structures
                            using Building Information Modeling (BIM). Our team
                            of skilled architects, engineers, and designers
                            collaborates to bring creativity, innovation, and
                            sustainability to every project from concept to
                            construction.
                          </p>
                        </div>
                      </div>{" "}
                      {/* END TEXT BLOCK */}
                      {/* IMAGE BLOCK */}
                      <div className="col-md-6 order-first order-md-2">
                        <div className="img-block right-column wow fadeInLeft">
                          <img
                            className="img-fluid"
                            src="/images/services/internals/building architecture.png"
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
                              {/* Title */}
                              <h2 className="s-46 w-700">
                                Building Architecture Experts{" "}
                              </h2>
                              {/* Text */}
                              <p>
                                Explore architectural innovation with{""}
                                {`TaraTalent's`} expert team, from designers to
                                engineers. We bring visions to life with
                                precision, sustainability, and cutting-edge
                                technology, crafting enduring architectural
                                marvels.
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
                                        Energy and Sustainability Consultant
                                      </h5>
                                    </div>
                                  </div>
                                  {/* FEATURE BOX #2 */}
                                  <div
                                    id="fb-12-2"
                                    className="fbox-12 bg--white-100 block-shadow r-12 !min-h-[150px] mb-30"
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
                                        Architectural Designer
                                      </h5>
                                    </div>
                                  </div>
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
                                        CAD Technician
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
                                        BIM Engineer
                                      </h5>
                                    </div>
                                  </div>
                                  {/* FEATURE BOX #4 */}
                                  <div
                                    id="fb-12-4"
                                    className="fbox-12 bg--white-100 block-shadow r-12 mb-30"
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
                                        Architectural Visualizer
                                      </h5>
                                    </div>
                                  </div>
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
                                        3D Modeling Specialist
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
                            src="https://www.pngitem.com/pimgs/m/73-734675_digital-art-logo-png-transparent-png.png"
                            alt="project-preview"
                            style={{ width: "100%" }}
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
                            Building architecture Revolution
                          </h2>
                          <p className="s-21 color--grey mt-6">
                            Exploring Boundaries, Tools, and Future Horizons
                          </p>
                        </div>
                      </div>
                      <div className="container wow fadeInRight">
                        {/* SECTION TITLE */}
                        {/* TESTIMONIALS-2 WRAPPER */}
                        <div className="reviews-2-wrapper rel">
                          <div className="row align-items-center row-cols-1 row-cols-md-2 mb-36">
                            {/* TESTIMONIAL #1 */}
                            <ServiceItemDetails
                              title="Impact on the Art World"
                              description="TaraTalent's Building Architecture Experts have left an indelible mark on the world of architecture. Their innovative designs and sustainable approaches have reshaped the way we envision and construct buildings. From eco-friendly structures that reduce carbon footprints to breathtaking designs that captivate the eye, our experts have made a profound impact on the architectural landscape."
                            />
                            <ServiceItemDetails
                              title="Tools of the Trade"
                              description="
                              Our Building Architecture Experts wield a powerful arsenal of tools and technologies to bring their designs to life. They utilize state-of-the-art software for 3D modeling and building information modeling (BIM), ensuring precision in every detail. Sustainability is at the forefront, with advanced energy-efficient systems and materials that set new industry standards."
                            />
                            <ServiceItemDetails
                              title="Challenges and Controversies"
                              description="In the pursuit of architectural excellence, challenges and controversies are inevitable. Our experts face complex urban planning issues, environmental concerns, and debates surrounding architectural aesthetics. However, these challenges only fuel their creativity and commitment to finding innovative solutions that benefit both the environment and society."
                            />{" "}
                            <ServiceItemDetails
                              title="The Future"
                              description="
                              The future of building architecture holds exciting possibilities, and TaraTalent's experts are at the forefront of this evolution. They continue to push boundaries with designs that harmonize with nature, embrace sustainable practices, and incorporate cutting-edge technology. As the world evolves, our experts remain dedicated to shaping the future of architectural innovation."
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
