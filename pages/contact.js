import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { logoSlider } from "../src/sliderProps";
const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Kontak"} />
      <section className="contact-information-one p-r z-1 pt-215 pb-130">
        <div className="information-img_one wow fadeInRight">
          <img src="assets/images/contact/img-1.jpg" alt="Imaged" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12">
              <div className="contact-two_information-box">
                <div className="section-title section-title-left mb-50 wow fadeInUp">
                  <span className="sub-title">Mulai hubungi kami</span>
                  <h2>
                    Hubungi Kami Jika Membutuhkan Informasi & Bantuan Pelayanan Desa!
                  </h2>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="information-item-two info-one mb-30 wow fadeInDown">
                      <div className="icon">
                        <i className="far fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <h5>Lokasi</h5>
                        <p>Tegalsari, Kec. Garung, Kab. Wonosobo</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="information-item-two mb-30 info-two wow fadeInUp">
                      <div className="icon">
                        <i className="far fa-envelope-open-text" />
                      </div>
                      <div className="info">
                        <h5>Email Address</h5>
                        <p>
                          <a href="mailto:hotlinein@gmail.com">
                            nanang@gmail.com
                          </a>
                        </p>
                        <p>
                          <a href="mailto:www.info.net">www.tegalsari.id</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="information-item-two mb-30 info-three wow fadeInDown">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="info">
                        <h5>Phone Number</h5>
                        <p>
                          <a href="tel:+01234567899">+62 821 3715 7135</a>
                        </p>
                        <p>
                          <a href="tel:+0123456">+62 89 9498 3040</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <p>
                      Desa Tegalsari melayani kebutuhan informasi, aspirasi, dan pelayanan masyarakat dengan cepat. Jangan ragu untuk menghubungi kami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Information section ======*/}
      {/*====== Start Map section ======*/}
      <section className="contact-page-map">
        <div className="map-box">
          {/* <iframe src="https://maps.google.com/maps?q=PiiFeqS9SaPYAGRa7=&output=embed" /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31661.028400154708!2d109.87935286477325!3d-7.283035584343259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700baae8ef9787%3A0x53c0bc737dbb560e!2sTegalsari%2C%20Kec.%20Garung%2C%20Kabupaten%20Wonosobo%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1752304829514!5m2!1sid!2sid" />
        </div>
      </section>
      {/*====== End Map section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-three pb-70 wow fadeInUp">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-10">
              <div className="contact-three_content-box">
                <div className="section-title section-title-left mb-60">
                  <span className="sub-title">Hubungi Kami Sekarang</span>
                  <h2>Butuh Bantuan atau Informasi Pelayanan Desa? Tulis Pesan Anda!</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Nama Lengkap"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Alamat Email"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        placeholder="Tulis Pesan"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-yellow">
                        Kirim Pesan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Partner Section ======*/}
      {/* <section className="partners-one p-r z-1 pt-50 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-30 wow fadeInUp">
                <h4>We Have More Then 1235+ Global Partners</h4>
              </div>
            </div>
          </div>
          <Slider {...logoSlider} className="partner-slider-one wow fadeInDown">
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-7.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-8.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-9.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-10.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-11.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-12.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-10.png"
                  alt="partner image"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
    </Layout>
  );
};
export default Contact;
