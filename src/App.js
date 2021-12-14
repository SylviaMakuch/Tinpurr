import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimontials";
import Sponsor from "./Components/Sponsor/Sponsor";
import Banner from "./Components/Banner/banner";
import Footer from "./Components/Footer/footer";
import Pricing from "./Components/Pricing/Pricing";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Banner />
      <Testimonials />
      <Sponsor />
      <Pricing />
      <Footer />
    </div>
  );
}
export default App;
