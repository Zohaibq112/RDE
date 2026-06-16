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
    <section data-aos="fade-up" className="py-20 overflow-hidden bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-center text-blue-700 uppercase md:text-3xl">
          Our Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center marquee whitespace-nowrap">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 mx-8"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="object-contain w-auto h-18 md:h-16"
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