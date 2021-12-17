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
          <Route path="/banner" element={<Banner />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Sponsor" element={<Sponsor />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Promo" element={<Promo />} />
          <Route path="/catnip" element={<CatNip />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
