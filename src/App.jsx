import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Customers from "./Pages/Customers";
import FAQ from "./Components/FAQ";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import PopularServices from "./Pages/PopularServices";
import WhatWeDo from "./Pages/WhatWeDo";
import WhyChooseUs from "./Pages/WhyChooseUs";
import AboutUs from "./ui/AboutUs";
import AutomotiveService from "./ui/AutomotiveService";
import ResedentialLockSmith from "./ui/ResedentialLockSmith";
import CommercialLockSmith from "./ui/CommercialLockSmith";
import EmergencyLockSmith from "./ui/EmergencyLockSmith";
import ServiceArea from "./Pages/ServiceArea";
import FaqPage from "./Pages/FaqPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/automotive" element={<AutomotiveService />} />

        <Route path="/residential" element={<ResedentialLockSmith />} />
        <Route path="/commercial" element={<CommercialLockSmith />} />
        <Route path="/emergency" element={<EmergencyLockSmith />} />
        <Route path="/serviceArea" element={<ServiceArea />} />
        <Route path="/faq" element={<FaqPage/>} />

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WhatWeDo />
              <PopularServices />
              <WhyChooseUs />
              <Customers className="bg-gray-50" />
              <FAQ />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
