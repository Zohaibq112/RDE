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
import Exploration from "./pages/Exploration.tsx";
import MiningQuarryPage from "./pages/MiningQuarryPage.tsx";
import Roads from "./components/Roads.tsx";
import Dams from "./components/Dams.tsx";
import Demolishing from "./components/Demolishing.tsx";
import Crusherspage from "./pages/Crusherspage.tsx";
import WaterInfrastructurePage from "./pages/WaterInfrastructurePage.tsx";

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
            <Route path="/services/SaltDecor" element={<SaltDecor />} />
             <Route path="/services/SaltEdible" element={<SaltEdiblePage1 />} />
            <Route path="/services/Drilling" element={<PrecisionDrilling />} />
             <Route path="/Drilling" element={<PrecisionDrilling />} />
            <Route path="/Consultant" element={<Consultant/>} />
            <Route path="/Gallery" element={<GalleryP/>} />
            <Route path="/Quality" element={<Quality/>} />
             <Route path="/services/Exploration" element={<Exploration />} />
             <Route path="/services/Mining" element={<MiningQuarryPage />} />
             <Route path="/services/roads" element={<Roads />} />
             <Route path="/services/dams" element={<Dams />} />
             <Route path="/services/Demolishing" element={<Demolishing />} />
             <Route path="/services/Crushers" element={<Crusherspage />} />
             <Route path="/services/water-infrastructure" element={<WaterInfrastructurePage />} />
            
      </Routes>
      <Footer />
    </>
  );
}

export default App;
