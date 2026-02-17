const partners = [
  "FWO",
  "POGC",
  "ICC",
  "Wah Noble",
  "Biafo",
  "Alnwassy Rock",
  "China Gazoba",
  "SINO Hydro",
  "Gharib Wal Cement",
  "DG Cement",
  "Koh Suliman Quarries",
  "NLC",
];

const PartnersMarquee = () => {
  return (
    <section data-aos="fade-up" className="py-20 overflow-hidden bg-white">
      <div className="px-4 mx-auto max-w-7xl">

        {/* Title */}
        <h2 className="mb-8 text-2xl font-bold text-center text-blue-700 uppercase md:text-3xl">
          Our Partners
        </h2>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center marquee whitespace-nowrap ">

            {[...partners, ...partners].map((partner, index) => (
              <span
                key={index}
                className="flex items-center gap-6 mx-8 text-xl font-semibold tracking-wide text-gray-700 uppercase"
              >
                {partner}
                <span className="text-base font-bold text-gray-500">•</span>
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersMarquee;
