/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section className="pt-100 ws-wrapper content-section">
            <div className="container">
              <div className="bc-1-wrapper bg--02 bg--fixed r-16">
                <div className="section-overlay">
                  <div className="row d-flex align-items-center">
                    {/* TEXT BLOCK */}
                    <div className="col-md-6 order-last order-md-2">
                      <div className="txt-block left-column wow fadeInRight">
                        {/* Section ID */}
                        <span className="section-id">Contact us</span>
                        {/* Title */}
                        <h2 className="s-46 w-700">
                          How can we support your needs?
                        </h2>
                        {/* Text */}
                      </div>
                    </div>{" "}
                    {/* END TEXT BLOCK */}
                    {/* IMAGE BLOCK */}
                    <div className="col-md-6 order-first order-md-2">
                      <div className="img-block right-column wow fadeInLeft">
                        <img
                          className="img-fluid   rounded-lg"
                          src="/images/a2-1.jpg"
                          alt="content-image"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* End section overlay */}
              </div>{" "}
              {/* End content wrapper */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          <section
            id="contacts-1"
            className="pb-50 inner-page-hero contacts-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title text-center mb-80">
                    {/* Title */}
                    <h2 className="s-52 w-700">Questions? {`Let's`} Talk</h2>
                    {/* Text */}
                    <p className="p-lg">
                      Want to learn more about Taratalent, get a quote, or speak
                      with an expert? Let us know what you are looking for and
                      we’ll get back to you right away
                    </p>
                  </div>
                </div>
              </div>
              {/* CONTACT FORM */}
              <div className="row justify-content-center">
                <div className="col-md-11 col-lg-10 col-xl-8">
                  <div className="form-holder">
                    <form name="contactform" className="row contact-form">
                      {/* Contact Form Input */}
                      <div className="col-md-12">
                        <p className="p-lg">Your Name: </p>
                        <span>Please enter your real name: </span>
                        <input
                          type="text"
                          name="name"
                          className="form-control name"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">Your Email Address: </p>
                        <span>
                          Please carefully check your email address for accuracy
                        </span>
                        <input
                          type="text"
                          name="email"
                          className="form-control email"
                          placeholder="Email Address*"
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">Explain your request:</p>

                        <textarea
                          className="form-control message"
                          name="message"
                          rows={6}
                          placeholder="I wonder ..."
                        />
                      </div>
                      {/* Contact Form Button */}
                      <div className="col-md-12 mt-15 form-btn text-right">
                        <button
                          type="submit"
                          className="btn btn--theme hover--theme submit"
                        >
                          Submit Request
                        </button>
                      </div>

                      {/* Contact Form Message */}
                      <div className="col-lg-12 contact-form-msg">
                        <span className="loading" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>{" "}
              {/* END CONTACT FORM */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTACTS-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* NEWSLETTER-1
			============================================= */}
          <section id="newsletter-1" className="newsletter-section">
            <div className="newsletter-overlay bg--02">
              <div className="container">
                <div className="row d-flex align-items-center">
                  {/* NEWSLETTER TEXT */}
                  <div className="col-md-8">
                    <h4 className="s-34 w-700">
                      Accelerate your roadmap with a global partner.
                    </h4>
                    <div className="w-56 text-center mt-8">
                      <Link
                        href="/book"
                        className="btn  btn--theme hover--tra-white  w-28"
                      >
                        Book a Discovery Call
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="banner-12-img text-center">
                      <img
                        className="img-fluid rounded-full h-1/4"
                        src="/images/contact/join-girl-2.png"
                        alt="banner-image"
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <hr className="divider" />
          <section className="pt-100 ct-02 content-section division mb-40">
            <div className="container">
              {/* SECTION CONTENT (ROW) */}
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}
                    <span className="section-id">
                      Our Offices Around the World
                    </span>
                  </div>
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid  rounded-md"
                      src="/images/stanbul.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}

                    {/* Title */}
                    <h2 className="s-40 w-700 ">Turkey</h2>
                    <span className="s-20 w-700">Stanbul</span>
                    {/* Text */}
                    <p>
                      No.61.2, Sultan Selim Mahallesi Eski Buyukdere Caddesi
                      Istanbul
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              <div className="row d-flex align-items-center mt-20">
                {/* IMAGE BLOCK */}
                <div className="col-md-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid rounded-md"
                      src="/images/italy.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}

                    {/* Title */}
                    <h2 className="s-40 w-700 ">Itlaly</h2>
                    <span className="s-20 w-700">Sirtori, Lombardy</span>
                    {/* Text */}
                    <p>
                      No.42.3, Vittorio Veneto Quartiere Antica Strada Romana,
                      Sirtori, Lombardy
                    </p>
                    {/* Text */}
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              {/* END SECTION CONTENT (ROW) */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          <hr className="divider" />
        </div>
      </Layout>
    </>
  );
}
