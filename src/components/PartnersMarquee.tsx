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
];

const PartnersMarquee = () => {
  return (
    <section data-aos="fade-up" className="py-12 overflow-hidden bg-white md:py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-6 text-xl font-bold text-center text-blue-700 uppercase sm:text-2xl md:text-3xl md:mb-8">
          Our Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center marquee whitespace-nowrap">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="object-contain w-auto h-10 sm:h-12 md:h-14 lg:h-16 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;