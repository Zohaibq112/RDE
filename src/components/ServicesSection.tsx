import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    { image: "/exploration.jpeg", title: "Exploration", link: "/services/Exploration" },
    { image: "/mining.jpg", title: "Mining & Quarry", link: "/services/Mining" },
    { image: "/drilling.jpeg", title: "Drilling and Blasting Services", link: "/services/Drilling" },
    { image: "/roads.jpg", title: "Road & Infrastructure", link: "/services/roads" },
    { image: "/dasm.jpg", title: "Dams Construction", link: "/services/dams" },
    { image: "/Demolishing.jpg", title: "Demolishing", link: "/services/Demolishing" },
    { image: "/gallery8.jpeg", title: "Crushers", link: "/services/crushers" },
    { image: "/service3.png", title: "Himalayan Stone Products", link: "/services/SaltDecor" },
    { image: "/Well.jpeg", title: "Well Water Pipe Line & Pump Station Construction", link: "/services/water-infrastructure" },
  ];

  return (
    <section data-aos="fade-up" className="py-20 mx-8 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-2xl font-bold text-blue-700 uppercase md:text-3xl">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-16 text-left md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

interface ServiceCardProps {
  image: string;
  title: string;
  link: string;
}

const ServiceCard = ({ image, title, link }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="flex flex-col overflow-hidden shadow-sm rounded-2xl group hover:shadow-md"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full transition-transform duration-500 ease-out h-60 rounded-2xl group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-center text-black">
        {title}
      </h3>
    </Link>
  );
};