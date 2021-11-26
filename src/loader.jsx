import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Loader() {
  let el = useRef();
  let q = gsap.utils.selector(el);

  useEffect(() => {
    // TweenMax.to(app, 0, { css: { visibility: "visible" } });
    // // TweenMax.from(circleYellow, 0.8, {
    // //   opacity: 0,
    // //   x: 50,
    // //   ease: Power3.easeOut,
    // // });
    // // TweenMax.from(
    // //   circleRed,
    // //   0.8,
    // //   { opacity: 0, x: 50, ease: Power3.easeOut },
    // //   0.2
    // // );
    // // TweenMax.from(
    // //   circleBlue,
    // //   0.8,
    // //   { opacity: 0, x: 50, ease: Power3.easeOut },
    // //   0.4
    // // );
    // TweenMax.staggerFrom(
    //   [circleYellow, circleRed, circleBlue],
    //   0.8,
    //   { opacity: 0, x: 40 },
    //   0.2
    // );
    gsap.from(q(".circle"), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      repeat: -1,
      repeatDelay: 0.1,
      yoyo: true,
      duration: 0.3,
    });
  });
  return (
    <div ref={el} className="App">
      <header className="App-header">
        <div className="circle-containeer">
          <div className="circle yellow"></div>
          <div className="circle red"></div>
          <div className="circle blue"></div>
          <div className="circle green"></div>
        </div>
      </header>
    </div>
  );
}

export default Loader;
