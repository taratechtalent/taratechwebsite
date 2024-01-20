/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "./components/layout/Layout";

import Hero from "./components/section/Hero";
import Brands from "./components/section/Brand";
import Features from "./components/section/Features";

import Link from "next/link";
import ServiceContactComponent from "./component/service.contact.component";

export default function StartPage() {
  return (
    <Layout headerCls="navbar-dark light-hero-header">
      <Hero />
      <Introduction />
      <Services />
      <hr className="divider" />
      <UniqueApproach />
      <hr className="divider" />
      <Features />
      <OurProcess />
      <hr className="divider" />
      <hr className="divider" />
      <Brands />
      <hr className="divider" />
      <ServiceContactComponent />
    </Layout>
  );
}

const Introduction = () => {
  return (
    <section className="bg--04 bg--fixed py-100 ct-01 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">Co-founder at Taratalent</span>
              {/* Title */}
              <h2 className="s-50 w-700">Amin Derakhshan</h2>
              {/* Text */}
              <p className="p-lg">
                The idea for TaraTalent company emerged from a clear market
                reality: a significant demand for skilled tech professionals
                alongside a need for cost-effective staffing solutions.{`We're`}{" "}
                here to bridge that gap, creating connections that empower
                businesses with the right talent to drive innovation and growth.
              </p>
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-6 order-first order-md-2">
            <div className="img-block j-img video-preview right-column wow fadeInLeft">
              {/* Play Icon */}
              {/* Preview Image */}
              <img
                className="img-fluid r-20"
                src="/images/team/amin.png"
                alt="video-preview"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

const Service2 = () => (
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
              Static web apps are the simplest type, delivering the same content
              to every user, while dynamic web apps interact with users for a
              personalized experience. SPAs offer fluid user experiences by
              reloading only parts of the page, and PWAs combine the best of web
              and mobile apps.
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
                    <h5 className="s-20 w-700">Static application</h5>
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
                    <h5 className="s-20 w-700">Dynamic Application</h5>
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
                    <h5 className="s-20 w-700">Progressive Web Apps (PWAs)</h5>
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
);

const Services = () => {
  return (
    <section
      id="features-12"
      className="shape--bg shape--white-400  features-section division pt-10 pb-20"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-5">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">Expert Solutions</span>
              {/* Title */}
              <h2 className="s-46 w-700">
                Excellence in Every Service: Your Gateway to Expert Talent
              </h2>
              {/* Text */}
              <p>
                Discover a world of premium services, expertly delivered by our
                diverse and skilled professional team.
              </p>
              {/* List */}
              {/* <ul className="simple-list">
              <li className="list-item">
                <p>
                  Tempor sapien quaerat undo ipsum laoreet diam purus sapien
                  a dolor ociis ultrice ipsum aliquam congue a dolor cursus
                  congue varius magnis
                </p>
              </li>
              <li className="list-item">
                <p className="mb-0">
                  Cursus purus suscipit vitae cubilia magnis diam volute
                  egestas sapien ultrice auctor
                </p>
              </li>
            </ul> */}
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
                        <img src="images/services/web.png" />
                      </div>
                    </div>{" "}
                    {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h5 className="s-20 w-700">Web App Development</h5>
                      <p>
                        Creating custom, user-friendly web apps to bring your
                        innovative ideas to life.
                      </p>
                    </div>
                  </div>
                  {/* FEATURE BOX #2 */}
                  <div
                    id="fb-12-2"
                    className="fbox-12 bg--white-100 block-shadow r-12"
                  >
                    {/* Icon */}
                    <div className="fbox-ico ico-50">
                      <div className="shape-ico color--theme">
                        <img src="images/services/mobile.png" />
                      </div>
                    </div>{" "}
                    {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h5 className="s-20 w-700">Mobile App Development</h5>
                      <p>
                        Crafting sleek, efficient mobile apps to connect and
                        engage with users on-the-go
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* FEATURE BOX #3 */}
                  <div
                    id="fb-12-3"
                    className="fbox-12 bg--white-100 block-shadow r-12 mb-30"
                  >
                    {/* Icon */}
                    <div className="fbox-ico ico-50">
                      <div className="shape-ico color--theme">
                        <img src="images/services/ui.png" />
                      </div>
                    </div>{" "}
                    {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h5 className="s-20 w-700">UI/UX Design</h5>
                      <p>
                        Designing intuitive and visually stunning UI/UX to
                        elevate your {`user's`} digital experience.
                      </p>
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
                        <img src="images/services/ai.png" />
                      </div>
                    </div>{" "}
                    {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h5 className="s-20 w-700">AI/Machine Learning</h5>
                      <p>
                        Empowering innovation with cutting-edge AI and Machine
                        Learning solutions tailored for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-12 WRAPPER */}
        </div>{" "}
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4">
            {/* FEATURE BOX #1 */}

            {/* FEATURE BOX #2 */}
            <div
              id="fb-12-2"
              className="fbox-12 bg--white-100 block-shadow r-12"
            >
              {/* Icon */}
              <div className="fbox-ico ico-50">
                <div className="shape-ico color--theme">
                  <img src="images/services/devops.png" />
                </div>
              </div>{" "}
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h5 className="s-20 w-700">Devops</h5>
                <p>
                  Streamlining and optimizing your operations with robust,
                  efficient DevOps services.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            {/* FEATURE BOX #1 */}

            {/* FEATURE BOX #2 */}
            <div
              id="fb-12-2"
              className="fbox-12 bg--white-100 block-shadow r-12"
            >
              {/* Icon */}
              <div className="fbox-ico ico-50">
                <div className="shape-ico color--theme">
                  <img src="images/services/art.png" />
                </div>
              </div>{" "}
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h5 className="s-20 w-700">Digital Arts</h5>
                <p>
                  Bringing creativity to life with unique, captivating digital
                  arts and design
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            {/* FEATURE BOX #1 */}

            {/* FEATURE BOX #2 */}
            <div
              id="fb-12-2"
              className="fbox-12 bg--white-100 block-shadow r-12"
            >
              {/* Icon */}
              <div className="fbox-ico ico-50">
                <div className="shape-ico color--theme">
                  <img src="images/services/qa.png" />
                </div>
              </div>{" "}
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h5 className="s-20 w-700">Software testing & QA</h5>
                <p>
                  Ensuring excellence with thorough software testing and quality
                  assurance for reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

const UniqueApproach = () => {
  return (
    <section className="pt-20 pb-20 ct-02 content-section division">
      <div className="container">
        {/* SECTION CONTENT (ROW) */}
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-06.png"
                alt="content-image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id">why us</span>
              {/* Title */}
              <h2 className="s-50 w-700">Our Unique Approach</h2>
              {/* Text */}
              <p>
                At TaraTalent , we specialize in connecting top-tier, affordable
                tech talent cost-with businesses worldwide, particularly
                startups. Our flexible engagement model, tailored for the
                dynamic needs of modern companies, includes hassle-free contract
                management and full alignment with your time zones, ensuring
                seamless integration of remote workforce.
              </p>
              {/* Text */}
              <ul className="ml-10">
                <li>
                  {`We're`} committed to continuous growth and support for our
                  talents, ensuring they meet your evolving technical demands.
                  With us, you gain not just a service provider, but a strategic
                  partner dedicated to your {`company's`} growth, innovation,
                  and cost-effective staffing solutions.
                </li>
              </ul>
            </div>
          </div>
          {/* IMAGE BLOCK */}

          {/* TEXT BLOCK */}

          {/* END TEXT BLOCK */}
        </div>
        {/* END SECTION CONTENT (ROW) */}
      </div>
      {/* End container */}
    </section>
  );
};

const OurProcess = () => {
  return (
    <section className="pt-100  pb-20 ct-04 content-section division mb-40">
      <div className="container">
        {/* SECTION CONTENT (ROW) */}
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 order-last  order-md-2">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="s-54 w-700">Our Method:</h5>
                <h5 className="s-30 w-700">Precise,Proactive,Productive</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                {" "}
                <div className="wow fadeInRight  pt-10">
                  <img
                    className="img-fluid"
                    src="/images/mainPage/ourProcess.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-first order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* CONTENT BOX #1 */}
              <div className="cbox-2 process-step">
                {/* Icon */}
                <div className="ico-wrap">
                  <div className="cbox-2-ico bg--theme color--white">1</div>
                  <span className="cbox-2-line" />
                </div>
                {/* Text */}
                <div className="cbox-2-txt">
                  <h5 className="s-22 w-700">Set Up a Strategic Meeting</h5>
                  <p>
                    Engage in an in-depth consultation to outline your technical
                    needs and plan the integration with our expert developers.{" "}
                  </p>
                </div>
              </div>{" "}
              {/* END CONTENT BOX #1 */}
              {/* CONTENT BOX #2 */}
              <div className="cbox-2 process-step">
                {/* Icon */}
                <div className="ico-wrap">
                  <div className="cbox-2-ico bg--theme color--white">2</div>
                  <span className="cbox-2-line" />
                </div>
                {/* Text */}
                <div className="cbox-2-txt">
                  <h5 className="s-22 w-700">Develop Your Custom Plan</h5>
                  <p>
                    We work with you to formulate a specialized team structure
                    that matches your {`project's`} goals, ensuring high
                    efficiency and adaptability.
                  </p>
                </div>
              </div>{" "}
              {/* END CONTENT BOX #2 */}
              {/* CONTENT BOX #3 */}
              <div className="cbox-2 process-step">
                {/* Icon */}
                <div className="ico-wrap">
                  <div className="cbox-2-ico bg--theme color--white">3</div>
                  <span className="cbox-2-line" />
                </div>
                {/* Text */}
                <div className="cbox-2-txt">
                  <h5 className="s-22 w-700">Begin and Monitor with Clarity</h5>
                  <p className="mb-0">
                    Start your project under our guidance, with access to clear
                    tracking systems that provide ongoing updates on your{" "}
                    {`team's`} progress and achievements.
                  </p>
                </div>
              </div>
              <div className="cbox-2 process-step">
                {/* Icon */}
                <div className="ico-wrap">
                  <span className="cbox-2-line" />
                </div>
                {/* Text */}
                <div className="cbox-2-txt">
                  <Link
                    href="/book"
                    className="btn r-04 btn--theme hover--theme last-link ml-20"
                    style={{ marginLeft: "60px" }}
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
              {/* END CONTENT BOX #3 */}
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
        </div>{" "}
        {/* END SECTION CONTENT (ROW) */}
      </div>
    </section>
  );
};
