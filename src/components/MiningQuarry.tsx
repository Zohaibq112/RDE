import React from "react";
import { FaMountain, FaHardHat, FaCogs } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const MiningQuarry: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/mining.jpg"
          alt="Mining & Quarry Services"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              The Company
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Mining & Quarry Operations
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Providing efficient and reliable mining and quarry solutions
              including underground mining, surface mining, and aggregate
              production for infrastructure and industrial projects.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section data-aos="fade-up" className="bg-white py-28">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <p className="mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            What We Do
          </p>

          <h2 className="mb-10 text-3xl font-bold md:text-4xl text-slate-900">
            Modern Mining & Quarry Development
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Our mining and quarry division delivers reliable extraction and
            material processing solutions for infrastructure, construction,
            and industrial sectors. Through detailed site investigation,
            resource identification, and advanced mining techniques,
            we ensure safe and efficient production of valuable resources.
          </p>

          <a
            href="https://drive.google.com/file/d/1TdKUpNM9EJxxXJcFxP5NsgjF5S6vhxT3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 mt-10 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Download Company Profile (PDF)
          </a>
        </div>
      </section>

      <StatsSection />

      {/* CORE SERVICES */}
      <section data-aos="fade-up" className="py-28">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            Our Mining & Quarry Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaMountain />,
                title: "Underground Mining",
                text:
                  "Specialized underground mining operations designed for safe and efficient extraction of valuable minerals and materials from deep deposits.",
              },
              {
                icon: <FaHardHat />,
                title: "Surface Mining",
                text:
                  "Large-scale surface mining operations enabling efficient extraction of minerals and aggregates for construction and industrial projects.",
              },
              {
                icon: <FaCogs />,
                title: "Quarry Operations",
                text:
                  "Development and operation of quarries producing high-quality aggregates used in roads, infrastructure, and construction projects.",
              },
              {
                icon: <FaMountain />,
                title: "Site Investigation & Assessment",
                text:
                  "Detailed site evaluation to understand geological conditions, material distribution, and accessibility for mining or quarry development.",
              },
              {
                icon: <FaHardHat />,
                title: "Resource Identification",
                text:
                  "Identification and analysis of mineral and aggregate resources to support feasibility planning and efficient extraction strategies.",
              },
              {
                icon: <FaCogs />,
                title: "Exploration Support Operations",
                text:
                  "Field support including access preparation, test drilling assistance, and groundwork required for exploration and mining activities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-10 transition-all bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 text-3xl text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-lg font-semibold text-blue-700">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* SAFETY / CTA */}
      <section data-aos="fade-up" className="relative text-white py-28 bg-slate-900">
        <div className="px-6 mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
                Safety & Efficiency
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Reliable Mining <br /> Built on Experience
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                Our mining and quarry operations follow strict safety
                standards, modern extraction techniques, and efficient
                resource management practices to deliver reliable results
                for large-scale infrastructure and industrial projects.
              </p>

              <p className="leading-relaxed text-gray-300">
                With experienced technical teams and modern machinery,
                we ensure consistent production while maintaining
                environmental and operational safety standards.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Certified mining engineers & operators</li>
                <li>• Safe underground and surface operations</li>
                <li>• Efficient resource extraction techniques</li>
                <li>• Reliable supply for construction projects</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Discuss Your Mining Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our team to explore professional mining and quarry
                solutions tailored to your infrastructure or industrial
                development project.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/Contact"
                  className="px-8 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  Request Consultation
                </Link>

                <Link
                  to="/About"
                  className="px-8 py-3 text-sm font-medium text-blue-600 transition border border-blue-600 rounded-full hover:bg-blue-50"
                >
                  View Our Mission
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Gallery />

    </main>
  );
};

export default MiningQuarry;