import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layouts/Layout";



import { blogPosts } from "../Data/blogpost";
import {
  heroSliderOne,
  logoSlider,
  projectsSliderTwo,
  serviceSliderOne,
} from "../src/sliderProps";
import VideoPopup from "../src/components/VideoPopup";
import Subscribe from "../src/components/subscribe";


const Index3 = ({posts}) => {
  return (
    <Layout header={3} footer={3}>
      <section className="hero-area-three">
        <Slider {...heroSliderOne} className="hero-slider-one">
          
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_three-slider-1.jpg)",
              }}
            />
    

    
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Welcome to Fernhall
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                    Historic Estate
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="#">
                        <a className="main-btn btn-white">Upcoming Events</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_three-slider-3.jpg)",
              }}
            />
            
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Welcome to Fernhall
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Organic Sheep Farm
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="#">
                        <a className="main-btn btn-white">Upcoming Events</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

       
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
 
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-130 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three-image_box p-r mb-40 wow fadeInLeft">
                <div className="experience-box dark-black-bg z-1 text-center text-white">
                  <h3>Originally built in 1916 by the Johnson & Johnson family </h3>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <img
                      src="assets/images/about/1.jpg"
                      className="about-img_one"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7">
                    <img
                      src="assets/images/about/2.jpg"
                      className="about-img_two"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content_box content-box-gap pl-lg-60">
                <div className="section-title section-title-left mb-15 wow fadeInUp">
                  <span className="sub-title">About Us</span>
                  <h2>Welcome to Fernhall &amp; Estate Farm</h2>
                </div>
                <p>
                A rejuvenated country retreat that has been acquired by the Balfour family in 2019. The homestead is now available for community events and weekly rentals. Come and experience the tranquility and privacy of rural living, while enjoying the space and numerous activities available on our estate. Whether you&apos;re looking for a venue for a special event or simply seeking a peaceful getaway, Orgrarium Farm is the perfect place to relax and unwind.
                </p>
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="food-card text-center mb-40 wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <div className="text">
                        <h5>Heart of Nature</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="food-card text-center mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-grape" />
                      </div>
                      <div className="text">
                        <h5>Historic Property</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="food-card text-center mb-40 wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-cow" />
                      </div>
                      <div className="text">
                        <h5>Experience tranquility</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Fun Fact Section ======*/}
      <Subscribe />
      {/*====== End Fun Fact Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-one p-r">
        <div className="container-fluid">
          <div className="cta-wrap-one">
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div
                  className="cta-item_one bg_cover text-white mb-40 wow fadeInLeft"
                  style={{
                    backgroundImage: "url(assets/images/cta/cta-1.jpg)",
                  }}
                >
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2>Book a dream wedding</h2>
                    <Link href="/book-your-wedding">
                      <a className="main-btn bordered-btn bordered-white">
                        Get Quote
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div
                  className="cta-item_one bg_cover text-white mb-40 wow fadeInRight"
                  style={{
                    backgroundImage: "url(assets/images/cta/cta-2.jpg)",
                  }}
                >
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2>Book your a stay</h2>
                    <Link href="/contact">
                      <a className="main-btn bordered-btn bordered-white">
                        Book a stay
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}

      <VideoPopup />
      {/*====== Start Service Section ======*/}
      <section className="service-two light-black-bg pt-165">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title section-title-white text-center mb-50 wow fadeInDown">
    
                <h2 class="section-title-heading">Escape to the peaceful countryside of Northeastern Pennsylvania and immerse yourself in the historic charm of Fern Hall Estate.</h2>
              </div>
            </div>
          </div>
          <Slider {...serviceSliderOne} className="service-slider-one">
            <div className="single-service-item-two text-center wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/service/img-2.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="">
                    <a>Wilderness Retreat</a>
                  </Link>
                </h3>
                <p>
                Escape to the peaceful countryside of Northeastern Pennsylvania and immerse yourself in the historic charm of Fern Hall Estate and sheep farm.
                </p>
                <Link href="">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInDown">
              <div className="img-holder">
                <img src="assets/images/service/img-3.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="">
                    <a>Historic &amp; Living</a>
                  </Link>
                </h3>
                <p>
                Step into the past and indulge in the luxury of living in a historic stone house, meticulously crafted from local stone in 1916 and beautifully preserved to this day. 
                </p>
                <Link href="">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/service/img-4.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="">
                    <a>Breathtaking Views</a>
                  </Link>
                </h3>
                <p>
                Situated between the picturesque Crystal Lake and the magnificent Endless Mountains, it offers breathtaking views and a tranquil atmosphere.
                </p>
                <Link href="">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInDown">
              <div className="img-holder">
                <img src="assets/images/service/img-3.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="">
                    <a>Historic &amp; Living</a>
                  </Link>
                </h3>
                <p>
                Step into the past and indulge in the luxury of living in a historic stone house, meticulously crafted from local stone in 1916 and beautifully preserved to this day. 
                </p>
                <Link href="/service-details">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Partners Section ======*/}
      {/*====== End Partners Section ======*/}
      {/*====== Start Farmers Section ======*/}
      {/*====== End Farmers Section ======*/}
      {/*====== Start Portfolio Section ======*/}
      {/*====== End Portfolio Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      
         
    </Layout>
  );
};
export default Index3;


export async function getServerSideProps() {
  const posts = blogPosts;
  return {
    props: {
      posts,
    },
  };
}