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
              style={{ backgroundColor: "rgb(20 113 123 / 72%)" }}
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
                        We are looking for Exceptional Talents
                      </h2>
                      {/* Text */}
                      <p className="p-lg w-400">
                        Begin a transformative journey with TaraTalent! Here,
                        {`you'll`} find a world where your technical skills are
                        valued, growth is nurtured. We connect extraordinary
                        tech talents with global opportunities, fostering a
                        culture of innovation and excellence. Make your mark in
                        a team {`that's`} shaping the future of technology. Your
                        path to professional greatness starts here.
                      </p>
                      <Link
                        href="/career/join"
                        className="btn r-04 btn--theme hover--theme last-link ml-20"
                      >
                        Join our Talent network
                      </Link>
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
                <div className="col-md-4 wow fadeInLeft shadow">
                  <div id="a3-1" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Insurance and Local Currency Payments
                    </h5>
                    {/* Text */}
                    <p>
                      Offering hassle-free insurance coverage and salary
                      payments in your local currency, without the need for
                      cryptocurrency or IBAN accounts.
                    </p>
                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4 wow fadeInTop shadow">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Optimal Working Environment
                    </h5>
                    {/* Text */}
                    <p>
                      Providing the ideal workspace equipped with high-speed
                      internet for maximum efficiency essential for seamless
                      remote work.
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                <div className="col-md-4  wow fadeInRight shadow">
                  <div id="a3-2" className="txt-block">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Competitive Salary Structure
                    </h5>
                    {/* Text */}
                    <p>
                      Receive a salary that exceeds local standards by over 50%,
                      ensuring a comfortable lifestyle with all your essential
                      needs met.
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
          <section className="py-100 ct-02 content-section division">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
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
                        <h5 className="s-22 w-700">Application Submission</h5>
                        <p>
                          Start your journey with TaraTalent by submitting your
                          application. Simply upload your CV, and let us match
                          you with the right opportunities to advance your
                          career.
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
                        <h5 className="s-22 w-700">
                          Comprehensive Skill Assessment
                        </h5>
                        <p>
                          Showcase your abilities through our multi-faceted
                          assessment process. This includes an English
                          proficiency test, HR evaluation for soft skills, and
                          both theoretical and practical technical tests to
                          demonstrate your expertise.
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
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-22 w-700">
                          Contract Finalization & Trial Period
                        </h5>
                        <p className="mb-0">
                          Complete the contracting process and begin a trial
                          period with us. This stage allows you to integrate
                          into our culture, display your capabilities, and
                          confirm our mutual fit for a successful professional
                          collaboration.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #3 */}
                  </div>
                </div>{" "}
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
                    <h2 className="s-50 w-700">Why TaraTalent?</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Explore the compelling reasons to join our talent
                      community and redefine your career journey.
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
                            <img src="images/services/workspace (2).svg" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Enhanced Workspace & Resources
                        </h6>
                        <p>
                          Offering advanced work infrastructure, high-speed
                          internet, and the freedom to work from any comfortable
                          setting.
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
                            <img src="images/services/icons8-salary-50.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Competitive & Fair Compensation
                        </h6>
                        <p>
                          Providing salaries well above local standards,
                          ensuring a rewarding and financially secure career.
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
                            <img src="images/services/icons8-remote-work-50 (1).png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Remote Work Flexibility</h6>
                        <p>
                          Embrace the digital nomad lifestyle with the
                          opportunity to work remotely, offering a perfect
                          work-life balance.
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
                            <img src="images/services/icons8-transaction-50.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Local Financial Ease</h6>
                        <p>
                          Streamlining insurance and salary payments in local
                          currency, eliminating complexities and enhancing
                          convenience.
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
                            <img src="images/services/icons8-professional-growth-50.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          {" "}
                          Professional Growth & Learning
                        </h6>
                        <p>
                          Continuous opportunities for professional development,
                          including mentorship, training, and specialized
                          courses.
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
                            <img src="images/services/icons8-global-network-99.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Diverse and Global Network
                        </h6>
                        <p>
                          Be part of a global community of professionals,
                          working on innovative projects across various industry
                          sectors.
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
          <div className="container">
            <div id="about-2" className="rel pt-100 about-section division">
              {/* ABOUT-2 IMAGES */}
              <div className="container-fluid">
                <div className="row">
                  {/* IMAGES-1 */}
                  {/* IMAGES-2 */}
                  <div className="col-md-12">
                    {/* IMAGE-3 */}
                    <div className="about-2-img a-2-3 r-12">
                      <img
                        className="img-fluid"
                        style={{ width: "80%" }}
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
                            Joining TaraTalent company has been a transformative
                            experience for me. The supportive and dynamic
                            environment here has not only propelled my
                            professional journey but has also profoundly
                            enriched my personal growth. {`I'm`} deeply grateful
                            for the remarkable journey {`I've`} had so far and
                            excited for what the future holds.
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
                            src="/images/a2-4.jpg"
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
          </div>
          <div>
            <hr className="divider" />
            <section id="faqs-3" className="gr--whitesmoke pt-100 faqs-section">
              <div className="container">
                {/* SECTION TITLE */}
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-9">
                    <div className="section-title mb-70">
                      {/* Title */}
                      <h2 className="s-52 w-700">FAQs</h2>
                      {/* Text */}

                      <p className="s-21 color--grey">
                        Most important questions maybe help you better to work
                        with us
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQs-3 QUESTIONS */}
                <div className="faqs-3-questions">
                  <div className="row">
                    {/* QUESTIONS HOLDER */}
                    <div className="col-lg-6">
                      <div className="questions-holder">
                        {/* QUESTION #1 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>1.</span> Are there any upfront recruiting or
                            contractual costs?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            We require an initial deposit of $500 that will be
                            applied as a credit to your first invoice once you
                            make a hire. If you decide not to move forward, your
                            deposit will be refunded completely.
                          </p>
                        </div>
                        {/* QUESTION #2 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>2.</span> How is the trial period no-risk?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            We make sure to start each engagement with a trial
                            period of up to two weeks. This means that you have
                            time to help ensure the engagement will be
                            successful. If
                            {`you’re`} completely satisfied with the results,{" "}
                            {"we’ll"}
                            bill you for the time and continue the engagement
                            for as long as you’d like. If {"you’re"} not
                            completely satisfied, you {"won’t"} be billed. From
                            there, we can either part ways, or we can provide
                            you with another expert who may be a better fit and
                            with whom we will begin a second, no-risk trial.
                          </p>
                        </div>
                        {/* QUESTION #3 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>3.</span> What happens if {`I’m`} not
                            satisfied with a Toptal expert?
                          </h5>
                          {/* Answer */}
                          <ul className="simple-list color--grey">
                            <li className="list-item">
                              <p>
                                We allow our clients to begin a trial period
                                with up to three experts from our network per
                                position. While we rigorously screen all
                                applicants to ensure talent and intelligence, we
                                understand that not every person will be a
                                perfect fit for every company. For this reason,
                                we allow our clients to work with multiple
                                experts for each position before they decide on
                                a candidate with whom they are confident and
                                comfortable.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTIONS HOLDER */}
                    {/* QUESTIONS WRAPPER */}
                    <div className="col-lg-6">
                      <div className="questions-holder">
                        {/* QUESTION #4 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>4.</span> How does your screening process
                            ensure quality candidates that meet our
                            requirements?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            We screen for communication skills, personality,
                            domain-specific knowledge, and a high level of
                            professionalism. Approximately 3% of applicants pass
                            the screening process.
                          </p>
                          {/* Answer */}
                          <p className="color--grey">
                            Our process includes a variety of ways to determine
                            skill and proficiency, including portfolio reviews,
                            technical coding challenges, user or market
                            research, business cases, project management backlog
                            grooming, formal assessments, as well as live
                            problem-solving sessions as appropriate to the
                            candidate and vertical.
                          </p>
                        </div>
                        {/* QUESTION #5 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>5.</span> Where are your experts located?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            Currently, we have experts in over 100 countries,
                            most being located in the Americas and Europe.
                          </p>
                        </div>
                        {/* QUESTION #6 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>6.</span> Are English skills ever an issue
                            when working with a Toptal expert?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            No. Each and every Toptal expert writes and speaks
                            fluent English. In fact, before we invite candidates
                            to tackle our rigorous domain-specific tests, we
                            conduct lengthy interviews to ensure they have a
                            high level of proficiency in English and have
                            personalities well-suited to working with western
                            technical teams.
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTIONS HOLDER */}
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* END FAQs-3 QUESTIONS */}
                {/* MORE QUESTIONS LINK */}
              </div>{" "}
              {/* End container */}
            </section>
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
                            Empower Your Startup with Our Talent: Expertise for
                            Victory
                          </h2>
                          {/* Text */}
                          <p className="p-lg">
                            Discover how our skilled, affordable experts can be
                            the catalyst for your {`business's`} growth and
                            innovation.
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
                            src="/images/contact/join.png"
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
        </div>
      </Layout>
    </>
  );
}
