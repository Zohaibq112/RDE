import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section data-aos="fade-up" className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/videos/drilling.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="max-w-4xl text-center text-white">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-tight tracking-wide uppercase">
            We Are Contractors and Consultants in Mining Quarrying and Exploration
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            We work across mining exploration mining execution and quarry development, 
            offering end to end consultancy and contracting services. 
            Our approach combines technical expertise operational control and industry 
            standards to ensure safe efficient and dependable project delivery.
          </p>

          {/* CTA Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-3 px-8 py-2.5 sm:px-10 sm:py-3 mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase transition border border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Know More <span className="text-lg">›</span>
          </Link>

        </div>
      </div>

    </section>
  );
};

export default Hero;
