import React from "react";
import { FaHardHat, FaMountain, FaCogs } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const PrecisionDrilling: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/Precision.jpeg"
          alt="Drilling & Blasting Services"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              The Company
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Drilling & Blasting Services
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Delivering safe and precise drilling and blasting operations
              for infrastructure, mining, quarry, and industrial projects
              using advanced equipment and experienced technical teams.
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
            Professional Drilling & Blasting Solutions
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Our drilling and blasting division provides specialized services
            for infrastructure, quarry, and mining projects. Using modern
            drilling equipment and carefully engineered blasting techniques,
            we ensure safe rock fragmentation, controlled excavation, and
            efficient site preparation for large-scale developments.
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

      {/* CORE CAPABILITIES */}
      <section data-aos="fade-up" className="py-28 ">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            Our Drilling & Blasting Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaMountain />,
                title: "Open Blasting Service",
                text:
                  "Professional open blasting operations for excavation, quarry development, and infrastructure projects using controlled blasting techniques.",
              },
              {
                icon: <FaHardHat />,
                title: "Controlled Blasting",
                text:
                  "Engineered blasting methods designed to reduce vibration and environmental impact while maintaining efficient rock fragmentation.",
              },
              {
                icon: <FaCogs />,
                title: "Underwater Blasting",
                text:
                  "Specialized underwater blasting solutions for dams, marine works, and water infrastructure requiring precise rock removal.",
              },
              {
                icon: <FaMountain />,
                title: "Trust Boring Blasting",
                text:
                  "Advanced boring and blasting operations used for tunnels, shafts, and deep rock excavation projects.",
              },
              {
                icon: <FaHardHat />,
                title: "Drilling for Grouting",
                text:
                  "Accurate drilling services for structural grouting applications to strengthen foundations and stabilize ground conditions.",
              },
              {
                icon: <FaCogs />,
                title: "Drilling for Anchor Bolt",
                text:
                  "Specialized drilling for anchor bolts used in tunnels, slopes, foundations, and heavy infrastructure stabilization.",
              },
              {
                icon: <FaMountain />,
                title: "Crusher Blasting",
                text:
                  "Efficient drilling and blasting services designed specifically for rock crushing operations and aggregate production.",
              },
              {
                icon: <FaHardHat />,
                title: "Training & Practicals",
                text:
                  "Professional training and practical programs for drilling and blasting operations to ensure safe and skilled field execution.",
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

      {/* SAFETY & CTA */}
      <section data-aos="fade-up" className="relative text-white py-28 bg-slate-900">
        <div className="px-6 mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
                Safety & Performance
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Built on Safety, <br /> Driven by Precision
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                Safety is the foundation of every drilling and blasting
                operation we perform. Our teams follow strict safety protocols,
                risk assessments, and monitoring systems to ensure secure
                working environments on every project site.
              </p>

              <p className="leading-relaxed text-gray-300">
                With skilled operators and advanced drilling equipment,
                we deliver reliable and controlled blasting operations for
                demanding infrastructure, quarry, and mining projects.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Strict blasting safety procedures</li>
                <li>• Certified drilling & blasting specialists</li>
                <li>• Continuous vibration monitoring</li>
                <li>• Reliable execution in complex environments</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Ready to Discuss Your Project?
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our team to explore safe, efficient, and professional
                drilling and blasting solutions tailored to your project
                requirements.
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

export default PrecisionDrilling;