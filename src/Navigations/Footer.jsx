// components/Footer.jsx
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Trendsetters Store
            </h3>
            <p className="text-gray-300 mb-4">
              Elevating everyday style with premium clothing collections.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  className="hover:text-orange-400 transition-colors"
                  to="/category/:id"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Trendsetters Store. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Crafted with passion for quality fashion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
