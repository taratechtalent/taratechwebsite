/* eslint-disable @next/next/no-img-element */
export const ServiceItemDetails = ({ title, description }: any) => {
  return (
    <div className="col  ">
      <div className="block-shadow" style={{ height: "450px" }}>
        <div id="rw-2-1" className="review-2 bg--white-100 r-08">
          {/* Quote Icon */}
          <div className="review-ico ico-65">
            <span className="flaticon-quote" />
          </div>
          {/* Text */}
          <div className="review-txt">
            {/* Text */}
            {/* Author */}
            <div className="author-data clearfix mb-10">
              {/* Avatar */}
              <div className="review-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1311/1311452.png"
                  alt="review-avatar"
                />
              </div>
              {/* Data */}
              <div className="review-author">
                <h6 className="s-18 w-700 pt-2">{title}</h6>
              </div>
            </div>{" "}
            {/* End Author */}
            <p>{description}</p>
          </div>{" "}
          {/* End Text */}
        </div>
      </div>
    </div>
  );
};
