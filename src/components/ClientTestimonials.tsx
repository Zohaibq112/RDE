const ClientTestimonials = () => {
  return (
    <section data-aos="fade-up" className="py-24 bg-white">
      <div className="px-6 mx-auto text-center max-w-7xl">

        {/* Small Label */}
        <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wide text-white uppercase bg-blue-600">
          Don’t Take Our Word
        </span>

        {/* Heading */}
        <h2 className="mb-16 text-3xl font-bold text-blue-700 md:text-4xl">
          Client Testimonials
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-20 text-left md:grid-cols-3">

          {/* TESTIMONIAL 1 */}
          <Testimonial
            text="Rock Drill Engineering delivered our quarry drilling project with exceptional precision and adherence to safety standards. Their technical team demonstrated deep understanding of geological conditions and completed the work within the committed timeline."
            name="Eng. Khalid Al-Harbi"
            role="Project Manager, Saudi Mining Services"
          />

          {/* TESTIMONIAL 2 */}
          <Testimonial
            text="We engaged Rock Drill Engineering for infrastructure drilling works in the Eastern Province. Their planning, equipment quality, and on-site execution exceeded our expectations. Communication and reporting were clear throughout the project lifecycle."
            name="Mr. Abdullah Al-Mutairi"
            role="Operations Director, Gulf Infrastructure Co."
          />

          {/* TESTIMONIAL 3 */}
          <Testimonial
            text="From initial survey to final execution, the Rock Drill Engineering team operated with professionalism and accountability. Their ability to manage complex drilling operations under challenging site conditions makes them a trusted partner."
            name="Dr. Faisal Al-Qahtani"
            role="CEO, Desert Engineering & Construction"
          />

        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;

/* 🔹 SINGLE TESTIMONIAL */
const Testimonial = ({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="mx-8">
      {/* Text */}
      <p className="text-gray-500 text-[15px] leading-[28px] mb-10">
        {text}
      </p>

      {/* Name */}
      <p className="font-semibold text-blue-700">
        {name}
      </p>

      {/* Role */}
      <p className="mt-1 text-sm text-gray-500">
        {role}
      </p>
    </div>
  );
};
