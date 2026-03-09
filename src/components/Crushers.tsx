import React from "react";
import { FaIndustry, FaTruck, FaCogs, FaWarehouse, FaCube, FaTools } from "react-icons/fa";
import Gallery from "./Gallery";
import StatsSection from "./StatsSection";
import PartnersMarquee from "./PartnersMarquee";
import { Link } from "react-router-dom";

const Crushers: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[580px]">
        <img
          src="/gallery8.jpeg"
          alt="Crushers Services"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">

            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Specialized Services
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Crushing & Aggregate Supply
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Our company operates a fixed crusher in Jazan with a 250 ton/hour capacity, supplying a variety of crushed stone and riprap. We provide fixed and mobile crushers to ensure maximum productivity for mines, quarries, rock cutting, and civil projects.
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
            Efficient Crushing Solutions
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            We provide high-quality aggregate materials and crushed stone for construction and infrastructure projects. Our services guarantee strength, diversity, and smooth operations to ensure every project achieves optimal performance, regardless of size or requirements.
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
            Our Crushing & Supply Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <FaIndustry />,
                title: "Fixed Crusher Operations",
                text: "Operating a fixed crusher in Jazan with 250 ton/hour capacity to supply high-quality crushed stone for infrastructure projects.",
              },
              {
                icon: <FaTruck />,
                title: "Mobile Crushers",
                text: "Deployable mobile crushers to enhance productivity in mines, quarries, and rock cutting projects with flexibility.",
              },
              {
                icon: <FaCogs />,
                title: "Aggregate Supply",
                text: "Supplying various sizes of crushed stone and riprap to meet the requirements of construction and civil projects.",
              },
              {
                icon: <FaWarehouse />,
                title: "Quarry Support",
                text: "Providing complete crushing solutions to support quarry operations for both large and small-scale projects.",
              },
              {
                icon: <FaCube />,
                title: "Project Diversity",
                text: "Services tailored for any project size, ensuring smooth operations, high-strength materials, and optimal performance.",
              },
              {
                icon: <FaTools />,
                title: "Operational Efficiency",
                text: "Ensuring efficient movement and processing of materials to maintain productivity and project timelines.",
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
                Safety & Efficiency
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
                Crushing Projects <br /> with Precision
              </h2>

              <p className="mb-6 leading-relaxed text-gray-300">
                All crushing and aggregate supply operations are conducted with strict safety standards, modern equipment, and professional teams to ensure smooth and high-quality results.
              </p>

              <p className="leading-relaxed text-gray-300">
                Our team guarantees efficient production, minimal downtime, and reliable material supply for construction and civil engineering projects of all scales.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <li>• Fixed and mobile crushers for high productivity</li>
                <li>• Supply of different sizes of crushed stone and riprap</li>
                <li>• Support for civil and infrastructure projects</li>
                <li>• Efficient and smooth material handling</li>
              </ul>
            </div>

            <div className="p-10 bg-white shadow-xl text-slate-900 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                Discuss Your Crushing Project
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Contact our team to explore professional crushing and aggregate supply solutions tailored to your project’s requirements.
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

export default Crushers;