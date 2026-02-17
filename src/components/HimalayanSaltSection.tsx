const HimalayanSaltSection = () => {
  return (
    <section data-aos="fade-up" className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[420px]">
        <img
          src="/public/Himalayan.png" // replace with your image path
          alt="Premium Himalayan Salt"
          className="object-cover w-full h-full"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center px-12">
          <h1 className="font-serif text-4xl leading-tight text-white md:text-5xl">
            Premium <br /> Himalayan Salt
          </h1>
        </div>

        {/* Chat Box */}
        <div className="absolute max-w-xs px-4 py-3 text-sm text-gray-700 bg-white rounded shadow-md bottom-6 right-6">
          Welcome to our site, if you need help simply reply to this message,
          we are online and ready to help.
        </div>
      </div>

      {/* Content Section */}
      <div className="grid items-center max-w-5xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
        <div />

        <div>
          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            Salt belongs to one of the most successful investment groups in
            Pakistan. Our group also endeavors in garment and rice export,
            real estate development and entertainment industry.
          </p>

          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            Our Himalayan Salt production is a fully automatic process, as we
            have installed stainless steel machinery with end to end solution
            from washing to drying and separating the salt. We take pride in
            our unique tailor-made plant which has no analogs.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
            About Himalayan Salt
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HimalayanSaltSection;
