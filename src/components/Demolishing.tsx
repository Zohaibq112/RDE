import React from "react";
import { FaHammer, FaHardHat, FaBuilding, FaWarehouse, FaTools, FaRecycle } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const Demolishing: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/Demolishing.jpg"
          alt="Demolition Services"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">

            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Specialized Services
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Demolition & Site Clearing
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              We are experts in demolition with or without explosives and have completed numerous projects. We safely demolish buildings, civil structures, RCC structures, water tanks, interior structures, and more.
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
            Precision Demolition Services
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Our team provides professional demolition services using the latest techniques, equipment, and safety protocols. From controlled explosive demolitions to manual dismantling, we ensure projects are completed efficiently while maintaining safety for surrounding areas.
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
            Our Demolition Expertise
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaHammer />,
                title: "Explosive Demolition",
                text: "Controlled demolition using explosives for buildings, tunnels, and heavy structures with utmost safety and precision.",
              },
              {
                icon: <FaHardHat />,
                title: "Civil & RCC Structures",
                text: "Demolition of civil and reinforced concrete structures, ensuring safe dismantling and minimal disruption.",
              },
              {
                icon: <FaBuilding />,
                title: "Interior Structures",
                text: "Removing interior partitions, water tanks, and non-structural components efficiently while protecting the surrounding environment.",
              },
              {
                icon: <FaWarehouse />,
                title: "Industrial & Large Structures",
                text: "Demolition of warehouses, factories, and large-scale industrial facilities with modern machinery and professional oversight.",
              },
              {
                icon: <FaTools />,
                title: "Site Clearing",
                text: "Complete clearing of demolished areas, including debris removal and grading for future construction or landscaping.",
              },
              {
                icon: <FaRecycle />,
                title: "Waste Management & Recycling",
                text: "Environmentally responsible handling of demolition debris including sorting, recycling, and proper disposal.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-10 transition-all bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 text-3xl text-blue-600">{item.icon}</div>

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
                Safety & Performance
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Safe Demolition <br /> Driven by Experience
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                All demolition projects are conducted with strict adherence to safety protocols and risk assessments to protect workers, nearby structures, and the environment.
              </p>

              <p className="leading-relaxed text-gray-300">
                Our skilled team and modern equipment ensure precision, efficiency, and timely completion for projects of all sizes.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Certified demolition experts & engineers</li>
                <li>• Controlled explosive and manual demolitions</li>
                <li>• Efficient debris management and site clearing</li>
                <li>• Minimal impact on surrounding structures</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Discuss Your Demolition Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our team to explore professional demolition services tailored to your project requirements, from small interior jobs to large industrial structures.
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

export default Demolishing;