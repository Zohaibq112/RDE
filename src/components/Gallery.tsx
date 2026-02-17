import { useState } from "react";
import {Link} from "react-router-dom";
const Gallery = () => {
  const images = [
    { id: 1, src: "/gallery1.jpeg" },
    { id: 2, src: "/gallery2.jpeg" },
    { id: 3, src: "/gallery3.jpeg" },
    { id: 4, src: "/gallery4.jpeg" },
    { id: 5, src: "/gallery5.jpeg" },
    { id: 6, src: "/gallery6.jpeg" },
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section data-aos="fade-up" className="py-20 bg-white ">
      <div className="px-4 mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-800 md:text-4xl">
            Project Gallery
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            A professional showcase of our recent work, highlighting quality
            and precision.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img.src)}
              className="relative overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-sm cursor-pointer group rounded-xl hover:shadow-lg"
            >
              <img
                src={img.src}
                alt="Project"
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition duration-300 bg-blue-900/0 group-hover:bg-blue-900/20" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link to="/Gallery"
            className="px-8 py-3 font-medium text-white transition-colors duration-300 bg-blue-700 rounded-lg shadow-md hover:bg-blue-800"
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-blue-900/80"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Expanded"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
