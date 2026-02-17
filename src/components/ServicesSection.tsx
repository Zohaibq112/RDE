import { Link } from "react-router-dom";
const ServicesSection = () => {
  return (
    <section data-aos="fade-up" className="py-20 mx-8 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">

        <h2 className="text-2xl font-bold text-blue-700 uppercase md:text-3xl">
          Services
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-sm leading-relaxed text-gray-500">
          Objectively whiteboard transparent models for prospective
          information. Authoritatively myocardinate.
        </p>

        <div className="grid grid-cols-1 gap-12 mt-16 text-left md:grid-cols-3">

          <ServiceCard
            image="/service1.png"
            title="Mining & Quarrying Exploration"
            description="Energistically productize wireless mindshare for emerging experiences."
            link="/Mining"
          />

          <ServiceCard
            image="/service2.png"
            title="Consultancy & Contracting"
            description="Professionally drive clicks-and-mortar web readiness."
            link="/Quality"
          />

          <ServiceCard
            image="/service3.png"
            title="Himalayan Stone Products"
            description="Globally incubate principle-centered e-markets."
            link="/SaltEdible"
          />

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
const ServiceCard = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div>
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="object-cover w-full transition-transform duration-500 ease-out h-52 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/20 group-hover:opacity-100" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-blue-700">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        {description}
      </p>

      {/* ✅ REAL NAVIGATION BUTTON */}
      <Link
        to={link}
        className="inline-block px-6 py-2 mt-6 text-xs text-white transition bg-blue-700 rounded-sm hover:bg-blue-800"
      >
        READ MORE
      </Link>
    </div>
  );
};
