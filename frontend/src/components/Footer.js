// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 relative bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              FAQ
            </a>
          </div>
          <div>
            <p className="text-gray-300">© 2024 Your E-Commerce Store</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
