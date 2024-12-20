import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Facilities", "Contact", "About"];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-green-600 text-white shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img className="p-0 w-40 h-auto" src={assets.logo} alt="Logo" />

        {/* Hamburger Icon for Mobile View */}
        <button
          className="lg:hidden block text-white text-3xl"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="group relative overflow-hidden">
              <Link
                to={
                  item === "Contact"
                    ? "/contactus"
                    : item === "Facilities"
                    ? "/facilities"
                    : item === "Home" 
                    ? "/"
                    : item === "About"
                    ? '/about'
                    : "#"
                } // Conditional routing for "Contact" and "Facilities"
                className="block text-lg font-semibold group-hover:text-yellow-400 transition duration-300"
              >
                {item.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 75}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-green-600 text-white py-4`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={
                  item === "Contact"
                    ? "/contactus"
                    : item === "Facilities"
                    ? "/facilities"
                    : "#"
                } // Conditional routing for "Contact" and "Facilities"
                className="block text-lg font-semibold group-hover:text-yellow-400 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Close the menu when an item is clicked
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
