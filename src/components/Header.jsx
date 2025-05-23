import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "team", label: "Team" },
    { id: "partners", label: "Partners" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <header className=" w-full fixed top-0 left-0 w-auto bg-cyan-800 shadow-md z-50  rounded-t-2xl">
  <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
    {/* Logo */}
    <RouterLink to="/">
      <img src={Logo} alt="Logo" className="logo w-32 sm:w-40" />
    </RouterLink>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-4 lg:space-x-6">
      {navItems.map((item) =>
        isHomePage ? (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-sm lg:text-base text-gray-100 hover:text-blue-300 cursor-pointer transition-colors"
          >
            {item.label}
          </ScrollLink>
        ) : (
          <RouterLink
            key={item.id}
            to={`/#${item.id}`}
            className="text-sm lg:text-base text-gray-100 hover:text-blue-300 transition-colors"
          >
            {item.label}
          </RouterLink>
        )
      )}
    </nav>

    {/* Mobile Toggle */}
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-md bg-cyan-700 text-white hover:bg-cyan-600 shadow-sm transition"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Nav */}
  {isMenuOpen && (
    <div className="md:hidden bg-cyan-700 px-4 py-4 border-t border-cyan-900 space-y-4">
      {navItems.map((item) =>
        isHomePage ? (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-100 hover:text-blue-300 transition-colors"
          >
            {item.label}
          </ScrollLink>
        ) : (
          <RouterLink
            key={item.id}
            to={`/#${item.id}`}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-100 hover:text-blue-300 transition-colors"
          >
            {item.label}
          </RouterLink>
        )
      )}
    </div>
  )}
</header>

  );
};

export default Header;
