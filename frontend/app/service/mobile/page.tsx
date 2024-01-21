/* eslint-disable @next/next/no-img-element */
import ServiceContactComponent from "@/app/component/service.contact.component";
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";

export default function MobileDevelopmentService() {
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
                    <h2 className="s-52 w-700">Mobile App Development</h2>
                  </div>
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
                      devices and optimized to take advantage of those
                      {`products'`}
                      unique features and hardware. This section explores the
                      significance of mobile apps in the modern digital
                      ecosystem and their impact on businesses and consumers
                      alike.
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
                                Understanding Different
                              </span>
                              {/* Title */}
                              <h2 className="s-46 w-700">Mobile App Types</h2>
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
                          </div>
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
                                    </div>
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">
                                        Native Apps
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
                                    </div>
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">Web Apps</h5>
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
                                    </div>
                                    {/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                      <h5 className="s-20 w-700">
                                        Hybrid Apps
                                      </h5>
                                    </div>
                                  </div>
                                  {/* FEATURE BOX #4 */}
                                </div>
                              </div>
                            </div>
                            {/* End row */}
                          </div>
                          {/* END FEATURES-12 WRAPPER */}
                        </div>
                        {/* End row */}
                      </div>
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
                    </div>
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
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Testing Your Mobile App
                                  </h6>
                                  <p className="text-left">
                                    Testing is crucial to ensure the {`app's`}
                                    quality, performance, security, and
                                    usability. This includes unit testing,
                                    integration testing, performance testing,
                                    and user acceptance testing.
                                  </p>
                                </div>
                              </div>
                            </div>
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
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Mobile App User Experience (UX)
                                  </h6>
                                  <p className="text-left">
                                    An {`app's`} success heavily relies on its
                                    user experience. Good UX ensures the app is
                                    easy to use, meets user needs, and provides
                                    a seamless journey from start to finish.
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
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Choosing the Right Technology Stack
                                  </h6>
                                  <p className="text-left">
                                    The choice between native, web, and hybrid
                                    technologies impacts the performance, user
                                    experience, and maintenance of the app.
                                    Popular tools and languages include Swift
                                    and Kotlin for native iOS and Android apps,
                                    respectively, and frameworks like React
                                    Native or Flutter for hybrid apps.
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
                                </div>
                                {/* Text */}
                                <div className="fbox-txt">
                                  <h6 className="s-22 w-700">
                                    Design Considerations for Mobile Apps
                                  </h6>
                                  <p className="text-left">
                                    Focus on user-centric design principles,
                                    considering factors like screen size,
                                    graphics, and user navigation. {`It's`} also
                                    important to make apps accessible and
                                    inclusive to reach a wider audience.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            {/* END FEATURE BOX #3 */}
                          </div>
                          {/* End row */}
                        </div>
                        {/* END FEATURES-2 WRAPPER */}
                      </div>
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
                              <div className="row">
                                <div className="col mb-20">
                                  <h2>Key Stages of Mobile App Development</h2>
                                </div>
                              </div>
                              {/* CONTENT BOX #1 */}
                              <div className="cbox-2 process-step">
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
                                    Strategy Formation
                                  </h5>
                                  <p>
                                    Defining the {`app's`} objectives, target
                                    audience, and competitive landscape.
                                  </p>
                                </div>
                              </div>
                              {/* END CONTENT BOX #1 */}
                              {/* CONTENT BOX #2 */}
                              <div className="cbox-2 process-step">
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
                                    Analysis & Planning
                                  </h5>
                                  <p>
                                    Identifying the app requirements and
                                    preparing a product roadmap.
                                  </p>
                                </div>
                              </div>
                              {/* END CONTENT BOX #2 */}
                              {/* CONTENT BOX #3 */}
                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    3
                                  </div>
                                  <span className="cbox-2-line" />
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">UI/UX Design</h5>
                                  <p className="mb-0">
                                    Designing the {`app's`} interface and user
                                    experience to be intuitive and engaging.
                                  </p>
                                </div>
                              </div>

                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    4
                                  </div>
                                  <span className="cbox-2-line" />
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">
                                    App Development
                                  </h5>
                                  <p className="mb-0">
                                    Coding the app, choosing the right
                                    technology stack, and following best
                                    development practices.
                                  </p>
                                </div>
                              </div>

                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    5
                                  </div>
                                  <span className="cbox-2-line" />
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">Testing</h5>
                                  <p className="mb-0">
                                    Rigorous QA testing to ensure the {`app's`}
                                    functionality and performance.
                                  </p>
                                </div>
                              </div>

                              <div className="cbox-2 process-step">
                                {/* Icon */}
                                <div className="ico-wrap">
                                  <div className="cbox-2-ico bg--theme color--white">
                                    6
                                  </div>
                                </div>
                                {/* Text */}
                                <div className="cbox-2-txt">
                                  <h5 className="s-22 w-700">
                                    Deployment & Support
                                  </h5>
                                  <p className="mb-0">
                                    Launching the app on the respective app
                                    stores and providing ongoing maintenance and
                                    updates.
                                  </p>
                                </div>
                              </div>
                              {/* END CONTENT BOX #3 */}
                            </div>
                          </div>
                          {/* END TEXT BLOCK */}
                          {/* IMAGE BLOCK */}
                        </div>
                        {/* END SECTION CONTENT (ROW) */}
                      </div>
                      {/* End container */}
                    </section>
                  </div>
                  {/* END PROJECT TEXT */}
                  {/* MORE PROJECTS BUTTON */}
                </div>
              </div>
              {/* END PROJECT DISCRIPTION */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </section>
        {/* END SINGLE PROJECT-1 */}
        {/* BANNER-6
============================================= */}
      </div>
      <ServiceContactComponent />
    </Layout>
  );
}
