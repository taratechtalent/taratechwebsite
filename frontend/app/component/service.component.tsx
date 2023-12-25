/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const ServiceComponent = ({
  title = "What we offer",
  desc = "Our advanced solution to make you software development perfect",
}: {
  title?: string;
  desc?: string;
}) => (
  <section id="features-11" className="py-100 features-section division mt-32">
    <div className="container">
      {/* SECTION TITLE */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">
          <div className="section-title mb-70">
            {/* Title */}
            <h2 className="s-50 w-700">{title}</h2>
            {/* Text */}
            <p className="s-21 color--grey">{desc}</p>
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
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">Web App Development</h6>
                <p>
                  Web app development combines HTML, CSS, and JavaScript with
                  backend languages to create interactive, responsive
                  applications. Focused on user experience and scalability, it
                  evolves with technological advancements, driving innovation in
                  accessible, efficient global web solutions.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/web"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">Software testing & QA</h6>
                <p>
                  Software testing and QA ensure that applications meet quality
                  standards and function as intended, through systematic
                  processes of verification, bug identification, and performance
                  assessment to enhance product reliability.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/qa"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="!mb-10 divider" />
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
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">Mobile App Development</h6>
                <p>
                  Mobile app development involves creating software for
                  smartphones and tablets, focusing on optimized design,
                  functionality, and user experience across diverse platforms
                  and devices for on-the-go accessibility and performance.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/mobile"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">UI/UX Design</h6>
                <p>
                  UI/UX design merges visual design with user experience to
                  create intuitive and attractive interfaces, focusing on
                  {`user's`} ease, engagement, and satisfaction with a
                  {`product's`} look and feel.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/uiux"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="!mb-10 divider" />

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
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">Devops</h6>
                <p>
                  DevOps integrates development and operations to improve
                  collaboration, speed, and product quality, focusing on
                  continuous integration, automated deployment, and quicker,
                  more efficient delivery cycles in software development.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/devops"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* END FEATURE BOX #5 */}
          {/* FEATURE BOX #6 */}
          <div className="col">
            <div className="fbox-11 fb-4 wow fadeInUp">
              {/* Icon */}
              <div className="fbox-ico-wrap">
                <div className="fbox-ico ico-50">
                  <div className="shape-ico">
                    <img src="images/services/art.png" />
                  </div>
                </div>
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">Digital Art</h6>
                <p>
                  Digital art encompasses creating visual content using
                  technology, ranging from illustrations to animations,
                  utilizing software and devices to craft, manipulate, and
                  produce innovative artistic expressions in a digital format.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/art"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="!mb-10 divider" />

          <div className="col">
            <div className="fbox-11 fb-4 wow fadeInUp">
              {/* Icon */}
              <div className="fbox-ico-wrap">
                <div className="fbox-ico ico-50">
                  <div className="shape-ico">
                    <img src="images/services/ai.png" />
                  </div>
                </div>
              </div>
              {/* End Icon */}
              {/* Text */}
              <div className="fbox-txt">
                <h6 className="s-22 w-700">AI/Machine Learning</h6>
                <p>
                  AI/Machine Learning involves algorithms and statistical models
                  that enable computers to improve tasks with experience,
                  focusing on prediction, automation, and decision-making in
                  various fields from healthcare to finance.
                </p>
                <div className="pt-8 text-right">
                  <Link
                    href="/service/ai"
                    className="btn r-04 btn--theme hover--theme"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* END FEATURE BOX #6 */}
        </div>
        {/* End row */}
      </div>
      {/* END FEATURES-11 WRAPPER */}
    </div>
    {/* End container */}
  </section>
);
export default ServiceComponent;
