/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import Link from "next/link";
export default function Career() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-light inner-page-header"
      >
        <div>
          <section className="page-hero-section">
            <div
              className="page-hero-section-overlay bg--scroll"
              style={{ backgroundColor: "#654EB8" }}
            >
              <div className="container">
                <div className="row d-flex align-items-center">
                  {/* TEXT BLOCK */}
                  <div className="col-md-6">
                    <div className="txt-block left-column color--white wow fadeInRight">
                      {/* Section ID */}
                      <span className="section-id rounded-id bg--tra-white color--white">
                        Careers
                      </span>
                      {/* Title */}
                      <h2 className="s-56 w-700">
                        We are looking for creative and fun individuals
                      </h2>
                      {/* Text */}
                      <p className="p-lg w-400">
                        Discover your potential with us! Explore exciting
                        opportunities, learn about our inclusive culture, and
                        join a team where your contributions are valued and your
                        growth is nurtured. Start your journey with us today and
                        shape your future while transforming the world around
                        you.
                      </p>
                    </div>
                  </div>{" "}
                  {/* END TEXT BLOCK */}
                  {/* IMAGE BLOCK */}
                  <div className="col-md-6">
                    <div className="img-block right-column wow fadeInLeft">
                      <img
                        className="img-fluid"
                        src="/images/img-18.png"
                        alt="content-image"
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* End Page Hero Section Overlay */}
            {/* WAVE SHAPE BOTTOM */}
            <div className="wave-shape-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
                <path
                  fill="#fff"
                  fillOpacity={1}
                  d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
              </svg>
            </div>
          </section>{" "}
          {/* END PAGE HERO SECTION */}
          {/* ABOUT-3
			============================================= */}
          <div id="about-3" className="pt-100 about-section division">
            <div className="container">
              <div className="row">
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-1" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Insurance and payment By your currency
                    </h5>
                    {/* Text */}
                    <p>
                      Insurance and payment By your currency without need to any
                      crypto currency or Iban account
                    </p>
                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Comfort place for working
                    </h5>
                    {/* Text */}
                    <p>
                      We offer the best place for work with full speed internet
                    </p>
                    {/* Text */}
                    <p className="mb-0">Everything you need for working</p>
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Salary offer more than your country
                    </h5>
                    {/* Text */}
                    <p>
                      More than 50% increse in your salary , Comfort life with
                      everything you need
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END ABOUT-3 */}
          {/* ABOUT-2
			============================================= */}
          <div id="about-2" className="rel pt-100 about-section division">
            {/* ABOUT-2 IMAGES */}
            <div className="container-fluid">
              <div className="row">
                {/* IMAGES-1 */}
                <div className="col-md-2"></div> {/* END IMAGES-1 */}
                {/* IMAGES-2 */}
                <div className="col-md-9">
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
                    <div className="col-md-6 col-lg-6">
                      <div className="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                        {/* Icon */}
                        <div className="a2-txt-quote ico-40 o-20">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <p>
                          Thank you for the incredible opportunity to grow,
                          innovate, and contribute within such a supportive and
                          dynamic environment. My journey here has not only
                          shaped my career but also enriched my personal
                          development.
                        </p>
                        {/* Author */}
                        <p className="a2-txt-author">
                          Fatemeh Hassani <span>UI/UX Designer</span>
                        </p>
                      </div>
                    </div>
                    {/* IMAGE-4 */}
                    <div className="col-md-6 col-lg-6">
                      <div className="about-2-img a-2-4 r-12">
                        <img
                          className="img-fluid"
                          src="/images/process/vettingProcess2.png"
                          alt="about-image"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* END IMAGES-2 */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END ABOUT-2 IMAGES */}
          </div>{" "}
          {/* END ABOUT-2 */}
          {/* FEATURES-11
			============================================= */}
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
          </section>{" "}
          <section className="py-100 ct-02 content-section division">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/process/process.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-6">
                  <div className="txt-block right-column wow fadeInLeft">
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
                        <h5 className="s-22 w-700">Registeration</h5>
                        <p>
                          Register now to take the next step in your career
                          journey; complete the application form by uploading
                          your CV and let us connect you with your future
                          opportunities.
                        </p>
                      </div>
                    </div>{" "}
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
                        <h5 className="s-22 w-700">Some Amazing Test skills</h5>
                        <p>
                          Enhance your career with our comprehensive testing
                          suite, featuring an English language proficiency test,
                          an HR assessment to understand your teamwork and
                          leadership skills, a theoretical technical test to
                          gauge your industry knowledge, and a practical
                          technical test to demonstrate your real-world
                          problem-solving abilities.
                        </p>
                      </div>
                    </div>{" "}
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
                        <h5 className="s-22 w-700">
                          Finalize contract and start Trial Period
                        </h5>
                        <p className="mb-0">
                          Finalize your contract with us and embark on a trial
                          period, where {`you'll`} have the opportunity to
                          showcase your skills, adapt to our culture, and ensure
                          a mutual fit as we embark on this professional journey
                          together.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #3 */}
                    <div className="cbox-2 process-step">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          4
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-22 w-700">
                          Enjoy working for your new team
                        </h5>
                        <p className="mb-0">
                          Enjoy working with your new team, where collaboration,
                          innovation, and growth are part of every day, and your
                          contributions make a real difference in our collective
                          success
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              {/* END SECTION CONTENT (ROW) */}
            </div>{" "}
            {/* End container */}
          </section>
          {/* END FEATURES-11 */}
          {/* TEXT CONTENT
			============================================= */}
        </div>
      </Layout>
    </>
  );
}
