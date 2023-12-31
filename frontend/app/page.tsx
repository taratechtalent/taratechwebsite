import Layout from "./components/layout/Layout";

import Hero from "./components/section/Hero";
import Brands from "./components/section/Brand";
import Features from "./components/section/Features";
import Links from "./components/section/Links";
import Features2 from "./components/section/Features2";
import Categories from "./components/section/Categories";
import Links2 from "./components/section/Links2";
import Categories2 from "./components/section/Categories2";
import Categories3 from "./components/section/Categories3";
import Links3 from "./components/section/Links3";
import Statistic from "./components/section/Statistic";
import Features3 from "./components/section/Feature3";
import Links4 from "./components/section/Links4";
import Categories4 from "./components/section/Categories4";
import Integrations from "./components/section/Integrations";
import Reviews from "./components/section/Reviews";
import FAQs from "./components/section/FAQ";
import Banner from "./components/section/Banner";

export default function Home() {
  return (
    <Layout headerCls="navbar-dark light-hero-header">
      <Hero />
      <hr className="divider" />
      <section
        id="features-12"
        className="shape--bg shape--white-400 pt-100 features-section division"
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
                  we offer amazing talent for various types of services that
                  cover most of your needs
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
                          Porta semper lacus and cursus feugiat at primis
                          ultrice a ligula auctor
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
                          Porta semper lacus and cursus feugiat at primis
                          ultrice a ligula auctor
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
                          Porta semper lacus and cursus feugiat at primis
                          ultrice a ligula auctor
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
                          Porta semper lacus and cursus feugiat at primis
                          ultrice a ligula auctor
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

      <Brands />

      <Features />
      <hr className="divider" />
      <Links />
      <Features2 />
      <Categories />
      <Links2 />
      <Categories2 />
      <Categories3 />
      <Links3 />
      <Statistic />
      <hr className="divider" />
      <Features3 />
      <Links4 />
      <Categories4 />
      <Integrations />
      <Reviews />
      <FAQs />
      <Banner />
    </Layout>
  );
}
