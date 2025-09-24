import React, { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import image1 from "../assets/12.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="px-4 py-2">
            <img
              src={image1}
              alt="Trendsetters Store"
              className="h-8 md:h-10 object-contain transition-transform hover:scale-105"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <a
            href="#shop"
            className="hover:text-orange-600 transition-colors font-medium"
          >
            Shop
          </a>
          <a
            href="#lookbook"
            className="hover:text-orange-600 transition-colors font-medium"
          >
            Lookbook
          </a>
          <a
            href="#contact"
            className="hover:text-orange-600 transition-colors font-medium"
          >
            Contact
          </a>
        </nav> */}

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <FaTiktok size={18} />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-orange-100 px-4 py-3 space-y-3">
          <a
            href="#shop"
            className="block py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Shop
          </a>
    
          <a
            href="#contact"
            className="block py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
