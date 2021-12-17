import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimontials";
import Sponsor from "./Components/Sponsor/Sponsor";
import Banner from "./Components/Banner/banner";
import Footer from "./Components/Footer/footer";
import Pricing from "./Components/Pricing/Pricing";
import Promo from "./Components/Promo/promo";
import NavBar from "./Components/NavBar/NavBar";
import CatNip from "./Components/Catnip/catnip";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Banner />
      <Testimonials />
      <Sponsor />
      <Pricing />
      <Promo />
      <CatNip />
      <Footer />
    </div>
  );
}
export default App;
