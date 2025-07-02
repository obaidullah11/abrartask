import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Customers from "./Pages/Customers";
import FAQ from "./Pages/FAQ";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import PopularServices from "./Pages/PopularServices";
import WhatWeDo from "./Pages/WhatWeDo";
import WhyChooseUs from "./Pages/WhyChooseUs";

function App() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <PopularServices />
      <WhyChooseUs />
      <Customers />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
