import { useState } from "react";

const ContactMapForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // FIXED: handleChange function
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
    <section data-aos="fade-up" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-2">
          
          {/* LEFT: MAP */}
   <div className="h-[500px] rounded-md overflow-hidden border ml-16 w-[500px]">
  <iframe
    title="Rock Drill Engineers Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8430556538337!2d72.8305879!3d33.6871278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa3ba24dbc775%3A0xa185c63ebc53291d!2sROCK%20DRILL%20ENGINEERS%20PVT%20LIMITED!5e0!3m2!1sen!2s!4v1773141974891!5m2!1sen!2s"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
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
                className="inline-flex items-center justify-center w-full px-6 py-3 font-medium text-white transition bg-blue-600 rounded-lg shadow-md sm:w-auto hover:bg-blue-700"
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