import React, { useRef, useEffect } from "react";
import peopleImg from "./images/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin, CSSRulePlugin, ScrollTrigger);

function Image() {
  let container = useRef();
  let image = useRef();
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-container",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });
    tl.to(container.current, {
      visibility: "visible",
      duration: 0,
    })
      .to(imageReveal, { width: "0%", duration: 1.5 })
      .from(image, {
        scale: 1.5,
        delay: -1.5,
        duration: 1.5,
      });
  });

  return (
    <div className="main">
      <div ref={container} className="container">
        <div className="img-container">
          <img
            ref={(el) => (image = el)}
            src={peopleImg}
            alt=" by Mpumelelo Macu on Unsplash"
          />
        </div>
      </div>
    </div>
  );
}
export default Image;
