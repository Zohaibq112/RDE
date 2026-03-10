import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import React from "react";
import{Link} from "react-router-dom";

const SaltDecorPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section data-aos="fade-up" className="relative h-[520px]">
        <img
           src="/saltproducts.png"
          className="object-cover w-full h-full"
          alt="Himalayan Salt Lamps"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 mx-auto text-white">
            <h1 className="mb-4 text-4xl font-bold">
              Himalayan Salt Lamps & Decor
            </h1>
            <p className="max-w-xl text-lg text-gray-200">
              Chemical-free, handmade Himalayan salt products crafted from
              authentic pink rock salt.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      {/* ABOUT */}



      {/* PRODUCTS */}
     {/* PRODUCTS */}
{/* PRODUCTS */}
<section data-aos="fade-up" className="py-24 bg-blue-50">
  <div className="px-6 mx-auto text-center max-w-7xl">
    <h2 className="mb-6 text-3xl font-bold text-blue-700">
      Our Products
    </h2>

    <p className="max-w-2xl mx-auto mb-10 text-slate-600">
      Download our complete Himalayan Salt product catalog including edible,
      industrial, animal, and custom packaging options.
    </p>

    <a
      href="https://drive.google.com/file/d/1saaY1Mf80jNSeSI2lLLRsAF-EtG3gSBo/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-10 py-4 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
    >
      Download Product Catalog (PDF)
      <FaArrowRight />
    </a>
  </div>
</section>



      {/* WHO WE ARE */}
    {/* WHO WE ARE */}
<section data-aos="fade-up"
  className="relative py-24 bg-center bg-cover"
  style={{ backgroundImage: "url('/images/salt-bg.jpg')" }}
>
  <div className="absolute inset-0 bg-white/90" />

  <div className="relative px-6 mx-auto max-w-7xl">
    <h2 className="text-3xl font-bold text-blue-700 mb-14">
      Who We Are
    </h2>

    <div className="grid gap-10 md:grid-cols-3">
      
      <div className="p-8 bg-white shadow-md rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Vision
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          To create premium Himalayan salt decor products by following global
          best practices and maintaining high standards of quality and
          consistency.
        </p>
      </div>

      <div className="p-8 bg-white shadow-md rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Our Aim
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          To build long-term relationships with customers by offering authentic,
          reliable, and ethically sourced Himalayan salt products.
        </p>
      </div>

      <div className="p-8 bg-white shadow-md rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-blue-700">
          Customer Requirement
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Flexible quantities, custom designs, private labeling, and export-ready
          packaging to meet global customer needs.
        </p>
      </div>

    </div>
  </div>
</section>

<section data-aos="fade-up" className="py-24 bg-white">
  <div className="max-w-4xl px-6 mx-auto text-center">
    <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
      About Himalayan Salt
    </p>

    <h2 className="mb-6 text-3xl font-bold md:text-4xl text-slate-900">
      Naturally Crafted Himalayan Salt Decor
    </h2>

    <p className="text-lg leading-relaxed text-slate-600">
      We specialize in the production of handmade Himalayan salt lamps and
      decorative products sourced from the Himalayan mountains of Pakistan.
      Each piece is naturally unique, offering a warm ambient glow and timeless
      aesthetic for homes, hotels, and workplaces.
    </p>

    <Link to="/services/SaltEdible" className="inline-flex items-center gap-2 px-8 py-3 mt-10 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
      About Himalayan Salt
      <FaArrowRight />
    </Link>
  </div>
</section>

      {/* CONTACT */}
       <section data-aos="fade-up" className="py-20 bg-white">
            <div className="px-4 mx-auto max-w-7xl">
              <div className="grid items-start grid-cols-1 gap-28 lg:grid-cols-2">
      
                {/* LEFT: MAP */}
                <div className="h-[500px] rounded-md overflow-hidden border ml-16 w-[500px]">

      
                {/* RIGHT: CONTENT */}
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
                  <h2 className="text-3xl font-bold text-gray-900">
                    Let's start a conversation
                  </h2>
      
                  <p className="max-w-md mt-4 text-gray-500">
                    We're here to help you navigate your next project. Reach out to our
                    team for a consultation or just to say hello.
                  </p>
      
                  {/* INFO LIST */}
                  <div className="mt-10 space-y-8">
      
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-blue-100 rounded-full">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Headquarters</p>
                        <p className="text-sm text-gray-500">
                          B-17 Multi Gardens<br />
                          Islamabad, Pakistan
                        </p>
                      </div>
                    </div>
      
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-blue-100 rounded-full">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email Us</p>
                        <p className="text-sm text-gray-500">
                          info@rockdrill.co<br />
                          support@rockdrill.co
                        </p>
                      </div>
                    </div>
      
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-blue-100 rounded-full">
                        <FaPhone />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Call Us</p>
                        <p className="text-sm text-gray-500">
                          +92 301 5600599<br />
                          Sun–Thu, 9am – 6pm (PKT)
                        </p>
                      </div>
                    </div>
      
                  </div>
      
                  {/* BUTTON */}
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 mt-12 font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
                    Schedule a Consultation <FaArrowRight />
                  </Link>
                </div>
      
              </div>
            </div>
          </section>

    </main>
  );
};

export default SaltDecorPage;
