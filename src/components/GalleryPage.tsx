import React, { useState } from "react";
import ContactSection from "./ContactSection";

type Category =
  | "All"
  | "Operations"
  | "Machinery"
  | "Management & Recognition";

const galleryItems = [
  {
    src: "/gallery1.jpeg",
    title: "On-site Drilling Operations",
    category: "Operations",
  },
  {
    src: "/gallery2.jpeg",
    title: "Heavy Drilling Equipment",
    category: "Machinery",
  },
  {
    src: "/gallery7.jpeg",
    title: "Client Site Visit",
    category: "Client Engagement",
  },
  {
    src: "/gallery4.jpeg",
    title: "Certificate Receiving Ceremony",
    category: "Management & Recognition",
  },
  {
    src: "/gallery8.jpeg",
    title: "Quarry Development Work",
    category: "Operations",
  },
  {
    src: "/management.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/management1.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/management2.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/management3.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/gallery10.jpeg",
    title: "Quarry Development Work",
    category: "Operations",
  },
  {
    src: "/management4.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/service11.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/gallery11.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/service12.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/service13.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
  {
    src: "/service14.jpeg",
    title: "Crushing Plant in Operation",
    category: "Machinery",
  },
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[420px]">
        <img
          src="/gallery6.jpeg"
          alt="Project Gallery"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-300 uppercase">
              Our Work & People
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Project Gallery
            </h1>
            <p className="max-w-2xl text-lg text-gray-200">
              A visual record of our operations, people, leadership, and client
              relationships across projects.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section data-aos="fade-up" className="py-12 bg-white">
        <div className="flex flex-wrap justify-center gap-4 px-6 mx-auto max-w-7xl">
          {["All", "Operations", "Machinery", "Management & Recognition"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as Category)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-slate-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section data-aos="fade-up" className="py-20 bg-[#f7f8fa]">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition bg-white shadow group rounded-xl hover:shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 transition bg-black/0 group-hover:bg-black/55" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 transition opacity-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <span className="text-xs text-blue-300">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactSection />

    </main>
  );
};

export default GalleryPage;
