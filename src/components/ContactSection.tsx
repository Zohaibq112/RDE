import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section data-aos="fade-up" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">

        <div className="grid items-start grid-cols-1 gap-20 lg:grid-cols-2">

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

          {/* RIGHT: CONTENT */}
          <div>

            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Contact Us
            </p>

            <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
              Let’s Start a Conversation
            </h2>

            <p className="max-w-md mt-5 leading-relaxed text-slate-600">
              Whether you’re planning a new project or need expert guidance,
              our team is ready to assist you with reliable engineering
              solutions.
            </p>

            {/* INFO LIST */}
            <div className="mt-12 space-y-8">

              {/* Address */}
              <InfoItem
                icon={<FaMapMarkerAlt />}
                title="Head Office"
                text={
                   <>
                    B-17 Multi Gardens<br />
                    Islamabad, Pakistan
                  </>
                }
              />

              {/* Email */}
              <InfoItem
                icon={<FaEnvelope />}
                title="Email Us"
                text={
                  <>
                    info@rockdrill.pk<br />
                    support@rockdrill.pk
                  </>
                }
              />

              {/* Phone */}
              <InfoItem
                icon={<FaPhone />}
                title="Call Us"
                text={
                  <>
                    +92 301 5600599<br />
                    Mon–Sat, 9am – 6pm (PKT)
                  </>
                }
              />

            </div>

            {/* CTA */}
            <div className="mt-14">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white transition bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
              >
                Schedule a Consultation <FaArrowRight />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

/* ---------- REUSABLE INFO ITEM ---------- */

const InfoItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) => (
  <div className="flex items-start gap-5">
    <div className="flex items-center justify-center text-blue-600 bg-blue-100 rounded-full w-11 h-11">
      {icon}
    </div>
    <div>
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  </div>
);