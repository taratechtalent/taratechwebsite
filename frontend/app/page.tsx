/* eslint-disable @next/next/no-img-element */
import Layout from "./components/layout/Layout";

import Hero from "./components/section/Hero";
import Brands from "./components/section/Brand";
import Features from "./components/section/Features";

import Link from "next/link";
import ServiceContactComponent from "./component/service.contact.component";

export default function Home() {
  return (
    <Layout headerCls="navbar-dark light-hero-header">
      <Hero />
      <hr className="divider" />
      <UniqueApproach />
      <hr className="divider" />

      <OurProcess />
      <hr className="divider" />

      <Features />
      <hr className="divider" />

      <Services />
      <hr className="divider" />

      <Brands />
      <hr className="divider" />

      <ServiceContactComponent />
    </Layout>
  );
}

const Services = () => {
  return (
    <section
      id="features-12"
      className="shape--bg shape--white-400  features-section division pt-10"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-5">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">Amazing Solution</span>
              {/* Title */}
              <h2 className="s-46 w-700">
                Amazing service with amazing talents
              </h2>
              {/* Text */}
              <p>
                we offer amazing talent for various types of services that cover
                most of your needs
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
                      <h5 className="s-20 w-700">Web App Development</h5>
                      <p>
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
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
                      <h5 className="s-20 w-700">Mobile App Development</h5>
                      <p>
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
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
                      <h5 className="s-20 w-700">UI/UX Design</h5>
                      <p>
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
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
                      <h5 className="s-20 w-700">AI/Machine Learning</h5>
                      <p>
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
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
                  {/* Vector Icon */}
                  <span className="flaticon-click-1" />
                  {/* Shape */}
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
                <h5 className="s-20 w-700">Devops</h5>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a
                  ligula auctor
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
                  {/* Vector Icon */}
                  <span className="flaticon-click-1" />
                  {/* Shape */}
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
                <h5 className="s-20 w-700">Digital Arts</h5>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a
                  ligula auctor
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
                  {/* Vector Icon */}
                  <span className="flaticon-click-1" />
                  {/* Shape */}
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
                <h5 className="s-20 w-700">Software testing & QA</h5>
                <p>
                  Porta semper lacus and cursus feugiat at primis ultrice a
                  ligula auctor
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
    <section className="pt-44 ct-02 content-section division">
      <div className="container">
        {/* SECTION CONTENT (ROW) */}
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id">why us</span>
              {/* Title */}
              <h2 className="s-50 w-700">Our unique approach</h2>
              {/* Text */}
              <p>
                Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus vitae purus an ipsum suscipit
              </p>
              {/* Text */}
              <ul className="ml-10">
                <li>
                  Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna and
                  ligula cursus purus vitae purus an ipsum suscipit
                </li>
              </ul>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6">
            <div className="img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-06.png"
                alt="content-image"
              />
            </div>
          </div>
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
    <section className="pt-100 ct-04 content-section division">
      <div className="container">
        {/* SECTION CONTENT (ROW) */}
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 order-last  order-md-2">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="s-54 w-700">Our process:</h5>
                <h5 className="s-36 w-700">simple, smooth, systematic</h5>
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
                  <h5 className="s-22 w-700">Simple, Secure &amp; Intuitive</h5>
                  <p>
                    Ligula risus auctor tempus feugiat dolor lacinia nemo purus
                    in lipsum purus sapien quaerat a primis viverra tellus vitae
                    luctus dolor ipsum neque ligula quaerat
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
                  <h5 className="s-22 w-700">Weekly Email Reports</h5>
                  <p>
                    Ligula risus auctor tempus feugiat dolor lacinia nemo purus
                    in lipsum purus sapien quaerat a primis viverra tellus vitae
                    luctus dolor ipsum neque ligula quaerat
                  </p>
                </div>
              </div>{" "}
              {/* END CONTENT BOX #2 */}
              {/* CONTENT BOX #3 */}
              <div className="cbox-2 process-step">
                {/* Icon */}
                <div className="ico-wrap">
                  <div className="cbox-2-ico bg--theme color--white">3</div>
                </div>
                {/* Text */}
                <div className="cbox-2-txt">
                  <h5 className="s-22 w-700">No Personal Data Collected</h5>
                  <p className="mb-0">
                    Ligula risus auctor tempus feugiat dolor lacinia nemo purus
                    in lipsum purus sapien quaerat a primis viverra tellus vitae
                    luctus dolor ipsum n eque ligula quaerat
                  </p>
                </div>
              </div>
              <div className="cbox-2 process-step">
                {/* Icon */}
                <div className="ico-wrap"></div>
                {/* Text */}
                <div className="cbox-2-txt">
                  <Link
                    href="/book"
                    className="btn r-04 btn--theme hover--tra-white last-link ml-20"
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
