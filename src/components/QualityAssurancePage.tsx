import React from "react";
import { FaCheckCircle, FaClipboardList, FaShieldAlt } from "react-icons/fa";
import ContactSection from "./ContactSection";
import Gallery from "./Gallery";

const QualityAssurancePage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[520px]">
        <img
          src="/quality.png"
          alt="Quality Assurance"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Our Commitment
            </p>
            <h1 className="max-w-3xl mb-6 text-4xl font-bold md:text-5xl">
              Quality Assurance
            </h1>
            <p className="max-w-2xl text-lg text-gray-200">
              Ensuring consistency, safety, and performance across all drilling,
              quarrying, mining, and contracting operations.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
    {/* QUALITY PHILOSOPHY */}
<section data-aos="fade-up" className="bg-white py-28">
  <div className="px-6 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
        Quality Philosophy
      </p>

      <h2 className="mb-8 text-3xl font-bold md:text-4xl text-slate-900">
        Quality Is a Responsibility, Not a Checklist
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        Our approach to quality is built on responsibility, discipline, and
        accountability at every level of operation. We believe quality is not
        achieved through inspection alone, but through correct planning,
        controlled execution, and continuous oversight.
      </p>
    </div>

    {/* Philosophy Points */}
    <div className="grid gap-10 md:grid-cols-3">

      <div className="p-10 bg-blue-50 rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Built Into Every Process
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Quality is integrated into our workflows from project planning to
          final delivery. Every activity follows defined procedures designed
          to reduce variability and ensure consistency.
        </p>
      </div>

      <div className="p-10 bg-blue-50 rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Ownership at Every Level
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Each team member is responsible for maintaining quality within their
          scope of work. Clear accountability ensures that standards are
          understood, followed, and upheld on-site.
        </p>
      </div>

      <div className="p-10 bg-blue-50 rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Continuous Improvement
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          We continuously evaluate our performance, identify improvement
          opportunities, and refine our processes to enhance safety,
          efficiency, and overall project outcomes.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* QA PILLARS */}
      <section data-aos="fade-up" className="py-28 bg-blue-50">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-bold text-center text-blue-700">
            Our Quality Assurance Framework
          </h2>

          <div className="grid gap-10 md:grid-cols-3">

            <div className="p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaClipboardList className="mb-6 text-3xl text-blue-600" />
              <h3 className="mb-4 text-lg font-semibold text-blue-700">
                Standardized Procedures
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Clearly defined operating procedures guide drilling, blasting,
                crushing, and contracting activities to maintain consistency
                and control across all sites.
              </p>
            </div>

            <div className="p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaShieldAlt className="mb-6 text-3xl text-blue-600" />
              <h3 className="mb-4 text-lg font-semibold text-blue-700">
                Safety & Compliance
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Quality is inseparable from safety. Our teams follow strict
                safety protocols, inspections, and compliance checks to
                minimize risk and protect people and assets.
              </p>
            </div>

            <div className="p-10 transition bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaCheckCircle className="mb-6 text-3xl text-blue-600" />
              <h3 className="mb-4 text-lg font-semibold text-blue-700">
                Inspection & Monitoring
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Continuous inspection and performance monitoring ensure work
                meets technical requirements, project specifications, and
                client expectations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUALITY IN PRACTICE */}
      {/* QUALITY IN PRACTICE */}
<section data-aos="fade-up" className="bg-white py-28">
  <div className="px-6 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
        Quality in Practice
      </p>
      <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
        How We Apply Quality Across Every Project
      </h2>
    </div>

    {/* Process Grid */}
    <div className="grid gap-10 md:grid-cols-3">

      {/* Phase 1 */}
      <div className="p-10 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Pre-Execution Planning
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          Quality begins before work starts. We ensure that every project is
          properly planned, reviewed, and prepared to meet technical and safety
          expectations.
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Technical review and scope clarification</li>
          <li>• Equipment inspection and readiness checks</li>
          <li>• Site risk assessment and planning</li>
        </ul>
      </div>

      {/* Phase 2 */}
      <div className="p-10 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Controlled Execution
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          During operations, quality is maintained through disciplined
          execution, supervision, and continuous monitoring of activities.
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>• On-site supervision and process control</li>
          <li>• Monitoring drilling, blasting, and crushing activities</li>
          <li>• Adherence to defined procedures and safety controls</li>
        </ul>
      </div>

      {/* Phase 3 */}
      <div className="p-10 transition border rounded-xl hover:shadow-md">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Review & Verification
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          After execution, outcomes are reviewed to verify compliance,
          performance, and alignment with project requirements.
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Output and material quality verification</li>
          <li>• Identification of issues and corrective actions</li>
          <li>• Reporting and continuous improvement feedback</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      
      <ContactSection />
<Gallery/>
    </main>
  );
};

export default QualityAssurancePage;
