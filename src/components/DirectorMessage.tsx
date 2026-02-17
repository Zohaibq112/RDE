const DirectorMessage = () => {
  return (
    <section data-aos="fade-up" className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[380px]">
              <img
                src="/CEO.jpeg"
                alt="Qazi Muhammad Adnan"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl border border-gray-200"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl">

            {/* Small Top Line */}
            <div className="mb-4 h-[3px] w-16 bg-blue-600" />

            {/* Heading */}
            <h2 className="text-2xl font-bold tracking-wide text-blue-600 uppercase">
              Message from CEO
            </h2>

            {/* Divider */}
            <div className="w-full h-px my-6 bg-gray-200" />

            <p className="text-[15px] leading-7 text-gray-600">
              At our company, we are committed to delivering reliable and efficient drilling
              solutions that meet the evolving demands of industrial and infrastructure
              projects. Our focus remains on precision, safety, and timely execution across
              all project phases.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-gray-600">
              Through continuous innovation, skilled teams, and modern drilling technologies,
              we strive to exceed client expectations while maintaining the highest standards
              of operational excellence and project management.
            </p>

            <div className="mt-10">
              <p className="text-lg font-semibold text-gray-900">
                Qazi Muhammad Adnan
              </p>
              <p className="mt-1 text-sm tracking-wider text-gray-500 uppercase">
                Chief Operating Officer
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
