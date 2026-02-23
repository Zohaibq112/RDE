import React from "react";
import { FaArrowRight, FaSearchLocation, FaMountain, FaTools } from "react-icons/fa";
import StateSection from "./StatsSection";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import RDE from "../components/RDE.pdf";

const MiningQuarryingExplorationPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[560px]">
        <img
          src="/service14.jpeg"
          alt="Mining & Quarrying Exploration"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Our Services
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Mining & Quarrying Exploration
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Supporting mining and quarry development through accurate
              exploration, controlled excavation, and efficient material
              assessment for safe and sustainable operations.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section data-aos="fade-up" className="bg-white py-28">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Service Overview
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-slate-900">
            Reliable Ground Exploration for Mining & Quarry Projects
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            We provide professional mining and quarrying exploration services
            that help identify, assess, and prepare mineral and aggregate
            resources for extraction. Our approach combines technical expertise,
            field experience, and modern equipment to support informed
            decision-making before full-scale operations begin.
          </p>
          <a
      href={RDE}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 mt-10 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
    >
      Download Company Profile (PDF)
    </a>
        </div>
      </section>
      <StateSection />
      {/* KEY ACTIVITIES */}
      <section data-aos="fade-up" className="py-28 bg-blue-50">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            What We Deliver
          </h2>

          <div className="grid gap-10 md:grid-cols-3">

            <div className="p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaSearchLocation className="mb-6 text-3xl text-blue-600" />
              <h3 className="mb-4 text-lg font-semibold text-blue-700">
                Site Investigation & Assessment
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Detailed site evaluation to understand geological conditions,
                material distribution, and accessibility for mining or quarry
                development.
              </p>
            </div>

            <div className="p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaMountain className="mb-6 text-3xl text-blue-600" />
              <h3 className="mb-4 text-lg font-semibold text-blue-700">
                Resource Identification
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Identification of mineral and aggregate resources to support
                feasibility planning and efficient extraction strategies.
              </p>
            </div>

            <div className="p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaTools className="mb-6 text-3xl text-blue-600" />
              <h3 className="mb-4 text-lg font-semibold text-blue-700">
                Exploration Support Operations
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Field support including access preparation, test drilling
                assistance, and groundwork required for exploration activities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section data-aos="fade-up" className="bg-white py-28">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            Applications & Use Cases
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="p-8 border rounded-xl">
              <ul className="space-y-4 text-sm text-slate-600">
                <li>• New quarry site development</li>
                <li>• Expansion of existing mining operations</li>
                <li>• Aggregate and construction material assessment</li>
              </ul>
            </div>

            <div className="p-8 border rounded-xl">
              <ul className="space-y-4 text-sm text-slate-600">
                <li>• Infrastructure-linked mineral sourcing</li>
                <li>• Feasibility and planning support</li>
                <li>• Early-stage exploration projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY & APPROACH */}
      <section data-aos="fade-up" className="text-white py-28 bg-slate-900">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-10 text-3xl font-bold">
            Safety-Driven Exploration Approach
          </h2>

          <p className="max-w-3xl leading-relaxed text-gray-300">
            All exploration activities are conducted with a strong focus on
            safety, environmental responsibility, and operational control. Our
            teams follow disciplined procedures to minimize risk while ensuring
            reliable data collection and field execution.
          </p>
          <Link to="/contact" >
          <button  className="inline-flex items-center gap-3 px-8 py-3 text-sm font-medium transition bg-blue-600 rounded-full mt-14 hover:bg-blue-700">
            Discuss Your Project <FaArrowRight />
          </button>
          </Link>
        </div>
      </section>
      <Gallery />
    </main>
  );
};

export default MiningQuarryingExplorationPage;
