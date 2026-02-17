import React from "react";
import StatsSection from "./StatsSection";
import { Link } from "react-router-dom";

const AboutUsPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* ABOUT / COMPANY INTRO */}
      <section data-aos="fade-up" className="py-16 bg-white">
        <div className="grid items-center px-6 mx-auto gap-14 max-w-7xl lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/gallery6.jpeg"
              alt="Rock Drill Operations"
              className="w-full h-[520px] object-cover rounded-xl shadow-lg"
            />

            {/* EXPERIENCE BADGE */}
            <div className="absolute right-0 flex flex-col items-center justify-center w-40 h-40 shadow-xl top-8 bg-slate-900 rounded-xl">
              <span className="text-4xl font-bold text-blue-400">12+</span>
              <span className="mt-1 text-sm text-gray-300">
                Years Experience
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-blue-600 uppercase">
              About Our Company
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
              Rock Drill Engineers <br /> (Pvt.) Ltd.
            </h2>

            <p className="mb-4 leading-relaxed text-slate-600">
              Rock Drill Engineers (Pvt.) Ltd. was established in 2013 to provide
              specialized services in rock excavation, drilling, blasting, and
              earthworks. We operate across infrastructure, mining, and quarry
              projects using advanced methods and modern technology.
            </p>

            <p className="leading-relaxed text-slate-600">
              Our experienced engineers and technical teams deliver high-quality,
              safe, and efficient solutions while maintaining close coordination
              with clients to exceed project expectations.
            </p>
          </div>

        </div>
      </section>

      {/* OUR MISSION */}
      <section data-aos="fade-up" className="py-20 bg-slate-900">
        <div className="grid items-center max-w-6xl gap-12 px-6 mx-auto lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
              Our Mission
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-white">
              Delivering Safe, Reliable & Efficient Engineering Solutions
            </h2>

            <p className="mb-4 leading-relaxed text-gray-300">
              Our mission is to provide high-quality engineering services in
              rock drilling, blasting, crushing, and salt processing by
              integrating modern equipment, skilled professionals, and strict
              safety standards.
            </p>

            <p className="leading-relaxed text-gray-300">
              We are committed to completing projects on time, optimizing
              resources, and building long-term partnerships through integrity,
              performance, and continuous improvement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Safety First", text: "Zero compromise on safety standards." },
              { title: "On-Time Delivery", text: "Projects delivered as scheduled." },
              { title: "Modern Equipment", text: "Advanced machinery & tools." },
              { title: "Expert Team", text: "Skilled engineers & technicians." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border bg-white/10 rounded-xl border-white/10"
              >
                <h3 className="mb-1 text-xl font-bold text-blue-400">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR KEY SERVICES */}
      <section data-aos="fade-up" className="py-20 bg-blue-50">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-blue-700">
            Our Key Services
          </h2>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* ROCK DRILL */}
            <div className="overflow-hidden transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <img
                src="/company.png"
                alt="Rock Drill Engineering"
                className="object-cover w-full h-48"
              />
              <div className="p-8 text-left">
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                  Rock Drill Engineering
                </h3>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Precision drilling and controlled blasting services for
                  tunnels, roads, infrastructure, and mining projects.
                </p>
                <ul className="pl-5 mb-6 space-y-2 text-sm list-disc text-slate-600">
                  <li>Controlled rock blasting</li>
                  <li>Drilling & excavation</li>
                  <li>Mining assistance & support</li>
                  <li>Geotechnical drilling</li>
                </ul>

                <Link  className="px-6 py-3 text-sm font-medium text-blue-700 transition border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white" to="/Drilling">
                  Learn More
                </Link>
              </div>
            </div>

            {/* SALT */}
            <div className="overflow-hidden transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <img
                src="/salt-big.png"
                alt="RockDrill Salt Solutions"
                className="object-cover w-full h-48"
              />
              <div className="p-8 text-left">
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                  RockDrill Salt Solutions
                </h3>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Complete salt extraction, processing, and packaging services
                  with consistent quality and efficient logistics.
                </p>
                <ul className="pl-5 mb-6 space-y-2 text-sm list-disc text-slate-600">
                  <li>Salt resource assessment</li>
                  <li>Automated extraction workflows</li>
                  <li>Drying & processing</li>
                  <li>Packaging & supply</li>
                </ul>

                <Link to="/SaltDecor" className="px-6 py-3 text-sm font-medium text-blue-700 transition border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
                  Explore Products
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <StatsSection />

      {/* WHO WE ARE */}
      <section data-aos="fade-up"
        className="relative py-20 bg-center bg-cover"
        style={{ backgroundImage: "url('/salt-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative max-w-6xl px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-blue-700">
            Who We Are
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Vision",
                text:
                  "To create lasting value for stakeholders by following global best practices and maintaining high standards of quality and efficiency.",
              },
              {
                title: "Our Aim",
                text:
                  "To build long-term relationships with customers through transparency, reliability, and professional engineering solutions.",
              },
              {
                title: "Customer Requirement",
                text:
                  "Flexible quantities, technical specifications, and customized solutions delivered with consistency and reliability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white shadow-md rounded-xl"
              >
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

    </main>
  );
};

export default AboutUsPage;
