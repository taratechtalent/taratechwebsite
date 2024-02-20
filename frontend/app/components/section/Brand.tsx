import Link from "next/link";
import BrandSlider from "../slider/BrandSlider";
export default function Brands({ header, desc }: any) {
  return (
    <>
      <div id="brands-1" className="py-100 brands-section">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-title mb-70">
              {/* Title */}
              <h2 className="s-50 w-700">{header}</h2>
              {/* Text */}
              <p className="s-21 color--grey">{desc}</p>
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
          <div className="row pt-24">
            <div className="col-sm-12 text-center">
              <Link
                href="/technology"
                className="btn r-04 btn--theme hover--theme last-link ml-20"
              >
                View Most Popular Technologies
              </Link>
            </div>
          </div>
          {/* END BRANDS CAROUSEL */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
}
