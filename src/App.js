import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import CarouselContainer from "./Components/Carousel/CarouselContainer";
import SimpleSlider from "./Components/Carousel/Slider";


function App() {
  return (
    <div>
      <Hero />
      <About />
      <CarouselContainer />
      <SimpleSlider />
    </div>
  );
}

export default App;
