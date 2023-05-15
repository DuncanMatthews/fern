import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    dots: false,
    autoplay: true,
    speed: 200,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };
  const slider = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rooms-container">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <Slider
          {...thumbs}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
          className=""
        >
          <div className="testimonial-item-1">
         
  <div className="_p03egf" aria-hidden="true">
    <div className="item-wrap">
    <span className="_nvr5q">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
        <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
      </svg>
    </span>
  </div>
  <div className="_1auxwog"><span>Bedroom 1</span></div>
  <div className="_1a5glfg">2 king bed</div>
  </div>
          </div>
          <div className="testimonial-item-1">
         
         <div className="_p03egf" aria-hidden="true">
         <div className="item-wrap">
           <span className="_nvr5q">
          
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
         <div className="_1auxwog">Bedroom 2</div>
         <div className="_1a5glfg">1 king bed</div>
       </div>
          </div>
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
          <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
         <div className="_1auxwog">Bedroom 3</div>
         <div className="_1a5glfg">1 king, 1 single</div>
         </div>
          </div>
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
          <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
        
         <div className="_1auxwog">Bedroom 4</div>
         <div className="_1a5glfg">1 king, 1 single</div>
         </div>
          </div>
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
          <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
         <div className="_1auxwog">Bedroom 5</div>
         <div className="_1a5glfg">1 king, 1 single</div>
          </div>
          </div>
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
            <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
         <div className="_1auxwog">Bedroom 6</div>
         <div className="_1a5glfg">1 Double Bed</div>
         </div>
         </div>
       
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
          <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
         <div className="_1auxwog">Bedroom 7</div>
         <div className="_1a5glfg">2 Double Bed</div>
          </div>
          </div>
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
            <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
       
         </div>
         <div className="_1auxwog">Bedroom 8</div>
         <div className="_1a5glfg">2 Queen Bed</div>
          </div>
          </div>
          <div className="testimonial-item-1">
          <div className="_p03egf" aria-hidden="true">
          <div className="item-wrap">
           <span className="_nvr5q">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentcolor" }}>
               <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
             </svg>
           </span>
         </div>
         <div className="_1auxwog">Bedroom 7</div>
         <div className="_1a5glfg">1 Double Bed</div>
         </div>
          </div>
        </Slider>
      </div>
      <div className="col-lg-9">
        <Slider
          {...slider}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          className="testimonial-slider-four wow fadeInDown"
        >
          
          
        </Slider>
      </div>
    </div>
    </div>
  );
};
export default TestimonialSlider;
