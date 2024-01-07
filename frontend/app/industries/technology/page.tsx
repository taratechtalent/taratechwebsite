/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/layout/Layout";
export default function TechnologyIndustry() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          {/* END IMAGE CONTENT */}
          {/* STATISTIC-1
			============================================= */}
          {/* END STATISTIC-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* TEXT CONTENT
			============================================= */}
          <section
            id="integrations-1"
            className="pt-100 integrations-section mt-80"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">Technology</h2>
                    {/* Text */}
                    <p className="s-21 color--grey"></p>
                  </div>
                </div>
              </div>
              {/* INTEGRATIONS-1 WRAPPER */}

              {/* END INTEGRATIONS-1 WRAPPER */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END INTEGRATIONS-1 */}
          {/* BANNER-3
			============================================= */}
        </div>
      </Layout>
    </>
  );
}
