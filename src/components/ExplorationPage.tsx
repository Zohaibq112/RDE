import React from "react";
import { FaMountain, FaMap, FaWater } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const ExplorationPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/exploration.jpeg"
          alt="Exploration Services"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              The Company
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Exploration Services
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Delivering advanced geological exploration and survey solutions
              for mining, infrastructure, and environmental projects using
              modern technologies and expert technical teams.
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
            Professional Geological Exploration
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Our exploration services support mining, infrastructure, and
            environmental projects through comprehensive geological studies,
            advanced surveying techniques, and modern GIS analysis. We help
            clients understand ground conditions, identify resources, and
            plan projects with accurate technical data and environmental
            awareness.
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
            Our Exploration Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaMountain />,
                title: "Geotechnical & Geological Studies",
                text:
                  "Detailed geotechnical and geological investigations to understand ground composition, stability, and mineral potential for major infrastructure and mining projects.",
              },
              {
                icon: <FaMap />,
                title: "Topographical Survey",
                text:
                  "High-precision topographical surveys providing accurate mapping and terrain analysis for engineering, infrastructure planning, and site development.",
              },
              {
                icon: <FaWater />,
                title: "Ground Water Studies",
                text:
                  "Comprehensive groundwater analysis to assess water availability, flow patterns, and sustainable resource management for infrastructure and environmental projects.",
              },
              {
                icon: <FaMap />,
                title: "Remote Sensing & GIS Analysis",
                text:
                  "Advanced remote sensing and GIS technology used for mapping, spatial data analysis, and identifying geological and environmental patterns.",
              },
              {
                icon: <FaMountain />,
                title: "Environmental Studies",
                text:
                  "Environmental impact assessments and studies ensuring compliance with regulations while protecting ecosystems and natural resources.",
              },
              {
                icon: <FaMap />,
                title: "Technical Resource Studies",
                text:
                  "Technical analysis and evaluation of mineral and geological resources to support exploration planning and long-term development strategies.",
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
                Accuracy & Expertise
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Data-Driven Exploration <br /> for Confident Decisions
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                Our exploration work combines field expertise with advanced
                analytical technologies to deliver reliable geological and
                environmental data for infrastructure and mining developments.
              </p>

              <p className="leading-relaxed text-gray-300">
                With precise surveys, GIS analysis, and technical studies,
                we help clients plan projects with confidence and efficiency.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Advanced geological analysis</li>
                <li>• High-precision surveying technologies</li>
                <li>• Environmental compliance & monitoring</li>
                <li>• Reliable technical data for planning</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Start Your Exploration Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Speak with our team to discuss geological surveys, GIS
                analysis, and technical exploration services for your
                upcoming project.
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

export default ExplorationPage;