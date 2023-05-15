import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layouts/Layout";
import { logoSlider, testimonialSliderOne } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-section p-r z-1 pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
                  <span className="sub-title">About Us</span>
                  <h2>A historic stone house and sheep farm  &amp; located in Clifford, Pennsylvanias</h2>
                </div>
                <p>
                Originally built in 1916 by James Wood Johnson, Fern Hall Estate boasts over 100 acres of private estate living, including a pure spring-fed lake and stunning mountain scener.
                </p>
                <div className="choose-item-list wow fadeInDown">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Stunning Wedding Venue</h5>
                      <p>
                      Fern Hall Estate offers a stunning, historic setting for your wedding day, with picturesque views of the Endless Mountains and a private, spring-fed lake.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Historic Countryside Retreat.</h5>
                      <p>
                      Escape to Fern Hall Estate for a luxurious retreat in the heart of the Pennsylvania countryside. With a private spring-fed lake, mountain scenery, hiking trails, and eagles soaring overhead, you&apos;ll have 10 acres of serene privacy to explore and enjoy.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link href="/about">
                    <a className="main-btn btn-yellow">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInRight">
                  <img
                    src="/assets/images/about/4.jpg"
                    className="about-img_one"
                    alt=""
                  />
                  <img
                    src="public/assets/images/about/5.jpg"
                    className="about-img_two"
                    alt=""
                  />
          </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Why choose Section ======*/}
      
      {/*====== End Partners Section ======*/}
      {/*====== Start Farmers Section ======*/}
      
      {/*====== End Farmers Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Counter Section ======*/}
      
    </Layout>
  );
};
export default About;
