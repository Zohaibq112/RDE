import Hero from "../components/Hero";
import CompanySection from "../components/CompanySection";
import CompanySection2 from "../components/CompanySection2";
import DirectorMessage from "../components/DirectorMessage";
import DrillingProcess from "../components/DrillingProcess";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import PartnersMarquee from "../components/PartnersMarquee";
import ContactSection from "../components/ContactSection";
import ClientTestimonials from "../components/ClientTestimonials";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanySection2 />
      <CompanySection />
      <DirectorMessage />
      <DrillingProcess />
      <StatsSection/>
      <ServicesSection/>
      <PartnersMarquee />
      <ContactSection />
      <Gallery />
      <ClientTestimonials />     
    </>
  );
};

export default Home;
