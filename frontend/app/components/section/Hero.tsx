/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <>
      <section id="hero-2" className="bg--scroll hero-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* HERO IMAGE */}
            <div className="col-md-6 order-last order-md-2">
              <div className="hero-2-img wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/hero-2-img.png"
                  alt="hero-image"
                />
              </div>
            </div>
            {/* HERO TEXT */}
            <div className="col-md-6 order-first order-md-2">
              <div className="hero-2-txt wow fadeInLeft">
                {/* Title */}
                <h2 className="s-56 w-700 color--black">
                  Affordable<span className="main-text">Senior Talents</span>{" "}
                  
                </h2>
                {/* Text */}
                <p className="p-lg">
                  Tempor sapien sodales quaerat ipsum congue ipsum laoreet
                  turpis neque auctor turpis a vitae dolor luctus placerat magna
                  and ligula cursus purus ipsum
                </p>
                {/* HERO DIGITS */}
                <div className="hero-digits row">
                  {/* DIGIT BLOCK #1 */}
                  <div id="hd-1-1" className="wow fadeInUp col-md-6 col-sm-12">
                    <div className="hero-digits-block">
                      {/* Digit */}
                      <div className="block-digit">
                        <h2 className="s-20 statistic-number color--black">
                          Easy contract
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="block-txt">
                        <p className="p-sm"></p>
                      </div>
                    </div>
                  </div>{" "}
                  <div id="hd-1-1" className="wow fadeInUp col-md-6 col-sm-12">
                    <div className="hero-digits-block">
                      {/* Digit */}
                      <div className="block-digit">
                        <h2 className="s-20 statistic-number color--black">
                          Flexibility
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="block-txt">
                        <p className="p-sm"></p>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    id="hd-1-1"
                    className="wow fadeInUp pt-6 col-md-6 col-sm-12"
                  >
                    <div className="hero-digits-block">
                      {/* Digit */}
                      <div className="block-digit">
                        <h2 className="s-20 statistic-number color--black">
                          Affordability
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="block-txt">
                        <p className="p-sm"></p>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    id="hd-1-1"
                    className="wow fadeInUp pt-6 col-md-6 col-sm-12"
                  >
                    <div className="hero-digits-block">
                      {/* Digit */}
                      <div className="block-digit">
                        <h2 className="s-20 statistic-number color--black">
                          Technical Support
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="block-txt">
                        <p className="p-sm"></p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END DIGIT BLOCK #1 */}
                  {/* DIGIT BLOCK #2 */}
                  {/* END DIGIT BLOCK #2 */}
                </div>{" "}
                {/* END HERO DIGITS */}
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
