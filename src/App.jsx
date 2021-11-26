import React from "react";
import "./App.scss";

import Slider from "./slider";
import Loader from "./loader";
import Image from "./imageReveal";
import Hero from "./hero";
function App() {
  return (
    <>
      <Loader />
      <Slider />
      <Image />
      <Hero />
    </>
  );
}
export default App;
