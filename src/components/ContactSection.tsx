import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section data-aos="fade-up" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">

        <div className="grid items-start grid-cols-1 gap-20 lg:grid-cols-2">

          {/* LEFT: MAP */}
          <div className="w-full h-[420px] lg:h-[500px] rounded-xl overflow-hidden border shadow-sm">
            <iframe
              title="Pakistan Map"
              src="https://www.google.com/maps?q=Islamabad%20Pakistan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                    +92 300 1234567<br />
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