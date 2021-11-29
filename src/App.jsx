import React from "react";
import "./App.scss";

import Slider from "./components/slider";
import Loader from "./components/loader";
import Image from "./components/imageReveal";
import Hero from "./components/hero";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Loader />
      <Slider />
      <Image />
      <Hero />
      <Footer />
    </>
  );
}
export default App;
