import React from "react";
import {
  FaWater,
  FaMountain,
  FaHardHat,
  FaTruckLoading,
  FaLayerGroup,
  FaCogs,
} from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const Dams: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/dam.jpg"
          alt="Dams Construction"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">

            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Infrastructure
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Dams Construction
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Specialized dam construction, excavation, and embankment
              works supporting water management and infrastructure
              development projects.
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
            Dam Excavation & Embankment Projects
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            ALNWASSY ROCK COMPANY has been involved in numerous dam
            excavation and embankment projects across the Aseer and
            Jeddah regions, working with various clients and
            construction companies. Our experience allows us to
            successfully deliver large-scale water infrastructure
            projects with precision and reliability.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our company has also contributed to the completion of
            multiple breakwaters for sea ports as well as slope
            protection works for many clients. These projects are
            executed through careful design, professional planning,
            and accurate implementation by our experienced
            engineering teams.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Using the latest topographical survey systems and modern
            construction equipment, we ensure accurate rock movement,
            efficient excavation, and continuous monitoring during
            project implementation. All operations are closely
            supervised by our main office to maintain efficient
            workflow and high construction standards.
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
            Our Dam Construction Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">

            {[
              {
                icon: <FaWater />,
                title: "Dam Construction",
                text:
                  "Development and construction of dams supporting water storage, flood control, and infrastructure development.",
              },
              {
                icon: <FaMountain />,
                title: "Dam Excavation",
                text:
                  "Large-scale excavation works for dam foundations ensuring stability and structural integrity.",
              },
              {
                icon: <FaLayerGroup />,
                title: "Embankment Development",
                text:
                  "Construction of engineered embankments designed to ensure long-term stability and water management efficiency.",
              },
              {
                icon: <FaTruckLoading />,
                title: "Breakwater Construction",
                text:
                  "Development of breakwaters for sea ports to protect coastal infrastructure from wave and erosion impacts.",
              },
              {
                icon: <FaHardHat />,
                title: "Slope Protection Works",
                text:
                  "Stabilization and protection of slopes surrounding dams and coastal infrastructure projects.",
              },
              {
                icon: <FaCogs />,
                title: "Survey & Monitoring",
                text:
                  "Use of modern topographical survey systems and monitoring methods to ensure accurate rock movement and construction precision.",
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

      {/* CTA / SAFETY */}
      <section
        data-aos="fade-up"
        className="relative text-white py-28 bg-slate-900"
      >
        <div className="px-6 mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
                Infrastructure Expertise
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Reliable Water Infrastructure <br /> Built on Experience
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                Our dam construction projects follow strict engineering
                standards and advanced construction methods to ensure
                safety, durability, and operational efficiency for
                water infrastructure developments.
              </p>

              <p className="leading-relaxed text-gray-300">
                Through modern equipment, professional teams, and
                accurate surveying systems, we ensure precise
                excavation and reliable construction results
                for large-scale projects.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Professional civil engineering teams</li>
                <li>• Accurate topographical survey systems</li>
                <li>• Modern excavation and construction equipment</li>
                <li>• Reliable dam and coastal infrastructure development</li>
              </ul>

            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">

              <h3 className="mb-4 text-2xl font-bold">
                Discuss Your Dam Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our engineering team to explore professional
                dam construction and water infrastructure solutions
                tailored to your project requirements.
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

export default Dams;