import {
  GiRoad,
  GiDrill,
  GiFactory,
  GiAchievement,
} from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  return (
    <section data-aos="fade-up" className="bg-gradient-to-b from-[#f7f8fa] to-white border-t border-gray-200 py-14">
      <div className="px-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <Stat icon={<GiDrill />} value={12} label="Years of Industry Experience" suffix="+" />

          <Stat icon={<GiRoad />} value={500} label="Projects Successfully Completed" suffix="+" />

          <Stat icon={<GiFactory />} value={50} label="Active Sites & Operations" suffix="+" />

          <Stat icon={<GiAchievement />} value={100} label="Safety Compliance Rate" suffix="%" />

        </div>
      </div>
    </section>
  );
};

export default StatsSection;

/* 🔹 SINGLE STAT CARD */
const Stat = ({
  icon,
  value,
  label,
  suffix = "",
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1400;
          const increment = Math.ceil(value / (duration / 16));

          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="relative transition-all duration-300 border border-gray-200 shadow-sm group bg-white/70 backdrop-blur-lg rounded-2xl p-7 hover:shadow-xl hover:-translate-y-2"
    >
      {/* ICON */}
      <div className="absolute -top-6 left-6 bg-white border border-gray-200 rounded-xl p-3 text-[#0b3ea9] text-3xl shadow-md group-hover:scale-110 transition">
        {icon}
      </div>

      {/* CONTENT */}
      <div className="mt-6">
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0b3ea9] to-[#1e66ff] bg-clip-text text-transparent">
          {count.toLocaleString()}
          <span className="text-xl font-semibold md:text-2xl">{suffix}</span>
        </div>
        <p className="mt-2 text-sm leading-snug text-gray-600 md:text-base">
          {label}
        </p>
      </div>
    </div>
  );
};
