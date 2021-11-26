import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from "./images/arrow-right1.svg";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  let app = useRef();
  let images = useRef();
  let content = useRef();
  let imagesList = gsap.utils.selector(images);
  let contentList = gsap.utils.selector(content);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });
    // images elements
    let girl = imagesList(".girl");
    let girlImage = imagesList(".girl img");
    let boy = imagesList(".boy");
    let boyImage = imagesList(".boy img");
    // content elements
    let firstHeadline = contentList(".hero-content-line-inner")[0];
    let secondHeadline = contentList(".hero-content-line-inner")[1];
    let thirdHeadline = contentList(".hero-content-line-inner")[2];
    let contentP = contentList("p");
    let contentButton = contentList(".btn-row");

    tl.from(
      girl,
      {
        y: 1200,
        ease: "power2",
        duration: 1,
      },
      0.2
    )
      .from(
        girlImage,
        {
          scale: 1.4,
          duration: 1,
        },
        0.2
      )
      .from(boy, { y: 1200, ease: "power2", duration: 1 }, 0.2)
      .from(
        boyImage,
        {
          scale: 1.4,
          duration: 1,
        },
        0.2
      )
      .from(
        [firstHeadline, secondHeadline, thirdHeadline],
        {
          y: 45,
          stagger: 0.2,
          duration: 0.5,
        },
        0.3
      )
      .from([contentP, contentButton], {
        opacity: 0,
        y: 45,
        stagger: 0.4,
        duration: 0.4,
      });
  }, [contentList, imagesList]);
  return (
    <div className="hero" ref={app}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={images}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
