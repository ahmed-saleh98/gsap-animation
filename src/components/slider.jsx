import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg";
import image1 from "../images/image.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: image3,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: image1,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: image2,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

function Slider() {
  let imagesRef = useRef();
  let testimonialsRef = useRef();
  let imagesList = gsap.utils.selector(imagesRef);
  let testimonialsList = gsap.utils.selector(testimonialsRef);
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const sideFade = (element, range) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      x: range,
      ease: "elastic.out(.8, 0.5)",
      duration: 1,
    });
  };

  useEffect(() => {
    sideFade(".t-image", -300);
    sideFade(".t-content", 300);
  }, []);

  const slideLeft = (index, duration, multiplayed = 1) => {
    gsap.to(imagesList("li")[index], {
      x: -340 * multiplayed,
      duration: duration,
    });
  };
  const slideRight = (index, duration, multiplayed = 1) => {
    gsap.to(imagesList("li")[index], {
      x: 340 * multiplayed,
      duration: duration,
    });
  };

  const scale = (index, duration) => {
    gsap.from(imagesList("li")[index], { scale: 1.2, duration: duration });
  };
  const fadeOut = (index, duration) => {
    gsap.to(testimonialsList("li")[index], {
      opacity: 0,
      duration: duration,
    });
  };
  const fadeIn = (index, duration) => {
    gsap.to(testimonialsList("li")[index], {
      opacity: 1,
      delay: 0.8,
      duration: duration,
    });
  };
  const nextSlider = () => {
    if (imagesList("li")[0].classList.contains("active1")) {
      setState({ isActive1: false, isActive2: true });
      slideLeft(0, 0.8);
      slideLeft(1, 0.8);
      slideLeft(2, 0);
      scale(1, 0.8);
      fadeOut(0, 0.8);
      fadeIn(1, 0.8);
    } else if (imagesList("li")[1].classList.contains("active2")) {
      setState({ isActive2: false, isActive3: true });
      slideRight(0, 0, 1);
      slideLeft(1, 0.8, 2);
      slideLeft(2, 0.8, 2);
      scale(2, 0.8);
      fadeOut(0, 0);
      fadeOut(1, 0.8);
      fadeIn(2, 0.8);
    } else {
      setState({ isActive3: false, isActive1: true });
      slideRight(1, 0, 0);
      slideRight(0, 0.8, 0);
      scale(0, 0.8);
      slideLeft(2, 0.8, 3);
      fadeOut(2, 0.8);
      fadeIn(0, 0.8);
    }
  };
  const prevSlider = () => {
    if (imagesList("li")[0].classList.contains("active1")) {
      setState({ isActive1: false, isActive3: true });
      slideLeft(2, 0, 3);
      slideLeft(2, 0.8, 2);
      slideLeft(1, 0, 2);
      scale(2, 0.8);
      slideRight(0, 0.8);
      fadeOut(0, 0.8);
      fadeIn(2, 0.8);
    } else if (imagesList("li")[1].classList.contains("active2")) {
      setState({ isActive2: false, isActive1: true });

      slideRight(0, 0.8, 0);
      slideRight(1, 0.8, 0);
      slideLeft(2, 0, 3);
      scale(0, 0.8);
      fadeOut(1, 0.8);
      fadeIn(0, 0.8);
    } else {
      setState({ isActive3: false, isActive2: true });
      slideLeft(2, 0.8, 1);
      slideLeft(1, 0.8, 1);
      slideLeft(0, 0, 1);
      scale(1, 0.8);
      fadeOut(2, 0.8);
      fadeOut(0, 0.1);
      fadeIn(1, 0.8);
    }
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div onClick={prevSlider} className="arrows left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={imagesRef}>
              {testimonials.map((testimonial, index) => (
                <li
                  key={index}
                  className={
                    state.isActive1
                      ? "active1"
                      : state.isActive2
                      ? "active2"
                      : state.isActive3
                      ? "active3"
                      : ""
                  }
                >
                  <img src={testimonial.image} alt={testimonial.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className="t-content">
            <ul ref={testimonialsRef}>
              {testimonials.map((testimonial, index) => (
                <li
                  key={index}
                  className={
                    state.isActive1
                      ? "active1"
                      : state.isActive2
                      ? "active2"
                      : state.isActive3
                      ? "active3"
                      : ""
                  }
                >
                  <div className="content-inner">
                    <p className="quote">{testimonial.quote}</p>
                    <h3 className="name">{testimonial.name}</h3>
                    <h4 className="title">{testimonial.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div onClick={nextSlider} className="arrows right">
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
