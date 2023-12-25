/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ServiceContactComponent = () => (
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
                  Join Us in Crafting a Partnership Where Success Knows No
                  Bounds
                </h2>
                {/* Text */}
                <p className="p-lg">
                  Your unique perspective and talents are the missing pieces to
                  our collective success story.
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
                  src="/images/contact/contactuswoman.png"
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
  </section>
);
export default ServiceContactComponent;
