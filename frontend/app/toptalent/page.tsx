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
                    <span className="section-id">Top 1%</span>
                    {/* Title */}
                    <h2 className="s-50 w-700">
                      Crafting Excellence: Our Journey in Selecting the{" "}
                      <b style={{ color: "#37939b" }}> Top 1%</b> Tech Talent
                    </h2>
                    {/* Text */}
                    <p>
                      At TaraTalent, {`we're`} committed to an unparalleled
                      standard of excellence in every hire. Our Top 1% Talent
                      Strategy is centered around a comprehensive and thorough
                      selection process. We meticulously identify and
                      collaborate with only the most skilled and passionate
                      professionals from around the world.
                    </p>
                    {/* Text */}
                    <ul className="ml-10">
                      <li>
                        This rigorous approach ensures that our team consists of
                        domain experts who bring both expertise and enthusiasm
                        to every project, aligning with our high standards of
                        quality and innovation which perfectly matches the needs
                        of startups.
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
                      Assessing English proficiency and personality traits to
                      ensure candidates are articulate, passionate, and fully
                      committed.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
                <div className="cbox-2 process-step pt-2">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">2</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">
                      Technical Expertise Assessment
                    </h5>
                    <p>
                      Evaluating technical knowledge and problem-solving skills
                      through various assessments to identify domain experts.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
                <div className="cbox-2 process-step">
                  {/* Icon */}
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">3</div>
                    <span className="cbox-2-line" />
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="s-30 w-700">
                      Interactive Skills Validation
                    </h5>
                    <p>
                      Conducting live interviews and exercises to gauge
                      problem-solving capabilities, experience depth,
                      communication skills, and creativity.
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
                      Assigning comprehensive test projects to evaluate
                      {`candidates'`} competence, professionalism, and integrity
                      in practical scenarios.
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
                      Ensuring sustained excellence and quality in all
                      engagements, maintaining high standards for both talent
                      and client satisfaction.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT BOX #2 */}
              </div>
              <div className="col-md-6 wow fadeInRight">
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
                    <h2 className="s-50 w-700">Your Business Benefits</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Harnessing the Power of the Top 1%: Why Partner with
                      TaraTalent
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
                            <img src="images/services/affordable global talent.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Affordable Global Talent</h6>
                        <p>
                          Offering skilled tech professionals at competitive
                          rates, ideal for startups and budget-conscious
                          companies.
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
                            <img src="images/services/smart contract.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Flexible Engagement Model
                        </h6>
                        <p>
                          Providing adaptable contracts without long-term
                          commitments, allowing CEOs to scale their workforce as
                          needed, with no penalties for changes.
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
                            <img src="images/services/experties.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Experienced and Diverse Expertise
                        </h6>
                        <p>
                          Senior professionals averaging over 10 years of
                          experience, covering a wide range of technologies and
                          sectors, crucial for delivering expert solutions.
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
                            <img src="images/services/timezone alignment.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Seamless Global Collaboration
                        </h6>
                        <p>
                          Ensuring timezone alignment for smooth remote
                          collaborations, offering a fully remote operation that
                          transcends geographical boundaries.
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
                            <img src="images/services/support & growth.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          {" "}
                          Continuous Support and Growth
                        </h6>
                        <p>
                          Ongoing technical and professional development for our
                          talents, ensuring they stay ahead in their fields and
                          add value to your projects.
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
                            <img src="images/services/client centric transactions.png" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Client-Centric Operations
                        </h6>
                        <p>
                          A strong commitment to privacy, straightforward
                          financial transactions, and a tailored approach to
                          meet specific business requirements.
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
                    <h2 className="s-50 w-700">Defining Excellence</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      The Exceptional Characteristics of Our Top 1% Talent
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
                          className="img-fluid light-theme-img shadow-type1"
                          src="/images/topn/advanced.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Advanced Technical Proficiency
                        </h6>
                        <p>
                          Masters of complex technical challenges, our talent
                          delivers innovative and effective solutions.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-md-3">
                    <div className="fbox-2 fb-1 wow fadeInUp">
                      {/* Image */}
                      <div className="fbox-img gr--whitesmoke h-175">
                        <img
                          className="img-fluid light-theme-img shadow-type1"
                          src="/images/topn/analytic.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Analytical Thinking</h6>
                        <p>
                          Our professionals excel in making data-driven,
                          insightful decisions for every project.
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
                          className="img-fluid light-theme-img shadow-type1"
                          src="/images/topn/commitment.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Commitment to Excellence</h6>
                        <p>
                          Dedicated to the highest standards, our team strives
                          for quality and excellence in all endeavors.
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
                          className="img-fluid light-theme-img shadow-type1"
                          src="/images/topn/communication.png"
                          alt="feature-image"
                        />
                      </div>
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Open Communication</h6>
                        <p>
                          Prioritizing transparency, our talent ensures clear
                          and effective communication in every collaboration.
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
                      Our <span style={{ color: "#37939b" }}>Top 1%</span>{" "}
                      Talent in Action{" "}
                    </h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Leading Innovation in Varied Fields: A Showcase of Our
                      Elite Talent
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
                          <span>1.</span> Are there any initial recruitment or
                          contract fees?
                        </h5>
                        {/* Answer */}
                        <p className="color--grey">
                          No, TaraTalent does not charge any upfront recruiting
                          or contractual costs to our clients. We believe in
                          providing a seamless and cost-effective talent
                          acquisition process. You can engage with our top 1%
                          talent without any financial obligation until you find
                          the right fit for your project or team. Your
                          satisfaction and success are our priorities.
                        </p>
                      </div>
                      {/* QUESTION #2 */}
                      <div className="question mb-35 wow fadeInUp">
                        {/* Question */}
                        <h5 className="s-22 w-700">
                          <span>2.</span> How is the trial period risk-free?
                        </h5>
                        {/* Answer */}
                        <p className="color--grey">
                          At TaraTalent, we offer a no-risk trial period to our
                          clients. During this trial period, you have the
                          opportunity to work with the talent {`we've`} matched you
                          with. You are not committed to any long-term contracts
                          or financial obligations during this phase.
                        </p>
                      </div>
                      {/* QUESTION #3 */}
                      <div className="question mb-35 wow fadeInUp">
                        {/* Question */}
                        <h5 className="s-22 w-700">
                          <span>3.</span> What if{` I'm`} unsatisfied with a
                          TaraTalent expert?
                        </h5>
                        {/* Answer */}
                        <ul className="simple-list color--grey">
                          <li className="list-item">
                            <p>
                              If, for any reason, you are not fully satisfied
                              with the {`talent's`} performance or believe they are
                              not the right fit for your project, you can choose
                              not to continue with their services, and you will
                              not incur any charges. We believe in the quality
                              of our talent and are confident that {`you'll`} find
                              the right fit, but we offer this trial period to
                              provide peace of mind and ensure you are
                              completely satisfied with your choice.
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
                          <span>4.</span> How does TaraTalent ensure candidates meet our requirements?
                        </h5>
                        {/* Answer */}
                        <p className="color--grey">
                          {`TaraTalent's`} rigorous screening process evaluates
                          candidates for communication skills, domain expertise,
                          and professionalism. Our multi-faceted approach
                          includes portfolio reviews, technical assessments, and
                          live problem-solving sessions. Only around 1% of
                          applicants pass this selective process, guaranteeing
                          top-tier talent aligned with your requirements.
                        </p>
                      </div>
                      {/* QUESTION #5 */}
                      <div className="question mb-35 wow fadeInUp">
                        {/* Question */}
                        <h5 className="s-22 w-700">
                          <span>5.</span> Where are your talents based?
                        </h5>
                        {/* Answer */}
                        <p className="color--grey">
                          Our experts are primarily located in the Middle East,
                          a region known for its highly skilled technical
                          professionals. This strategic location allows us to
                          offer cost-effective talent solutions while
                          maintaining the quality and expertise required for
                          tech-related roles.
                        </p>
                      </div>
                      {/* QUESTION #6 */}
                      <div className="question mb-35 wow fadeInUp">
                        {/* Question */}
                        <h5 className="s-22 w-700">
                          <span>6.</span> Are there any language barriers when
                          working with {`TaraTalent's`} experts?
                        </h5>
                        {/* Answer */}
                        <p className="color--grey">
                          No, language barriers are not an issue when working
                          with {`TaraTalent's`} experts. We ensure that all our
                          professionals have strong English language skills,
                          both written and spoken, to facilitate effective
                          communication and collaboration with clients
                          worldwide.
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
