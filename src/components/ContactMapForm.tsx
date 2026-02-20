import { useState } from "react";

const ContactMapForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Connect API or email service here
  };

  return (
    <section data-aos="fade-up" className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-2">
          
          {/* LEFT: MAP */}
          <div className="w-full h-[300px] sm:h-[380px] lg:h-[480px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* RIGHT: FORM */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Let’s start a conversation
            </h2>

            <p className="max-w-md mt-4 text-gray-500">
              We’re here to help you with your next project. Fill out the form
              and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-lg outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 font-medium text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMapForm;
