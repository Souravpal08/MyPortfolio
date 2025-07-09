import React from "react";
import { socialImgs } from "../constants/index";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 md:px-10 py-8 border-t border-gray-700 mt-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Left: Name & Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-3xl font-semibold">Sourav Pal</h2>
          <div className="flex gap-4">
            {socialImgs.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.imgPath}
                  alt={link.name}
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Email */}
        <div className="text-center md:text-right">
          <p className="text-lg md:text-base"> 📧 www.souravpal2003@gmail.com </p>
         <div className="text-sm text-gray-400 mt-2">
            <p>❤️Let's grow together!</p>
            </div>
        </div>
      </div>

      {/* Bottom Centered */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {currentYear} created by Sourav Pal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
