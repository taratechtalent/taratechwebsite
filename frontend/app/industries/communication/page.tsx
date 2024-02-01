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
                    <span className="section-id">Results driven</span>
                    {/* Title */}
                    <h2 className="s-46 w-700">
                      Unleashing Creative Potential in Entertainment industry{" "}
                    </h2>
                    {/* Text */}
                    <p>
                      At TaraTalent, we recognize that the world of
                      Communication, Media & Entertainment is a dynamic and
                      ever-evolving landscape. Our mission is to connect
                      visionary leaders in this industry with the exceptional
                      talent needed to drive innovation, captivate audiences,
                      and shape the future of media and entertainment. Discover
                      how our professionals bring creativity and technical
                      expertise to the forefront.
                    </p>
                    <Link href="/book" className="btn btn--theme hover--theme">
                      Schedual a Call
                    </Link>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-6 order-first order-md-2">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="https://media.licdn.com/dms/image/D4D12AQF2WFOlCzd8Ew/article-cover_image-shrink_720_1280/0/1686377052367?e=2147483647&v=beta&t=ovU1Z3-f0uFCLTE8WGDtRBDfvt5NmERHYHKnMgGBuXk"
                      alt="content-image"
                      style={{
                        borderRadius: "15px",
                        boxShadow: "0 4px 12px 0 hsla(192,8%,47%,.43)",
                      }}
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
                    <h5 className="s-24 w-700 mb-20 ">Media Mastery</h5>
                    {/* Text */}
                    <p>
                      TaraTalent understands the dynamic world of media,
                      communication, and entertainment. Our experts stay updated
                      with industry trends to provide tailored talent for your
                      creative needs.
                    </p>
                    {/* List */}
                  </div>
                </div>{" "}
                {/* END ABOUT-3 TEXT */}
                {/* ABOUT-3 TEXT */}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block shadow">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">
                      Custom Creative Solutions
                    </h5>
                    {/* Text */}
                    <p>
                      We specialize in connecting companies in this industry
                      with highly skilled professionals. Our direct access to
                      exceptional talent ensures your creative visions come to
                      life.
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div id="a3-2" className="txt-block shadow">
                    {/* Title */}
                    <h5 className="s-24 w-700 mb-20">Innovative Impact</h5>
                    {/* Text */}
                    <p>
                      Our professionals have made a significant impact on the
                      media and entertainment landscape. {`They've`} contributed
                      to content creation, digital marketing, video production,
                      and more.
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
                      Media & Entertainment Solutions
                    </h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Explore Our Wide Array of Services that Empower the Media
                      and Entertainment Industry.
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
                            <img src="\images\png_icons\icons8-digital-marketing-68.png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Digital Marketing & Promotion
                        </h6>
                        <p>
                          Navigate the world of digital marketing and promotion,
                          where TaraTalent collaborates with companies to reach
                          and engage their audiences effectively. Learn about
                          the marketers, social media strategists, and SEO
                          experts who drive online visibility.
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
                            <img src="\images\png_icons\icons8-broadcasting-64.png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">Broadcasting & Streaming</h6>
                        <p>
                          Step into the realm of broadcasting and streaming,
                          where TaraTalent supports companies in delivering live
                          and on-demand content. Meet the broadcasters,
                          streaming engineers, and tech-savvy professionals who
                          ensure seamless content delivery.
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
                            <img src="\images\png_icons\icons8-virtual-reality-68.png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Entertainment Technology & Innovation
                        </h6>
                        <p>
                          Get a glimpse of the latest entertainment technology
                          and innovation trends, powered by {`TaraTalent's`}{" "}
                          network of experts. Discover how we enable companies
                          to harness cutting-edge tech, from AR/VR to
                          interactive experiences.
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
                            <img src="\images\png_icons\icons8-content-marketing-68 (1).png"></img>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">
                          Content Creation & Production
                        </h6>
                        <p>
                          Delve into content creation and production, where
                          TaraTalent partners with media and entertainment
                          companies to produce captivating content across
                          various platforms. Discover the creatives, writers,
                          directors, and producers who make it happen.
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
                  <h2 className="s-52 w-700 mb-20 ">How to work with Us</h2>
                  <p className="s-21 color--grey">
                    Achive Your Goal in the Way You Never Experienced Before
                  </p>
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
