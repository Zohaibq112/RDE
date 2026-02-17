import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* LOGO */}
        <NavLink to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="cursor-pointer h-14 md:h-20"
          />
        </NavLink>

        {/* SOCIAL ICONS */}
        <div className="hidden gap-4 md:flex">
          <IconWrapper><FaFacebookF /></IconWrapper>
          <IconWrapper><FaTwitter /></IconWrapper>
          <IconWrapper><FaLinkedinIn /></IconWrapper>
        </div>

        {/* FLAGS */}
        <div className="hidden gap-3 md:flex">
          <img src="/saudi.png" alt="Saudi" className="h-8 border rounded-sm cursor-pointer" />
          <img src="/pakistan.jpg" alt="Pakistan" className="h-8 border rounded-sm cursor-pointer" />
          <img src="/china.jpg" alt="China" className="h-8 border rounded-sm cursor-pointer" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="text-2xl text-blue-600 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* NAVBAR */}
      <nav
        className={`bg-gray-100 text-sm font-semibold transition-all duration-300
        ${menuOpen ? "max-h-[500px] opacity-100 overflow-hidden md:overflow-visible" : "max-h-0 opacity-0 overflow-hidden md:max-h-full md:opacity-100 md:overflow-visible"}`}
      >
        <ul className="flex flex-col gap-6 px-4 py-4 md:flex-row md:items-center md:gap-8 md:px-10">

          <NavItem to="/">HOME</NavItem>
          <NavItem to="/about">ABOUT US</NavItem>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {/* BUTTON */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-gray-600 transition hover:text-blue-600"
            >
              SERVICES <span className="text-xs">▾</span>
            </button>

            {/* DROPDOWN MENU */}
            <div
              className={`absolute left-0 top-full z-50 mt-2 transition-all duration-200
              ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <ul className="min-w-[280px] bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                <DropdownItem to="/Drilling">Mining & Quarrying Exploration</DropdownItem>
                <DropdownItem to="/Consultant">Consultancy & Contracting</DropdownItem>
                <DropdownItem to="/SaltDecor">Salt Decor</DropdownItem>
                <DropdownItem to="/SaltEdible">Salt Edible</DropdownItem>
              </ul>
            </div>
          </li>

          <NavItem to="/quality">QUALITY ASSURANCE</NavItem>
          <NavItem to="/gallery">GALLERY</NavItem>
          <NavItem to="/contact">CONTACT</NavItem>

        </ul>
      </nav>
    </header>
  );
};

export default Header;

/* ---------------- REUSABLE COMPONENTS ---------------- */

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2.5 text-white transition bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700">
    {children}
  </div>
);

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-600 hover:text-blue-600 transition"
      }
    >
      {children}
    </NavLink>
  </li>
);

const DropdownItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <NavLink
      to={to}
      className="block px-5 py-3 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
    >
      {children}
    </NavLink>
  </li>
);
