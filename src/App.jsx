import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Customers from "./Pages/Customers";
import FAQ from "./Pages/FAQ";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Login from "./Pages/Login";
import PopularServices from "./Pages/PopularServices";
import WhatWeDo from "./Pages/WhatWeDo";
import WhyChooseUs from "./Pages/WhyChooseUs";
import AboutUs from "./ui/AboutUs";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
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
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
