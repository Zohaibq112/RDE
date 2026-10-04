const partners = [
  "/Logos/logo1.webp",
  "/Logos/logo2.png",
  "/Logos/logo3.png",
  "/Logos/logo4.png",
  "/Logos/logo5.png",
  "/Logos/logo6.png",
  "/Logos/logo7.webp",
  "/Logos/logo8.webp",
  "/Logos/logo9.png",
  "/Logos/logo10.png",
  "/Logos/logo11.png",
  "/Logos/logo12.webp",
  "/Logos/logo13.png",
];

const PartnersMarquee = () => {
  return (
    <section data-aos="fade-up" className="py-12 overflow-hidden bg-white md:py-20">
      <style>{`
        @keyframes partners-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .partners-track:hover .partners-group {
          animation-play-state: paused;
        }
        .partners-group {
          animation: partners-scroll 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-group { animation: none; }
        }
      `}</style>

      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-6 text-xl font-bold text-center text-blue-700 uppercase sm:text-2xl md:text-3xl md:mb-8">
          Our Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="partners-track flex w-full">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="partners-group flex min-w-full flex-shrink-0 items-center justify-around"
              >
                {partners.map((logo, index) => (
                  <div
                    key={`${copy}-${index}`}
                    className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
                  >
                    <img
                      src={logo}
                      alt={copy === 0 ? `Partner ${index + 1}` : ""}
                      className="object-contain w-auto h-10 sm:h-12 md:h-14 lg:h-16 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;