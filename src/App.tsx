import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import * as AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import SaltDecor from "./pages/SaltDecor";
import SaltEdiblePage1 from "./pages/SaltEdiblePage1";
import PrecisionDrilling from "./pages/PrecisionDrilling";
import Consultant from "./pages/Consultant";
import GalleryP from "./pages/GalleryP";
import Quality from "./pages/Quality";
import WhatsAppFloat from "./components/WhatsAppFloat.tsx"
import Mining from "./pages/Mining";

function App() {
  AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 120,
});
  return (
    <>
      <Header />
      <WhatsAppFloat />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/SaltDecor" element={<SaltDecor />} />
             <Route path="/SaltEdible" element={<SaltEdiblePage1 />} />
            <Route path="/Drilling" element={<PrecisionDrilling />} />
            <Route path="/Consultant" element={<Consultant/>} />
            <Route path="/Gallery" element={<GalleryP/>} />
            <Route path="/Quality" element={<Quality/>} />
             <Route path="/Mining" element={<Mining/>} />
            
      </Routes>
      <Footer />
    </>
  );
}

export default App;
