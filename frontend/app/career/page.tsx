/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import Typewriter from "typewriter-effect";

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
              style={{ backgroundColor: "rgb(20 123 73 / 44%)" }}
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
                        We are looking for
                        <h2 className="s-48 w-700">
                          <Typewriter
                            options={{
                              strings: [
                                "Exceptional Talents",
                                "Innovative Minds",
                                "Gifted Individuals",
                              ],
                              autoStart: true,
                              loop: true,
                              delay: 100,
                            }}
                          />
                        </h2>
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
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                  {/* Title */}
                  <h2 className="s-46 w-700">Unlock Global Opportunities</h2>
                  {/* Text */}
                  <p className="s-21 color--grey">
                    Explore the Top Three Reasons to Join Our Talent Network
                  </p>
                </div>
              </div>
            </div>
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
          <div className=" container mt-36 mb-24">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-70">
                  {/* Title */}
                  <h2 className="s-46 w-700">Talent Assessment Journey</h2>
                  {/* Text */}
                  <p className="s-21 color--grey">
                    Be Your Best Self,Unleash Your Expertise,Engage and Shine
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 wow fadeInLeft">
                <div className="cbox-2 process-step pt-4">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">1</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">
                      {" "}
                      Language and Personality Evaluation
                    </h5>
                    <p>
                      This assessment ensures that you are not only proficient
                      in English but also possess the personality traits that
                      make you articulate, passionate, and fully committed.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
                <div className="cbox-2 process-step">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">2</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">Soft Skills Validation</h5>
                    <p>
                      Our Soft Skills Validation step involves live interviews
                      and exercises designed to assess your problem-solving
                      capabilities, depth of experience, communication skills,
                      and creativity. {`It's`} a crucial phase to demonstrate
                      your well-rounded abilities.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
                {/* END CONTENT BOX #2 */}
                <div className="cbox-2 process-step pt-2">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">3</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">
                      Technical Expertise Assessment
                    </h5>
                    <p>
                      Our Technical Expertise Assessment evaluates your
                      knowledge and problem-solving skills through various
                      assessments. {`It's`} the path to becoming a recognized
                      domain expert.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
                <div className="cbox-2 process-step">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">4</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">
                      Real-World Project Simulation
                    </h5>
                    <p>
                      Prepare for our Real-World Project Simulation, where{" "}
                      {`you'll`} tackle comprehensive test projects. This step
                      tests your competence, professionalism, and integrity in
                      practical scenarios. Your ability to excel in real-world
                      situations is key.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
                <div className="cbox-2 process-step ">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">5</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">Ongoing Performance Review</h5>
                    <p>
                      Your journey with us {`doesn't`} end when {`you're`}{" "}
                      hired. We continuously assess your performance to uphold
                      high standards for both talent and client satisfaction.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
              </div>
              <div className="col-md-6 wow fadeInRight">
                <img
                  src="/images/howHireTalent.png"
                  style={{ marginTop: "80px" }}
                />
              </div>
            </div>
          </div>
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
                      Explore the Compelling Reasons to Join our Talent
                      Community and Redefine Your Career Journey.
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
                            Mohsen <span>Frontend Developer</span>
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
            <section className="py-100 ct-02 content-section division">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-50 w-700"> Join TaraTalent</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">Your Path to Success</p>
                  </div>
                </div>
              </div>
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
                            Start your journey with TaraTalent by submitting
                            your application. Simply upload your CV, and let us
                            match you with the right opportunities to advance
                            your career.
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
                        style={{
                          borderRadius: "15px",
                          boxShadow:
                            "rgba(110, 126, 129, 0.43) 0px 4px 12px 0px",
                        }}
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
            <hr className="divider" />
            <section id="faqs-3" className=" pt-100 faqs-section">
              <div className="container">
                {/* SECTION TITLE */}
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-9">
                    <div className="section-title mb-70">
                      {/* Title */}
                      <h2 className="s-52 w-700">Talent FAQs</h2>
                      {/* Text */}

                      <p className="s-21 color--grey">
                        Explore Talent FAQs to Find Answers to Common Questions
                        About Joining Our Talent Pool and Leveraging Exciting
                        Career Opportunities.
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
                            <span>1.</span> What are the requirements for
                            becoming a TaraTalent member?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            We highly value exceptional skills and professional
                            experience. While requirements may differ depending
                            on the role, we generally seek individuals with a
                            strong track record in their field, extensive
                            expertise, and a commitment to excellence.
                          </p>
                        </div>
                        {/* QUESTION #2 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>2.</span> Could you explain the steps in the
                            selection process?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            Our selection procedure is comprehensive yet
                            equitable. It typically involves an assessment of
                            English language proficiency, HR evaluations,
                            technical examinations, and practical assignments to
                            assess your abilities and suitability for
                            opportunities.
                          </p>
                        </div>
                        {/* QUESTION #3 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>3.</span> Is there any fee associated with
                            joining TaraTalent as a talent?
                          </h5>
                          {/* Answer */}
                          <ul className="simple-list color--grey">
                            <li className="list-item">
                              <p>
                                No, there are no charges for talent to join
                                TaraTalent. Our platform is designed to connect
                                talents with opportunities, and we do not impose
                                any fees on talents.
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
                            <span>4.</span> Is there potential for career
                            advancement and professional development?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            Absolutely! We offer ongoing prospects for
                            professional growth, including mentorship, training,
                            and specialized courses to empower you in your
                            career journey.
                          </p>
                        </div>
                        {/* QUESTION #5 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>5.</span> Am I able to select my preferred
                            work location and schedule?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            Yes, we provide remote work options, granting you
                            the freedom to choose your work setting and
                            timetable. We believe in offering the flexibility to
                            strike a balance between work and personal life.
                          </p>
                        </div>
                        {/* QUESTION #6 */}
                        <div className="question mb-35 wow fadeInUp">
                          {/* Question */}
                          <h5 className="s-22 w-700">
                            <span>6.</span> Are there any administrative
                            responsibilities like contracts and payments that I
                            need to handle?
                          </h5>
                          {/* Answer */}
                          <p className="color--grey">
                            No, we manage administrative tasks on your behalf.
                            You can concentrate on your work while we handle
                            contracts, payments, insurance, and compliance with
                            local regulations.
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
                            Join TaraTalent: Your Gateway to Exciting Career
                            Opportunities
                          </h2>
                          {/* Text */}
                          <p className="p-lg">
                            Explore career advancements and opportunities with
                            TaraTalent, your partner in connecting talent with
                            visionary companies.
                          </p>
                          {/* Button */}
                          <Link
                            href="/career/join"
                            className="btn r-04 btn--theme hover--tra-white"
                          >
                            Join Our Talent Pool
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
