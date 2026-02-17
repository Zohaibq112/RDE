import { Link } from "react-router-dom";

 const CompanySection = () => {
  return (
    <section data-aos="fade-up" className="px-4 py-16 mx-auto max-w-7xl md:px-10">
      <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        
        {/* 🔹 LEFT: BIG IMAGE */}
        <div>
          <img
            src="/salt-big.png"
            alt="Himalayan Salt"
            className="w-full h-[450px] object-cover rounded-md"
          />
        </div>

        {/* 🔹 RIGHT: CONTENT */}
        <div>
          <span className="inline-block px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded">
            THE COMPANY
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900">
            Authentic Himalayan Pink Salt
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
           Mined, Manufactured & Supplied Worldwide

              We are a leading manufacturer and exporter of Himalayan Pink Rock Salt products, sourced directly from the foothills of the Himalayan Mountains in Pakistan. From decorative salt lamps to edible and wellness salt products, we deliver chemical-free, handmade, and premium-quality salt solutions trusted in over 60+ countries worldwide.

              Our commitment to purity, craftsmanship, and reliability makes us a preferred global supplier of authentic Himalayan salt products. 
          </p>

          <Link to="/SaltEdible" className="inline-flex items-center gap-3 px-8 py-3 mt-8 text-sm font-semibold tracking-wider text-white uppercase transition bg-blue-600 hover:bg-blue-700">
            ABOUT HIMALAYAN SALT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
