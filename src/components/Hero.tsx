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
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-4xl text-center text-white">

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-wide uppercase md:text-4xl sm:text-xl">
            We Are Contractors and Consultants in Mining Quarrying and Exploration<br />
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
          We work across mining exploration mining execution and quarry development, offering end to end consultancy and contracting services. Our approach combines technical expertise operational control and industry standards to ensure safe efficient and dependable project delivery.
          </p>

          {/* CTA Button */}


<Link
  to="/about"
  className="inline-flex items-center gap-3 px-10 py-3 mt-10 text-sm font-semibold tracking-wider text-blue-400 uppercase transition border border-blue-600 hover:bg-blue-600 hover:text-white"
>
  Know More <span className="text-lg">›</span>
</Link>





        </div>
      </div>

    </section>
  );
};

export default Hero;
