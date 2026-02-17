import {Link} from "react-router-dom";
import { FaClipboardList, FaCogs, FaChartLine, FaArrowRight } from "react-icons/fa";

const DrillingProcess = () => {
  return (
    <section data-aos="fade-up" className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">

        {/* Small Heading */}
        <p className="mb-2 text-sm font-medium text-blue-600">
          How We Work
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-blue-700 md:text-4xl">
          Our Drilling Process
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-4 text-gray-500">
          Three proven steps to deliver precision drilling with safety and efficiency
        </p>

        {/* Process Steps */}
        <div className="relative grid items-start grid-cols-1 gap-16 mt-16 md:grid-cols-3">

          {/* Connector Line + Arrows (Desktop only) */}
          <div className="hidden md:block absolute top-[70px] left-1/6 right-1/6 h-[2px] bg-blue-200"></div>
          <div className="hidden md:flex absolute top-[60px] left-[30%] right-[30%] justify-between text-blue-400 text-xl">
            <span>→</span>
            <span>→</span>
          </div>

          <Step
            icon={<FaClipboardList />}
            step="01"
            title="Mining & Construction"
            description="Survey and analyze drilling location, geological conditions, and safety parameters."
          />

          <Step
            icon={<FaCogs />}
            step="02"
            title="Strategic Partnerships"
            description="Deploy heavy machinery, establish rig infrastructure, and verify operational readiness."
          />
  
          <Step
            icon={<FaChartLine />}
            step="03"
            title="Better Analytics"
            description="Execute precision drilling operation with continuous monitoring and quality control."
          />
        </div>

        {/* Button */}
        <Link to="/Contact" className="inline-flex items-center gap-2 px-8 py-3 font-medium text-white transition bg-blue-600 rounded-full mt-14 hover:bg-blue-700">
          Start Your Project <FaArrowRight />
        </Link>

      </div>
    </section>
  );
};

export default DrillingProcess;

/* 🔹 SINGLE STEP COMPONENT */
const Step = ({
  icon,
  step,
  title,
  description,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* DOUBLE LIGHT RING + CORE */}
      <div className="relative">
        
        {/* OUTER VERY LIGHT */}
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-50">
          
          {/* INNER LIGHT */}
          <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full">
            
            {/* CORE */}
            <div className="flex items-center justify-center w-16 h-16 text-xl text-white bg-blue-600 rounded-full">
              {icon}
            </div>

          </div>
        </div>

        {/* STEP NUMBER */}
        <span className="absolute flex items-center justify-center text-xs font-semibold text-blue-600 bg-white border border-blue-500 rounded-full bottom-3 right-3 w-7 h-7">
          {step}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="max-w-xs mt-3 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
};
