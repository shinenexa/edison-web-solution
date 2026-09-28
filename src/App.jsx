import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";

import Home  from "./Pages/Home/home";
import About from "./Pages/About/About";

import ScrollToTop from "./Components/ScrollToTop";

import ServicePage from "./Pages/Services/ServicePage";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"      element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:category/:serviceSlug" element={<ServicePage />} />
<Route path="/services/:serviceSlug" element={<ServicePage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
