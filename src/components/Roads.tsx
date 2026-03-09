import React from "react";
import {
  FaRoad,
  FaMountain,
  FaWater,
  FaTruckLoading,
  FaLayerGroup,
  FaCity,
} from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const Roads: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/roads.jpg"
          alt="Road Infrastructure"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Infrastructure
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Road Infrastructure Development
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Delivering modern road infrastructure including tunnels,
              excavation, embankments, and slope protection using
              advanced engineering and controlled blasting techniques.
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
            Advanced Civil Infrastructure Solutions
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Our road infrastructure division provides comprehensive
            civil engineering services including roads, tunnels,
            excavation, and embankment construction. Through years
            of experience in blasting and earthworks, our teams
            execute projects with precision while maintaining strict
            safety standards and monitoring blasting vibration to
            protect surrounding environments.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Using modern machinery and advanced topographical survey
            systems, we perform accurate volumetric calculations and
            site verification before and during project execution.
            Our expertise enables us to successfully implement
            infrastructure projects such as roads, dams, wells,
            sanitation systems, and community developments across
            Saudi Arabia.
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
            Our Road Infrastructure Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaRoad />,
                title: "Road Construction",
                text:
                  "Construction of modern road networks including grading, rock cutting, and surface preparation using advanced engineering techniques.",
              },
              {
                icon: <FaMountain />,
                title: "Tunnel Development",
                text:
                  "Excavation and controlled blasting for tunnels using professional techniques designed to ensure safety and structural stability.",
              },
              {
                icon: <FaWater />,
                title: "Riprap & Slope Protection",
                text:
                  "Slope stabilization and riprap installation to protect infrastructure from erosion and geological movement.",
              },
              {
                icon: <FaTruckLoading />,
                title: "Excavation Works",
                text:
                  "Large-scale excavation and earthworks including demolition, rock removal, and site preparation for infrastructure projects.",
              },
              {
                icon: <FaLayerGroup />,
                title: "Embankment Construction",
                text:
                  "Development of engineered embankments and slopes using modern grading and compaction techniques.",
              },
              {
                icon: <FaCity />,
                title: "Parks & Community Infrastructure",
                text:
                  "Excavation and groundwork for parks, towns, and residential communities including home excavation with or without blasting.",
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
      <section
        data-aos="fade-up"
        className="relative text-white py-28 bg-slate-900"
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
                Engineering Excellence
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Reliable Infrastructure <br /> Built on Experience
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                Our teams bring extensive experience in infrastructure
                construction including roads, tunnels, and excavation
                works. Every project is executed with strict safety
                monitoring and advanced blasting methods to ensure
                smooth operations and minimal environmental impact.
              </p>

              <p className="leading-relaxed text-gray-300">
                With modern machinery, accurate survey systems,
                and highly skilled engineers, we deliver durable
                infrastructure solutions that support long-term
                development.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Professional excavation & blasting teams</li>
                <li>• Modern construction machinery</li>
                <li>• Accurate topographical surveying</li>
                <li>• Safe infrastructure development</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Discuss Your Infrastructure Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our engineers to explore professional road
                infrastructure solutions tailored to your development
                and construction projects.
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

export default Roads;