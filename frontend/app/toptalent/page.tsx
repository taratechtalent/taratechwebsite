/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import BrandSlider from "../components/slider/BrandSlider";
export default function TopTalent() {
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
          <section className="pt-44 ct-02 content-section division">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
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
                <div className="col-md-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}
                    <span className="section-id">Top 5%</span>
                    {/* Title */}
                    <h2 className="s-50 w-700">
                      How We hire the Top <b style={{ color: "#F74780" }}>5%</b>{" "}
                      of Tech Experts
                    </h2>
                    {/* Text */}
                    <p>
                      Sodales tempor sapien quaerat ipsum undo congue laoreet
                      turpis neque auctor turpis vitae dolor luctus placerat
                      magna and ligula cursus purus vitae purus an ipsum
                      suscipit
                    </p>
                    {/* Text */}
                    <ul className="ml-10">
                      <li>
                        Sodales tempor sapien quaerat ipsum undo congue laoreet
                        turpis neque auctor turpis vitae dolor luctus placerat
                        magna and ligula cursus purus vitae purus an ipsum
                        suscipit
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END TEXT BLOCK */}
              </div>
              {/* END SECTION CONTENT (ROW) */}
            </div>
            {/* End container */}
          </section>
          <div className=" container mt-36 mb-24">
            <div className="row">
              <div className="col-md-6">
                <ul className="s-54 pt-6">
                  <li>
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
                        <h5 className="s-36 w-700">English Test</h5>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                  </li>{" "}
                  <li>
                    <div className="cbox-2 process-step pt-8">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          2
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-36 w-700">HR Interview</h5>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                  </li>
                  <li>
                    <div className="cbox-2 process-step pt-8">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          3
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-36 w-700">Technical Interview</h5>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                  </li>
                  <li>
                    <div className="cbox-2 process-step pt-8">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          4
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-36 w-700">Online Challenge</h5>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                  </li>
                  <li>
                    <div className="cbox-2 process-step pt-8">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          5
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-36 w-700">Continued evaluation</h5>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <img src="/images/howHireTalent.png" />
              </div>
            </div>
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
                    <h2 className="s-50 w-700">Admin Derakhshan</h2>
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
                </div>{" "}
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
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
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
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              {/* END SECTION CONTENT (ROW) */}
            </div>{" "}
            {/* End container */}
          </section>
          <section
            id="features-11"
            className="py-100 features-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-50 w-700">What we offer</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Our advanced solution to make you software development
                      perfect
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURES-11 WRAPPER */}
              <div className="fbox-wrapper">
                <div className="row row-cols-1 row-cols-md-2 rows-3">
                  {/* FEATURE BOX #1 */}
                  <div className="col">
                    <div className="fbox-11 fb-1 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            {/* Vector Icon */}
                            {/* Shape */}
                            <img src="images/services/web.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Web App Development</h6>
                        <p>
                          Web app development combines HTML, CSS, and JavaScript
                          with backend languages to create interactive,
                          responsive applications. Focused on user experience
                          and scalability, it evolves with technological
                          advancements, driving innovation in accessible,
                          efficient global web solutions.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #1 */}
                  {/* FEATURE BOX #2 */}
                  <div className="col">
                    <div className="fbox-11 fb-2 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            <img src="images/services/qa.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Software testing & QA</h6>
                        <p>
                          Software testing and QA ensure that applications meet
                          quality standards and function as intended, through
                          systematic processes of verification, bug
                          identification, and performance assessment to enhance
                          product reliability.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #2 */}
                  {/* FEATURE BOX #3 */}
                  <div className="col">
                    <div className="fbox-11 fb-3 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            <img src="images/services/mobile.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Mobile App Development</h6>
                        <p>
                          Mobile app development involves creating software for
                          smartphones and tablets, focusing on optimized design,
                          functionality, and user experience across diverse
                          platforms and devices for on-the-go accessibility and
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #3 */}
                  {/* FEATURE BOX #4 */}
                  <div className="col">
                    <div className="fbox-11 fb-4 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            <img src="images/services/ui.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">UI/UX Design</h6>
                        <p>
                          UI/UX design merges visual design with user experience
                          to create intuitive and attractive interfaces,
                          focusing on {`user's`} ease, engagement, and
                          satisfaction with a {`product's`} look and feel.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #4 */}
                  {/* FEATURE BOX #5 */}
                  <div className="col">
                    <div className="fbox-11 fb-5 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            <img src="images/services/devops.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Devops</h6>
                        <p>
                          DevOps integrates development and operations to
                          improve collaboration, speed, and product quality,
                          focusing on continuous integration, automated
                          deployment, and quicker, more efficient delivery
                          cycles in software development.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #5 */}
                  {/* FEATURE BOX #6 */}
                  <div className="col">
                    <div className="fbox-11 fb-6 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            <img src="images/services/art.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Digital Art</h6>
                        <p>
                          Digital art encompasses creating visual content using
                          technology, ranging from illustrations to animations,
                          utilizing software and devices to craft, manipulate,
                          and produce innovative artistic expressions in a
                          digital format.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col">
                    <div className="fbox-11 fb-6 wow fadeInUp mt-6">
                      {/* Icon */}
                      <div className="fbox-ico-wrap">
                        <div className="fbox-ico ico-50">
                          <div className="shape-ico">
                            <img src="images/services/ai.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">AI/Machine Learning</h6>
                        <p>
                          AI/Machine Learning involves algorithms and
                          statistical models that enable computers to improve
                          tasks with experience, focusing on prediction,
                          automation, and decision-making in various fields from
                          healthcare to finance.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #6 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FEATURES-11 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END FEATURES-11 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* BRANDS-1
			============================================= */}
          <div id="brands-1" className="py-80 brands-section">
            <div className="container">
              {/* BRANDS TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="brands-title mb-50">
                    <h5 className="s-20">
                      Most popular technologies supported by us
                    </h5>
                  </div>
                </div>
              </div>
              {/* BRANDS CAROUSEL */}
              <div className="row">
                <div className="col text-center">
                  <BrandSlider />
                </div>
              </div>{" "}
              {/* END BRANDS CAROUSEL */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END BRANDS-1 */}
          {/* DIVIDER LINE */}
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
                </div>{" "}
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
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
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
                          Join Us in Crafting a Partnership Where Success Knows
                          No Bounds
                        </h2>
                        {/* Text */}
                        <p className="p-lg">
                          Your unique perspective and talents are the missing
                          pieces to our collective success story.
                        </p>
                        {/* Button */}
                        <Link
                          href="/book"
                          className="btn r-04 btn--theme hover--tra-white"
                        >
                          Team up for success
                        </Link>
                      </div>
                    </div>{" "}
                    {/* END BANNER-12 TEXT */}
                    {/* BANNER-12 IMAGE */}
                    <div className="col-md-5">
                      <div className="banner-12-img text-center">
                        <img
                          className="img-fluid rounded-full"
                          src="/images/contact/join-girl-1.png"
                          alt="banner-image"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* End banner overlay */}
              </div>{" "}
              {/* END BANNER-12 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
        </div>
      </Layout>
    </>
  );
}
