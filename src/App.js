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
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Banner />
          <Testimonials />
          <Sponsor />
          <Route path="/pricing" element={<Pricing />} />
          <Promo />
          <Route path="/catNip" element={<CatNip />} />
          <Footer path="/footer"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
