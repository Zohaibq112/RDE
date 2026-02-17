import React from "react";
import { FaHardHat, FaMountain, FaCogs } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const PrecisionDrillingPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/Precision.jpeg"
          alt="Precision Drilling & Crushing"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              The Company
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Precision Drilling & Crushing
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Powering infrastructure projects from the ground up through
              controlled drilling, blasting, and high-capacity crushing
              operations.
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
      Engineering Reliable Ground Solutions
    </h2>

    <p className="text-lg leading-relaxed text-slate-600">
      We specialize in rock drilling, controlled blasting, and
      high-capacity crushing operations for infrastructure, mining, and
      industrial projects. Our services ensure efficient material
      extraction and on-site crushing that keep projects on schedule and
      within budget.
    </p>

    {/* PDF LINK */}
    <a
      href="/public/RDE.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 mt-10 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
    >
      Download Company Profile (PDF)
    </a>
  </div>
</section>

 <StatsSection/>


      {/* CORE CAPABILITIES */}
      <section data-aos="fade-up" className="py-28 ">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            Our Core Capabilities
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaMountain />,
                title: "Rock Drilling",
                text:
                  "Precision drilling using modern equipment and experienced operators for accuracy, efficiency, and safety in all conditions.",
              },
              {
                icon: <FaHardHat />,
                title: "Controlled Blasting",
                text:
                  "Engineered blasting solutions designed to maximize output while minimizing vibration, environmental impact, and risk.",
              },
              {
                icon: <FaCogs />,
                title: "Crushing Operations",
                text:
                  "High-capacity on-site crushing that converts raw rock into construction-ready materials efficiently.",
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

      {/* INDUSTRIES SERVED */}
     {/* INDUSTRIES WE SUPPORT */}
<section data-aos="fade-up" className="bg-white py-28">
  <div className="px-6 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
        Industries We Support
      </p>
      <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
        Serving Critical Infrastructure & Industrial Sectors
      </h2>
    </div>

    {/* Industry Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="p-8 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-3 text-lg font-semibold text-blue-700">
          Infrastructure & Roads
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Supporting road, highway, and bridge construction projects with
          reliable drilling, blasting, and crushing operations.
        </p>
      </div>

      <div className="p-8 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-3 text-lg font-semibold text-blue-700">
          Quarry & Aggregate
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Enabling quarry development and expansion through efficient rock
          extraction and material processing solutions.
        </p>
      </div>

      <div className="p-8 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-3 text-lg font-semibold text-blue-700">
          Cement & Construction Materials
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Supplying raw material processing support for cement plants and
          construction material producers.
        </p>
      </div>

      <div className="p-8 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-3 text-lg font-semibold text-blue-700">
          Mining & Mineral Extraction
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Providing controlled drilling and blasting services for surface and
          sub-surface mining operations.
        </p>
      </div>

      <div className="p-8 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-3 text-lg font-semibold text-blue-700">
          Industrial & Energy Projects
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Supporting industrial infrastructure and energy-related developments
          with precision ground engineering services.
        </p>
      </div>

      <div className="p-8 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-3 text-lg font-semibold text-blue-700">
          Large-Scale Earthworks
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Delivering high-capacity drilling and crushing solutions for major
          earthworks and site development projects.
        </p>
      </div>

    </div>
  </div>
</section>

<PartnersMarquee/>

      {/* SAFETY & CTA */}
    
<section data-aos="fade-up" className="relative text-white py-28 bg-slate-900">
  <div className="px-6 mx-auto max-w-7xl">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT: SAFETY CONTENT */}
      <div>
        <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
          Safety & Performance
        </p>

        <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
          Built on Safety, <br /> Driven by Performance
        </h2>

        <p className="mb-6 leading-relaxed text-gray-300">
          Safety is at the core of every operation we perform. Our teams follow
          strict safety protocols, risk assessments, and operational controls to
          ensure secure working environments across all project sites.
        </p>

        <p className="leading-relaxed text-gray-300">
          Combined with experienced operators and modern machinery, this
          disciplined approach allows us to deliver consistent, high-quality
          results in demanding infrastructure, mining, and industrial projects.
        </p>

        {/* SAFETY POINTS */}
        <ul className="mt-8 space-y-3 text-sm text-gray-300">
          <li>• Strict site safety procedures & compliance</li>
          <li>• Trained and certified technical staff</li>
          <li>• Continuous monitoring and risk control</li>
          <li>• Reliable execution in challenging environments</li>
        </ul>
      </div>

      {/* RIGHT: CTA CARD */}
      <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
        <h3 className="mb-4 text-2xl font-bold">
          Ready to Discuss Your Project?
        </h3>

        <p className="mb-8 leading-relaxed text-slate-600">
          Speak with our engineering team to explore safe, efficient, and
          cost-effective drilling, blasting, and crushing solutions tailored to
          your project requirements.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link to="/Contact" className="px-8 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
            Request Consultation
          </Link>

          <Link to="/About" className="px-8 py-3 text-sm font-medium text-blue-600 transition border border-blue-600 rounded-full hover:bg-blue-50">
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

export default PrecisionDrillingPage;
