import { useState } from "react";
import { Link } from "react-router-dom";

type MediaItem = {
  id: number;
  src: string;
  type: "image" | "video";
};

const Gallery = () => {
  const media: MediaItem[] = [
   { id: 1, src: "/gallery1.mp4", type: "video" },
    { id: 2, src: "/gallery2.mp4", type: "video" },
    { id: 3, src: "/gallery3.mp4", type: "video" },
    { id: 4, src: "/gallery4.jpeg", type: "image" },
    { id: 5, src: "/gallery5.jpeg", type: "image" },
    { id: 6, src: "/gallery6.jpeg", type: "image" },

    // Add videos like this
 
  ];

    const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-800 md:text-4xl">
            Project Gallery
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="relative overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-sm cursor-pointer group rounded-xl hover:shadow-lg"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Project"
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 transition duration-300 bg-blue-900/0 group-hover:bg-blue-900/20" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link
            to="/Gallery"
            className="px-8 py-3 font-medium text-white transition-colors duration-300 bg-blue-700 rounded-lg shadow-md hover:bg-blue-800"
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-blue-900/80"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === "image" ? (
              <img
                src={activeMedia.src}
                alt="Expanded"
                className="object-contain w-full h-auto"
              />
            ) : (
              <video
                src={activeMedia.src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;