import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <section data-aos="fade-up" className="bg-[#f7f9fc] py-20 ">
      <div className="px-4 mx-8 max-w-7xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Phone */}
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Phone"
            lines={[
              "+966 55 954 5820"
            ]}
          />

          {/* Email */}
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            lines={[
              "info@yourcompany.com",
              "support@yourcompany.com",
            ]}
          />

          {/* Address */}
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            lines={[
              "Industrial Area, Phase 2",
              "Islamabad, Pakistan",
            ]}
          />

        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
const ContactCard = ({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) => {
  return (
    <div
      className="p-10 transition-all duration-300 ease-out bg-white border border-gray-200 group rounded-2xl hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center mx-auto mb-6 text-xl text-white transition-transform duration-300 ease-out bg-blue-600 rounded-full h-14 w-14 group-hover:scale-110 group-hover:rotate-3"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-semibold text-center text-gray-900">
        {title}
      </h3>

      {/* Content */}
      <div className="space-y-2 text-center text-gray-600">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};
