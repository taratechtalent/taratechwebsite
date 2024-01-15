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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                            <img src="images/services/icons8-currency-settings-80.png" />
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
                            enriched my personal growth. {`I'm`} deeply grateful for
                            the remarkable journey {`I've`} had so far and excited
                            for what the future holds.
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
            <section
              id="reviews-2"
              className="gr--whitesmoke inner-page-hero reviews-section"
            >
              <div className="container">
                {/* SECTION TITLE */}
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-9">
                    <div className="section-title mb-70">
                      {/* Title */}
                      <h2 className="s-52 w-700">
                        Talent Spotlight: Real Stories, Real Impact
                      </h2>
                      {/* Text */}
                      <p className="s-21 color--grey">
                        Dive into the personal stories of growth and success
                        from our talent members, the heart of TaraTalent.
                      </p>
                    </div>
                  </div>
                </div>
                {/* TESTIMONIALS-2 WRAPPER */}
                <div className="reviews-2-wrapper rel">
                  <div className="row align-items-center row-cols-1 row-cols-md-2">
                    {/* TESTIMONIAL #1 */}
                    <div className="col">
                      <div
                        id="rw-2-1"
                        className="review-2 bg--white-100 block-shadow r-08"
                      >
                        {/* Quote Icon */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <div className="review-txt">
                          {/* Text */}
                          <p>
                            Quaerat sodales sapien euismod blandit aliquet ipsum
                            primis undo and cubilia laoreet augue and luctus
                            magna dolor luctus egestas sapien vitae
                          </p>
                          {/* Author */}
                          <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                              <img
                                src="/images/review-author-1.jpg"
                                alt="review-avatar"
                              />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Scott Boxer</h6>
                              <p className="p-sm">@scott_boxer</p>
                            </div>
                          </div>{" "}
                          {/* End Author */}
                        </div>{" "}
                        {/* End Text */}
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #1 */}
                    {/* TESTIMONIAL #2 */}
                    <div className="col">
                      <div
                        id="rw-2-2"
                        className="review-2 bg--white-100 block-shadow r-08"
                      >
                        {/* Quote Icon */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <div className="review-txt">
                          {/* Text */}
                          <p>
                            At sagittis congue augue and magna ipsum vitae a
                            purus ipsum primis diam a cubilia laoreet augue
                            egestas luctus a donec vitae ultrice ligula magna
                            suscipit lectus gestas augue into cubilia
                          </p>
                          {/* Author */}
                          <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                              <img
                                src="/images/review-author-2.jpg"
                                alt="review-avatar"
                              />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Joel Peterson</h6>
                              <p className="p-sm">Internet Surfer</p>
                            </div>
                          </div>{" "}
                          {/* End Author */}
                        </div>{" "}
                        {/* End Text */}
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #2 */}
                    {/* TESTIMONIAL #3 */}
                    <div className="col">
                      <div
                        id="rw-2-3"
                        className="review-2 bg--white-100 block-shadow r-08"
                      >
                        {/* Quote Icon */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <div className="review-txt">
                          {/* Text */}
                          <p>
                            An augue cubilia laoreet magna suscipit egestas and
                            ipsum a lectus purus ipsum primis and augue ultrice
                            ligula and egestas a suscipit lectus gestas undo
                            auctor tempus feugiat impedit quaerat
                          </p>
                          {/* Author */}
                          <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                              <img
                                src="/images/review-author-5.jpg"
                                alt="review-avatar"
                              />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Jennifer Harper</h6>
                              <p className="p-sm">App Developer</p>
                            </div>
                          </div>{" "}
                          {/* End Author */}
                        </div>{" "}
                        {/* End Text */}
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #3 */}
                    {/* TESTIMONIAL #4 */}
                    <div className="col">
                      <div
                        id="rw-2-4"
                        className="review-2 bg--white-100 block-shadow r-08"
                      >
                        {/* Quote Icon */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <div className="review-txt">
                          {/* Text */}
                          <p>
                            Augue at vitae purus tempus egestas volutpat augue
                            undo cubilia laoreet magna suscipit luctus dolor
                            blandit at purus tempus feugiat impedit
                          </p>
                          {/* Author */}
                          <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                              <img
                                src="/images/review-author-8.jpg"
                                alt="review-avatar"
                              />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Evelyn Martinez</h6>
                              <p className="p-sm">WordPress Consultant</p>
                            </div>
                          </div>{" "}
                          {/* End Author */}
                        </div>{" "}
                        {/* End Text */}
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #4 */}
                    {/* TESTIMONIAL #5 */}
                    <div className="col">
                      <div
                        id="rw-2-5"
                        className="review-2 bg--white-100 block-shadow r-08"
                      >
                        {/* Quote Icon */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <div className="review-txt">
                          {/* Text */}
                          <p>
                            Quaerat sodales sapien euismod blandit aliquet ipsum
                            primis undo and cubilia laoreet augue and luctus
                            magna dolor luctus egestas sapien vitae
                          </p>
                          {/* Author */}
                          <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                              <img
                                src="/images/review-author-6.jpg"
                                alt="review-avatar"
                              />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Leslie D.</h6>
                              <p className="p-sm">Web Developer</p>
                            </div>
                          </div>{" "}
                          {/* End Author */}
                        </div>{" "}
                        {/* End Text */}
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #5 */}
                    {/* TESTIMONIAL #6 */}
                    <div className="col">
                      <div
                        id="rw-2-6"
                        className="review-2 bg--white-100 block-shadow r-08"
                      >
                        {/* Quote Icon */}
                        <div className="review-ico ico-65">
                          <span className="flaticon-quote" />
                        </div>
                        {/* Text */}
                        <div className="review-txt">
                          {/* Text */}
                          <p>
                            At sagittis congue augue and magna ipsum vitae a
                            purus ipsum primis diam a cubilia laoreet augue
                            egestas luctus a donec vitae ultrice ligula magna
                            suscipit lectus gestas augue into cubilia
                          </p>
                          {/* Author */}
                          <div className="author-data clearfix">
                            {/* Avatar */}
                            <div className="review-avatar">
                              <img
                                src="/images/review-author-3.jpg"
                                alt="review-avatar"
                              />
                            </div>
                            {/* Data */}
                            <div className="review-author">
                              <h6 className="s-18 w-700">Marisol19</h6>
                              <p className="p-sm">@marisol19</p>
                            </div>
                          </div>{" "}
                          {/* End Author */}
                        </div>{" "}
                        {/* End Text */}
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #6 */}
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* END TESTIMONIALS-2 WRAPPER */}
              </div>{" "}
              {/* End container */}
            </section>{" "}
            {/* END TESTIMONIALS-2 */}
            {/* PAGE PAGINATION
    ============================================= */}
            <div className="py-100 page-pagination theme-pagination">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <nav aria-label="Page navigation">
                      <ul className="pagination ico-20 justify-content-center">
                        <li className="page-item disabled">
                          <Link className="page-link" href="#" tabIndex={-1}>
                            <span className="flaticon-back" />
                          </Link>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link"
                            href="#"
                            aria-label="Next"
                          >
                            <span className="flaticon-next" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* END PAGE PAGINATION */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
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
          {/* END ABOUT-2 */}
          {/* FEATURES-11
			============================================= */}
          {/* END FEATURES-11 */}
          {/* TEXT CONTENT
			============================================= */}
        </div>
      </Layout>
    </>
  );
}
