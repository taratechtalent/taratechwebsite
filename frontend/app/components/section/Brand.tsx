import BrandSlider from "../slider/BrandSlider";
export default function Brands() {
  return (
    <>
      <div id="brands-1" className="py-100 brands-section">
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
