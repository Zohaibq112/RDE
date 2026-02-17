import { Link } from "react-router-dom";
const CompanySection2 = () => {
  return (
    <section data-aos="fade-up" className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="mt-16 ml-4 ">
            {/* Label */}
            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-blue-600">
              The Company
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
             Precision Drilling & Crushing
            </h2>

            {/* Description */}
            <p className="max-w-xl mt-6 text-base leading-relaxed text-gray-600">
              Powering Infrastructure from the Ground Up

We specialize in rock drilling, controlled blasting, and high-capacity crushing operations for infrastructure, mining, and industrial projects. With modern equipment, skilled operators, and strict safety standards, we deliver efficient material extraction and on-site crushing solutions that keep projects on schedule and within budget.

Our operations support road construction, quarry development, cement plants, and large-scale earthworks with reliable performance and proven expertise.
            </p>

            {/* Button */}
            <Link to="/Drilling" className="inline-flex items-center gap-3 px-8 py-3 mt-8 text-sm font-semibold tracking-wider text-white uppercase transition bg-blue-600 hover:bg-blue-700">
              About Drilling & Crushing
              <span className="text-lg">›</span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/Company.png"
              alt="Construction machinery"
              className="w-full mr-4 rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection2;
