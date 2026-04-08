import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BCIModal from "./components/BCIModal";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Expertise from "./pages/Expertise";
import DPDPNavigator from "./pages/DPDPNavigator";
import People from "./pages/People";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <BCIModal />
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expertise/:id" element={<Expertise />} />
          <Route path="/dpdp-navigator" element={<DPDPNavigator />} />
          <Route path="/people" element={<People />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
