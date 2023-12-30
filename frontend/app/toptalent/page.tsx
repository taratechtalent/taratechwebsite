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
                    <h2 className="s-50 w-700">Benefit amd Perks</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      your benefits when work with us
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
                        <h6 className="s-22 w-700">
                          Professional Growth and Development
                        </h6>
                        <p>
                          Good companies often invest in training and
                          development programs to help employees enhance their
                          skills and advance in their careers. This might
                          include access to workshops, courses, conferences, or
                          mentoring programs.
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
                        <h6 className="s-22 w-700">Stability and Security</h6>
                        <p>
                          Reputable companies usually offer greater job security
                          and stability. They have established market positions
                          and are less likely to go through abrupt downsizing,
                          providing employees with a sense of security and
                          long-term employment prospects.
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
                        <h6 className="s-22 w-700">
                          Competitive Compensation and Benefits
                        </h6>
                        <p>
                          Well-established firms often provide competitive
                          salaries and comprehensive benefits packages,
                          including health insurance, retirement plans, bonuses,
                          and sometimes stock options or profit-sharing plans,
                          attracting and retaining top talent.
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
                        <h6 className="s-22 w-700">
                          Positive Work Environment
                        </h6>
                        <p>
                          Good companies recognize the importance of a positive
                          and inclusive work culture. They strive to create an
                          environment where employees feel valued, respected,
                          and engaged, leading to higher job satisfaction and
                          productivity.
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
                        <h6 className="s-22 w-700">
                          {" "}
                          Enhanced Reputation and Resume Value
                        </h6>
                        <p>
                          Being associated with a respected and successful
                          company can enhance an {`individual's`} professional
                          reputation, making them more attractive to future
                          employers. The experience and accomplishments gained
                          at such a company can significantly boost {`one's`}{" "}
                          resume and career prospects.
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
                        <h6 className="s-22 w-700">Networking Opportunities</h6>
                        <p>
                          Working with a well-regarded company can expose
                          employees to a network of professionals and experts in
                          the field, offering opportunities for networking,
                          collaboration, and even mentorship. This can be
                          invaluable for career advancement and personal growth.
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
          </section>
          <section id="features-2" className="pt-100 features-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-80">
                    {/* Title */}
                    <h2 className="s-50 w-700">Key traits</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Talent Attributes We Value
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURES-2 WRAPPER */}
              <div className="fbox-wrapper text-center">
                <div className="row row-cols-1 row-cols-md-3">
                  {/* FEATURE BOX #1 */}
                  <div className="col-md-3">
                    <div className="fbox-2 fb-1 wow fadeInUp">
                      {/* Image */}
                      <div className="fbox-img gr--whitesmoke h-175">
                        <img
                          className="img-fluid light-theme-img"
                          src="/images/topn/advanced.png"
                          alt="feature-image"
                        />
                        <img
                          className="img-fluid dark-theme-img"
                          src="/images/topn/DALL·E 2023-12-27 12.25 1.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Advanced Technical Proficiency
                        </h6>
                        <p>
                          Luctus egestas augue undo ultrice aliquam in lacus
                          congue dapibus
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-md-3">
                    <div className="fbox-2 fb-1 wow fadeInUp">
                      {/* Image */}
                      <div className="fbox-img gr--whitesmoke h-175">
                        <img
                          className="img-fluid light-theme-img"
                          src="/images/topn/analytic.png"
                          alt="feature-image"
                        />
                        <img
                          className="img-fluid dark-theme-img"
                          src="/images/f_01_dark.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Analytical Thinking</h6>
                        <p>
                          Tempor laoreet augue undo ultrice aliquam in lacusq
                          luctus feugiat
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #1 */}
                  {/* FEATURE BOX #2 */}
                  <div className="col-md-3">
                    <div className="fbox-2 fb-2 wow fadeInUp">
                      {/* Image */}
                      <div className="fbox-img gr--whitesmoke h-175">
                        <img
                          className="img-fluid light-theme-img"
                          src="/images/topn/commitment.png"
                          alt="feature-image"
                        />
                        <img
                          className="img-fluid dark-theme-img"
                          src="/images/f_05_dark.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Commitment to Excellence</h6>
                        <p>
                          Egestas luctus augue undo ultrice aliquam in lacus
                          feugiat cursus
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #2 */}
                  {/* FEATURE BOX #3 */}
                  <div className="col-md-3">
                    <div className="fbox-2 fb-3 wow fadeInUp">
                      {/* Image */}
                      <div className="fbox-img gr--whitesmoke h-175">
                        <img
                          className="img-fluid light-theme-img"
                          src="/images/topn/communication.png"
                          alt="feature-image"
                        />
                        <img
                          className="img-fluid dark-theme-img"
                          src="/images/f_02_dark.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Open Communication</h6>
                        <p>
                          Egestas luctus augue undo ultrice aliquam in lacus
                          feugiat cursus
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #3 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FEATURES-2 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>
          <section
            id="integrations-1"
            className="pt-100 integrations-section mt-80"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">
                      {" "}
                      The <span style={{ color: "#F74780" }}>top 5%</span>{" "}
                      fields of work{" "}
                    </h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Most popular programming languages and framework for
                      development
                    </p>
                  </div>
                </div>
              </div>
              {/* INTEGRATIONS-1 WRAPPER */}
              <div className="integrations-1-wrapper">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2">
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/div.in_tool-logo-wrap.png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">Web App Development</h6>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/div.in_tool-logo-wrap (1).png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">Devops</h6>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/icons8-software-testing-64 (1) 1.png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">
                          Software testing & QA
                        </h6>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/icons8-mobile-app-development-53 (1) 1.png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">
                          Mobile App Development
                        </h6>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/icons8-artificial-intelligence-64 1.png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">AI/Machine Learning</h6>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="col">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/icons8-ux-design-64 (1) 1.png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">UI/UX Design</h6>
                      </div>
                    </Link>
                  </div>{" "}
                </div>
                <div className="row justify-content-center mb-80">
                  {" "}
                  <div className="col-md-4 text-center">
                    <Link
                      href="#"
                      className="in_tool it-1 r-12 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="in_tool-logo-wrap">
                        <div className="in_tool-logo ico-60">
                          <img src="/images/topn/div.in_tool-logo-wrap (2).png" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="in_tool-txt">
                        <h6 className="s-20 w-700 pt-2">Digital Art</h6>
                      </div>
                    </Link>
                  </div>{" "}
                </div>
              </div>{" "}
              {/* END INTEGRATIONS-1 WRAPPER */}
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
