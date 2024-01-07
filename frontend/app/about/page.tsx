/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import ServiceComponent from "../component/service.component";
import Layout from "../components/layout/Layout";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          {/* ABOUT-2
			============================================= */}
          <section id="about-2" className="rel  about-section division !pt-40">
            {/* ABOUT-2 TITLE */}
            <div className="container">
              <div className="row">
                <div className="col-md-11 col-lg-10 col-xl-9">
                  <div className="about-2-title mb-60">
                    {/* Title */}
                    <h2 className="s-52 w-700 mb-30">We Empower Excellence</h2>
                    {/* Text */}
                    <p className="mb-0">
                      Your Trusted Partner for Affordable, Senior-Driven
                      Development Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END ABOUT-2 TITLE */}
            {/* ABOUT-2 IMAGES */}
            <div className="container-fluid">
              <div className="row">
                {/* IMAGES-1 */}
                <div className="col-md-5">
                  <div className="text-end">
                    {/* IMAGE-1 */}
                    <div className="about-2-img a-2-1 r-12">
                      <img
                        className="img-fluid"
                        src="/images/a2-1.jpg"
                        alt="about-image"
                      />
                    </div>
                    {/* IMAGE-2 */}
                    <div className="about-2-img a-2-2 r-12">
                      <img
                        className="img-fluid"
                        src="/images/a2-2.jpg"
                        alt="about-image"
                      />
                    </div>
                  </div>
                </div>
                {/* END IMAGES-1 */}
                {/* IMAGES-2 */}
                <div className="col-md-7">
                  {/* IMAGE-3 */}
                  <div className="about-2-img a-2-3 r-12">
                    <img
                      className="img-fluid"
                      src="/images/a2-3.jpg"
                      alt="about-image"
                    />
                  </div>
                  <div className="row">
                    {/* TEXT */}
                    <div className="col-md-7 col-lg-6">
                      <div className="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                        {/* Icon */}
                        <div className="a2-txt-quote ico-40 o-20">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <p>
                          Naser Derakhashan, founder of an HR company, commits
                          to global client excellence with tailored strategies,
                          integrity, and innovative solutions, ensuring
                          efficient, personalized support and fostering lasting
                          partnerships in the ever-evolving world of human
                          resources.
                        </p>
                        {/* Author */}
                        <p className="a2-txt-author">
                          Amin Derakhshan <span>CEO &amp; CO-FOUNDER</span>
                        </p>
                      </div>
                    </div>
                    {/* IMAGE-4 */}
                    <div className="col-md-5 col-lg-6">
                      <div className="about-2-img a-2-4 r-12">
                        <img
                          className="img-fluid"
                          src="/images/a2-4.jpg"
                          alt="about-image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* END IMAGES-2 */}
              </div>
              {/* End row */}
            </div>
            {/* END ABOUT-2 IMAGES */}
          </section>
          {/* END ABOUT-2 */}
          {/* ABOUT-3
			============================================= */}
          <div id="about-3" className="pt-100 about-section division">
            <div className="container">
              <div className="row">
                {/* ABOUT-3 TEXT */}
                <div className="col-md-6">
                  <div id="a3-1" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Mission and impact</h5>
                    {/* Text */}
                    <p>
                      To empower organizations by providing innovative and
                      strategic human resource solutions that cultivate talent,
                      enhance performance, and drive success, while upholding
                      the highest standards of integrity and collaboration.
                    </p>
                  </div>
                </div>
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-6">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Vision</h5>
                    {/* Text */}
                    <p>
                      To be the leading global innovator in human resource
                      management, shaping the future of work by fostering
                      inclusive, dynamic, and high-performing organizations. We
                      strive to set the standard for excellence, integrity, and
                      creativity in HR solutions, becoming the trusted partner
                      of choice for companies seeking to navigate and thrive in
                      an ever-changing business landscape.
                    </p>
                    {/* Text */}
                  </div>
                </div>
                {/* END ABOUT-3 TEXT */}
              </div>
              {/* End row */}
            </div>
            {/* End container */}
          </div>
          {/* END ABOUT-3 */}
          {/* STATISTIC-5
			============================================= */}
          {/* END STATISTIC-5 */}
          {/* TEXT CONTENT
			============================================= */}
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
                      Sodales tempor sapien diam purus ipsum quaerat and volute
                      fusce a congue laoreet turpis neque diam auctor turpis
                      vitae dolor magna luctus placerat neque ipsum fusce cursus
                      ligula cursus purus vitae purus and ipsum suscipit. Nemo
                      ipsam cubilia donec turpis undo egestas ipsum a purus
                      sapien ultrice aliquam lacus and quaerat an ipsum augue
                      turpis sapien cursus congue augue
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
          {/* END TEXT CONTENT */}
          {/* FEATURES-11
			============================================= */}
          <section className="pt-100 ct-02 content-section division">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/commitment.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}
                    <span className="section-id">Why Choose Us</span>
                    {/* Title */}
                    <h2 className="s-46 w-700">
                      Our Commitment to Client Satisfaction
                    </h2>
                    {/* Text */}
                    <p>
                      When it comes to our commitment to client satisfaction,
                      our approach is twofold: first, we focus on understanding
                      the unique needs and goals of each client, ensuring that
                      our services are tailored to meet their specific
                      requirements. We believe in building strong relationships
                      based on trust, transparency, and continuous
                      communication, allowing us to adapt and evolve our
                      services as our {`clients'needs`} change
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                      Second, we commit to delivering the highest quality of
                      service, utilizing our {`team's`} expertise, innovative
                      solutions, and a rigorous attention to detail to exceed
                      expectations. This commitment to excellence and
                      adaptability ensures that our clients feel valued,
                      understood, and confident in the results we deliver.
                    </p>
                  </div>
                </div>
                {/* END TEXT BLOCK */}
              </div>
              {/* END SECTION CONTENT (ROW) */}
            </div>
            {/* End container */}
          </section>
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
                    <span className="section-id">One-Stop Solution</span>
                    {/* Title */}
                    <h2 className="s-46 w-700">
                      Smart solutions, real-time results
                    </h2>
                    {/* Text */}
                    <p>
                      TaraTech is a dynamic company specializing in a wide array
                      of services, including cutting-edge AI solutions,
                      professional web development, and innovative mobile
                      application design, dedicated to delivering transformative
                      digital experiences for businesses worldwide
                    </p>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p>
                          Digital Innovation: <br />
                          Cutting-edge AI solutions Mobile application design
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="mb-0">
                          Web Solutions:
                          <br />
                          Professional web development User experience
                          optimization
                        </p>
                      </li>
                    </ul>
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
                            <h5 className="s-20 w-700">Web and Mobile </h5>
                            <p>Web and Mobile application development</p>
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
                              <img src="images/services/devops.png" />
                            </div>
                          </div>{" "}
                          {/* End Icon */}
                          {/* Text */}
                          <div className="fbox-txt">
                            <h5 className="s-20 w-700">Devops</h5>
                            <p>Continus integration with CICD</p>
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
                              <img src="images/services/ai.png" />
                            </div>
                          </div>{" "}
                          {/* End Icon */}
                          {/* Text */}
                          <div className="fbox-txt">
                            <h5 className="s-20 w-700">
                              Artificial intelligence
                            </h5>
                            <p>
                              Artificial intelligence services and technologies
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
                              <img src="images/services/ui.png" />
                            </div>
                          </div>{" "}
                          {/* End Icon */}
                          {/* Text */}
                          <div className="fbox-txt">
                            <h5 className="s-20 w-700">UI/UX and Design</h5>
                            <p>Everything abut UI/UX and design tools</p>
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
          {/* END FEATURES-11 */}
          {/* DIVIDER LINE */}
          <hr className="divider !mt-20" />
          {/* BRANDS-1
			============================================= */}
          {/* END BRANDS-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          <section id="banner-12" className="banner-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row d-flex align-items-center">
                    {/* IMAGE BLOCK */}
                    <div className="col-md-12">
                      <div className="txt-block flex right-column wow fadeInLeft">
                        {/* CONTENT BOX #1 */}
                        <div className="cbox-2 process-step col-md-4">
                          {/* Icon */}
                          <div className="ico-wrap">
                            <div className="cbox-2-ico2 bg--theme color--white">
                              2019
                            </div>
                            <span className="cbox-2-line" />
                          </div>
                          {/* Text */}
                          <div className="cbox-2-txt">
                            <h5 className="s-22 w-700">MiddleEast Market</h5>
                            <p>
                              Register now to take the next step in your career
                              journey;
                            </p>
                          </div>
                        </div>{" "}
                        {/* END CONTENT BOX #1 */}
                        {/* CONTENT BOX #2 */}
                        <div className="cbox-2 process-step col-md-4">
                          {/* Icon */}
                          <div className="ico-wrap">
                            <div className="cbox-2-ico2 bg--theme color--white">
                              2021
                            </div>
                            <span className="cbox-2-line" />
                          </div>
                          {/* Text */}
                          <div className="cbox-2-txt">
                            <h5 className="s-22 w-700">Europe Market</h5>
                            <p>
                              Enhance your career with our comprehensive testing
                              suite, featuring
                            </p>
                          </div>
                        </div>{" "}
                        {/* END CONTENT BOX #2 */}
                        {/* CONTENT BOX #3 */}
                        <div className="cbox-2 process-step col-md-4">
                          {/* Icon */}
                          <div className="ico-wrap">
                            <div className="cbox-2-ico2 bg--theme color--white">
                              2032
                            </div>
                            <span className="cbox-2-line" />
                          </div>
                          {/* Text */}
                          <div className="cbox-2-txt">
                            <h5 className="s-22 w-700">New Markets</h5>
                            <p className="mb-0">
                              Finalize your contract with us and embark on a
                              trial period
                            </p>
                          </div>
                        </div>{" "}
                        {/* END CONTENT BOX #3 */}
                      </div>
                    </div>{" "}
                    {/* END TEXT BLOCK */}
                  </div>{" "}
                </div>
              </div>
            </div>
          </section>

          <hr className="divider" />
          <section className="bg--white-400 py-100 ct-03 content-section division">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-6 col-lg-5 order-last order-md-2">
                  <div className="txt-block left-column wow fadeInRight">
                    {/* Section ID */}
                    {/* Title */}
                    <h2 className="s-46 w-700">Our Office & Infrastructure</h2>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p>
                          Paj Tower is a multifunctional complex in Mashhad,
                          offering luxury residential, commercial, and retail
                          spaces with a focus on modern design and efficiency.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="mb-0">
                          It significantly contributes to {`Mashhad's`} urban
                          landscape and economy, symbolizing the {`city's`}
                          modernization and appeal as a commercial and cultural
                          destination.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-6 col-lg-7 order-first order-md-2">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid rounded-lg"
                      src="/images/pazh.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End container */}
          </section>
          {/* END TEXT CONTENT */}
          {/* BLOG-1
			============================================= */}
          {/* END BLOG-1 */}
          {/* DIVIDER LINE */}
          {/* NEWSLETTER-1
			============================================= */}
          {/* END NEWSLETTER-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          <section id="banner-12" className="banner-section">
            <div className="container">
              {/* BANNER-12 WRAPPER */}
              <div className="banner-12-wrapper bg--05 bg--fixed r-16">
                <div className="banner-overlay">
                  <div className="row d-flex align-items-center">
                    {/* BANNER-12 TEXT */}
                    <div className="col-md-7">
                      <div className="banner-12-txt color--white">
                        {/* Title */}
                        <h2 className="s-35 w-700">
                          Join us to create a partnership where success is
                          limitless and possibilities are endless.
                        </h2>
                        {/* Text */}
                        <p className="p-lg">
                          Your unique talents and perspective are crucial to
                          completing our collective success story
                        </p>
                        {/* Button */}
                        <Link
                          href="/book"
                          className="btn r-04 btn--theme hover--tra-white"
                        >
                          Unite for mutual success.
                        </Link>
                      </div>
                    </div>
                    {/* END BANNER-12 TEXT */}
                    {/* BANNER-12 IMAGE */}
                    <div className="col-md-5">
                      <div className="banner-12-img text-center">
                        <img
                          className="img-fluid rounded-full"
                          src="/images/contact/contactuswoman2.png"
                          alt="banner-image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* End banner overlay */}
              </div>
              {/* END BANNER-12 WRAPPER */}
            </div>
            {/* End container */}
          </section>
          <hr className="divider" />
        </div>
      </Layout>
    </>
  );
}
