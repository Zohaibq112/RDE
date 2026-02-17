import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#061A3A] to-[#02112A] text-gray-300">

      {/* TOP FOOTER */}
      <div className="grid grid-cols-1 px-6 py-20 mx-auto max-w-7xl md:grid-cols-4 gap-14">

        {/* LOGO & ABOUT */}
        <div>
          <img
            src="/logo.png"
            alt="Rock Drill Engineers"
            className="h-20 mb-6"
          />

          <p className="text-sm leading-relaxed text-gray-400">
            Rock Drill Engineers (Pvt.) Ltd. delivers specialized drilling,
            blasting, crushing, and mining services for infrastructure,
            quarrying, and industrial projects with a strong focus on safety,
            quality, and operational discipline.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-8">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaTwitter /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wide text-white uppercase">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterNav to="/about">About Us</FooterNav>
            <FooterNav to="/gallery">Gallery</FooterNav>
            <FooterNav to="/quality">Quality Assurance</FooterNav>
            <FooterNav to="/contact">Contact Us</FooterNav>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wide text-white uppercase">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            <FooterNav to="/drilling">
              Mining & Quarrying Exploration
            </FooterNav>
            <FooterNav to="/consultant">
              Consultancy & Contracting
            </FooterNav>
            <FooterNav to="/SaltDecor">
              Salt Decor
            </FooterNav>
             <FooterNav to="/SaltEdible">
              Salt Edible
            </FooterNav>
            
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wide text-white uppercase">
            Stay Updated
          </h4>

          <p className="mb-5 text-sm text-gray-400">
            Subscribe to receive company updates, project highlights, and
            industry insights.
          </p>

          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 text-sm text-gray-900 rounded focus:outline-none"
          />

          <button className="w-full py-3 mt-4 text-sm font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="py-6 border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-4 px-6 mx-auto text-sm text-gray-400 max-w-7xl md:flex-row">

          <p>
            © {new Date().getFullYear()} Rock Drill Engineers (Pvt.) Ltd. All
            rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Terms of Use
            </span>
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* 🔹 REUSABLE COMPONENTS */

const FooterNav = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <NavLink
      to={to}
      className="transition hover:text-white"
    >
      {children}
    </NavLink>
  </li>
);

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#061A3A] cursor-pointer hover:bg-blue-600 hover:text-white transition">
    {children}
  </div>
);
