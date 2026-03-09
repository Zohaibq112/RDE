import React from "react";
import { FaWater, FaTools, FaProjectDiagram, FaIndustry, FaHardHat, FaCogs } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const WaterInfrastructure: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/Well.jpeg"
          alt="Well Water Pipe Line & Pump Station Construction"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">

            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Specialized Services
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Well Water Pipeline & Pump Station Construction
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Our specialized team of engineers and technicians constructs tube wells and larger-diameter wells, water pipelines, pump stations, and storage tanks using the latest equipment to provide reliable water infrastructure across the Kingdom.
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
            Reliable Water Infrastructure Solutions
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            We specialize in constructing wells, water pipelines, pump stations, and storage tanks with precision and efficiency. Our professional teams use advanced drilling equipment and modern techniques to deliver sustainable water solutions for communities and industrial projects across Saudi Arabia.
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
            Our Water Infrastructure Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaWater />,
                title: "Tube Well & Large-Diameter Wells",
                text: "Construction of reliable tube wells and larger-diameter wells to provide consistent water supply for residential, commercial, and industrial needs.",
              },
              {
                icon: <FaTools />,
                title: "Water Pipeline Projects",
                text: "Design and installation of water pipeline networks to transport water efficiently across project sites and communities.",
              },
              {
                icon: <FaProjectDiagram />,
                title: "Pump Station Construction",
                text: "Building pump stations equipped with modern pumps and control systems to maintain consistent water pressure and distribution.",
              },
              {
                icon: <FaIndustry />,
                title: "Water Storage Tanks",
                text: "Construction and installation of storage tanks to ensure safe and adequate water supply for various applications.",
              },
              {
                icon: <FaHardHat />,
                title: "Engineering & Technical Teams",
                text: "Our specialized engineers and technicians ensure precise implementation, monitoring, and quality control across all water infrastructure projects.",
              },
              {
                icon: <FaCogs />,
                title: "Reliable & Efficient Execution",
                text: "Projects executed with latest equipment, professional supervision, and adherence to safety and quality standards for smooth operations.",
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
                Water Projects <br /> with Expertise
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                All water infrastructure operations are performed with strict safety standards, modern equipment, and professional supervision to ensure efficiency and reliability.
              </p>

              <p className="leading-relaxed text-gray-300">
                Our experienced engineers and technicians monitor each project to deliver consistent, high-quality results in well construction, pipelines, pump stations, and storage facilities.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Tube wells and large-diameter wells construction</li>
                <li>• Water pipeline and pump station projects</li>
                <li>• Water storage tanks for reliable supply</li>
                <li>• Professional supervision and quality assurance</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Discuss Your Water Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our team to explore professional solutions for well construction, water pipelines, pump stations, and storage tanks tailored to your project requirements.
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

export default WaterInfrastructure;