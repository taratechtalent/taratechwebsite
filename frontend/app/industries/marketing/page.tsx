/* eslint-disable @next/next/no-img-element */
import Layout from "@/app/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section className="ct-01 inner-page-hero content-section division">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-6 order-last order-md-2">
                  <div className="txt-block left-column wow fadeInRight">
                    {/* Section ID */}
                    <span className="section-id">Driving Efficiency</span>
                    {/* Title */}
                    <h2 className="s-46 w-700">
                      Empowering Finance through Tech Expertise
                    </h2>
                    {/* Text */}
                    <p>
                      In the dynamic world of finance, retail, marketing, and
                      consumer industries, TaraTalent empowers your growth
                      journey with cutting-edge technology and expertise,
                      seamlessly connecting top talent to your unique industry
                      needs.
                    </p>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="https://thumbs.dreamstime.com/b/business-consulting-meeting-working-brainstorming-new-project-finance-investment-concept-148096487.jpg"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* END SECTION CONTENT (ROW) */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TEXT CONTENT */}
          {/* FEATURES-11
			============================================= */}
          <div id="about-3" className="pt-100 about-section division">
            <div className="container">
              <div className="row">
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-1" className="txt-block shadow">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Our Expertise</h5>
                    {/* Text */}
                    <p>
                      At TaraTalent, we specialize in connecting companies in
                      the finance, retail, marketing, and consumer sectors with
                      top-tier tech talent. Our experts bring a wealth of
                      industry-specific knowledge and technical proficiency to
                      the table.
                    </p>
                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block shadow">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Tailored Solutions</h5>
                    {/* Text */}
                    <p>
                      Unlike traditional outsourcing models, we provide direct
                      access to exceptional professionals who understand the
                      intricacies of these industries. We believe in a
                      partnership approach that aligns with your unique needs
                      and goals.
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block shadow">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Industry Impact</h5>
                    {/* Text */}
                    <p>
                      Our tech professionals have a significant impact on the
                      finance, retail, marketing, and consumer sectors. From
                      fintech innovation to e-commerce solutions, data-driven
                      marketing strategies, and enhancing the consumer
                      experience, {`we've`} been at the forefront of industry
                      advancements.
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
          <section
            id="features-11"
            className="pt-100 features-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-50 w-700">
                      We make your business gain more revenue at a glance
                    </h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Our expertise in the finance
                      industry empowers your business to achieve remarkable
                      revenue milestones effortlessly.
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
                          <div className="shape-ico color--theme">
                          <img src="\images\png_icons\icons8-fintech-48.png"></img> 
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Financial Technology (Fintech)
                        </h6>
                        <p>
                          We offer expertise in developing cutting-edge fintech
                          solutions, ensuring security, compliance, and
                          efficiency in financial services.
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
                          <div className="shape-ico color--theme">
                          <img src="\images\png_icons\icons8-retail-50.png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Retail Tech</h6>
                        <p>
                          TaraTalent professionals have contributed to the
                          development of e-commerce platforms, inventory
                          management systems, and customer-centric retail
                          technology.
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
                          <div className="shape-ico color--theme">
                          <img src="\images\png_icons\icons8-digital-marketing-68.png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Marketing Solutions</h6>
                        <p>
                          Our team excels in data-driven marketing, helping
                          businesses optimize their strategies, and enhance
                          customer engagement.
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
                          <div className="shape-ico color--theme">
                          <img src="\images\png_icons\icons8-product-knowledge-50.png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Consumer-Centric Innovations
                        </h6>
                        <p>
                          We focus on improving the consumer experience through
                          innovative solutions that cater to evolving
                          preferences.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END FEATURE BOX #4 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FEATURES-11 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          <div className="row p-4 m-4" style={{ backgroundColor: "#37939b" }}>
            <div className="col-sm-12 text-center">
              <Link
                href="/book"
                className="btn r-04 btn--theme hover--theme mb-20  mt-20"
              >
                Team up for success
              </Link>
            </div>
          </div>
          <hr className="divider" />
          
          <section className="py-100 ct-02 content-section division">
            <div className="container">
              <div className="row">
                <div className="col text-center mb-32">
                  <h2 className="s-52 w-700">How to work with Us</h2>
                  <h4 className="font-bold pt-6">
                    Achive your goal in the way you never experienced before
                  </h4>
                </div>
              </div>
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-12">
                  <div className="txt-block flex right-column wow fadeInLeft">
                    {/* CONTENT BOX #1 */}
                    <div className="cbox-2 process-step col-md-4">
                      {/* Icon */}
                      <div className="ico-wrap">
                        <div className="cbox-2-ico bg--theme color--white">
                          1
                        </div>
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="s-22 w-700">
                          Consult with Our Industry Experts
                        </h5>
                        <p>
                          Our team collaborates with you to understand your
                          industry-specific goals, technical requirements, and
                          team dynamics.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #1 */}
                    {/* CONTENT BOX #2 */}
                    <div className="cbox-2 process-step col-md-4">
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
                          Access Hand-Picked Talent
                        </h5>
                        <p>
                          Connect with the ideal talent for your industry,
                          typically within days.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #2 */}
                    {/* CONTENT BOX #3 */}
                    <div className="cbox-2 process-step col-md-4">
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
                          Trial Period, Risk-Free Hiring
                        </h5>
                        <p className="mb-0">
                          Evaluate your new team member on a trial basis,
                          ensuring a perfect match.
                        </p>
                      </div>
                    </div>{" "}
                    {/* END CONTENT BOX #3 */}
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              {/* END SECTION CONTENT (ROW) */}
            </div>{" "}
            {/* End container */}
          </section>
          {/* END FEATURES-11 */}
        </div>
      </Layout>
    </>
  );
}
