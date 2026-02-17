import React from "react";
import {
  FaArrowRight,
  FaClipboardCheck,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ConsultancyContractingPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[560px]">
        <img
          src="/public/consultant.jpg"
          alt="Consultancy & Contracting Services"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Our Services
            </p>

            <h1 className="max-w-3xl mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Consultancy & Contracting
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Technical consultancy and disciplined contracting services for
              mining, quarrying, and infrastructure projects — from planning
              through execution.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section data-aos="fade-up" className="bg-white py-28">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Service Overview
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-slate-900">
            Strategic Insight. Operational Control.
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            We support clients at every stage of the project lifecycle by
            combining technical consultancy with reliable contracting execution.
            Our approach focuses on safety, efficiency, cost control, and
            predictable outcomes across complex ground engineering projects.
          </p>
        </div>
      </section>

      {/* CONSULTANCY & CONTRACTING */}
      <section data-aos="fade-up" className="py-28 bg-blue-50">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            What We Offer
          </h2>

          <div className="grid gap-12 md:grid-cols-2">

            {/* CONSULTANCY */}
            <div className="flex flex-col p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaUserTie className="mb-6 text-3xl text-blue-600" />

              <h3 className="mb-4 text-xl font-semibold text-blue-700">
                Technical Consultancy
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Independent technical guidance to support planning, evaluation,
                and informed decision-making before and during project execution.
              </p>

              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                <li>• Feasibility studies & technical assessments</li>
                <li>• Drilling, blasting & crushing methodology planning</li>
                <li>• Equipment selection and productivity optimization</li>
                <li>• Risk analysis and safety strategy development</li>
              </ul>

              <Link to="/Contact" className="inline-flex items-center gap-2 mt-auto text-sm font-medium text-blue-600 transition hover:text-blue-700">
                Request Consultancy <FaArrowRight />
              </Link>
            </div>

            {/* CONTRACTING */}
            <div className="flex flex-col p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaClipboardCheck className="mb-6 text-3xl text-blue-600" />

              <h3 className="mb-4 text-xl font-semibold text-blue-700">
                Project Contracting
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                End-to-end contracting services delivered with disciplined site
                execution, supervision, and performance control.
              </p>

              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                <li>• On-site drilling and blasting operations</li>
                <li>• Crushing and material processing services</li>
                <li>• Site coordination and operational supervision</li>
                <li>• Schedule control and performance monitoring</li>
              </ul>
              <Link to="/Contact" className="inline-flex items-center gap-2 mt-auto text-sm font-medium text-blue-600 transition hover:text-blue-700">
                Discuss Contracting <FaArrowRight />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
     {/* APPLICATIONS */}
<section data-aos="fade-up" className="bg-white py-28">
  <div className="px-6 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
        Applications
      </p>
      <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
        Where Our Consultancy & Contracting Delivers Impact
      </h2>
    </div>

    {/* Application Cards */}
    <div className="grid gap-10 md:grid-cols-3">

      <div className="p-10 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Infrastructure Development
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Supporting roads, highways, and large-scale civil infrastructure
          projects through technical planning, execution oversight, and
          ground-engineering contracting services.
        </p>
      </div>

      <div className="p-10 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Mining & Quarry Operations
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Providing consultancy and contracting support for exploration,
          expansion, and operational improvement of mining and quarry sites.
        </p>
      </div>

      <div className="p-10 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Industrial & Specialized Projects
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Delivering disciplined execution and advisory support for industrial
          construction, material processing, and specialized ground works.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* CTA */}
      {/* CTA */}
<section data-aos="fade-up" className="relative text-white py-28 bg-slate-900">
  <div className="px-6 mx-auto max-w-7xl">

    <div className="max-w-4xl">
      <p className="mb-3 text-sm font-semibold tracking-wide text-blue-400 uppercase">
        Let’s Work Together
      </p>

      <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
        From Strategic Planning to On-Site Execution
      </h2>

      <p className="mb-10 leading-relaxed text-gray-300">
        Whether you require expert consultancy during the planning phase or a
        trusted contracting partner for execution, our team delivers technical
        clarity, operational control, and dependable outcomes across complex
        projects.
      </p>

      <div className="flex flex-col gap-5 sm:flex-row">
        <Link to="/Contact" className="px-10 py-3 text-sm font-medium transition bg-blue-600 rounded-full hover:bg-blue-700">
          Request Consultation
        </Link>

        <Link to="/About" className="px-10 py-3 text-sm font-medium transition border rounded-full border-white/40 hover:bg-white/10">
          Discuss Contracting Scope
        </Link>
      </div>
    </div>

  </div>
</section>
</main>
  );
};

export default ConsultancyContractingPage;
