import BrandSlider from "../slider/BrandSlider";
export default function Brands() {
  return (
    <>
      <div id="brands-1" className="py-100 brands-section">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-title mb-70">
              {/* Title */}
              <h2 className="s-50 w-700">
                Most popular technologies we support
              </h2>
              {/* Text */}
              <p className="s-21 color--grey">
                Best and amazing stack the every one likes that
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* BRANDS CAROUSEL */}
          <div className="row">
            <div className="col text-center">
              <BrandSlider />
            </div>
          </div>{" "}
          {/* END BRANDS CAROUSEL */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
}
