import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-black p-4">
      <div className="px-6 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
          <div className="flex gap-2">
            <h1 className="text-2xl font-bold text-white mb-2">WHISPER</h1>
            <h1 className="text-2xl font-bold text-cyan-400 mb-2">TECHNOLOGY</h1>
          </div>
          <div className="flex space-x-4">
            <div className="p-2 rounded-full bg-white text-black">
              <FaLinkedinIn className="text-xl" />
            </div>
            <div className="p-2 rounded-full bg-white text-black">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="p-2 rounded-full bg-white text-black">
              <FaInstagram className="text-xl" />
            </div>
            <div className="p-2 rounded-full bg-white text-black">
              <FaXTwitter className="text-xl" />
            </div>
            <div className="p-2 rounded-full bg-white text-black">
              <FaYoutube className="text-xl" />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-lg font-semibold text-cyan-500 mb-4">SERVICES</h1>
          <ul className="space-y-2 text-gray-400">
            <li>Self-managed Teams</li>
            <li>HubSpot Services for Marketing Agencies</li>
            <li>Our HubSpot Portfolio</li>
          </ul>
        </div>

        {/* Company */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-lg font-semibold text-white mb-4">COMPANY</h1>
          <ul className="space-y-2 text-gray-400">
            <li>History</li>
            <li>Core Values</li>
            <li>Social Responsibility</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-lg font-semibold text-white mb-4">LEGAL</h1>
          <ul className="space-y-2 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Offices */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-lg font-semibold text-white mb-4">OFFICE</h1>
          <div className="text-gray-400">
            <div className="mb-4">
              <h2 className="font-semibold text-white">Headquarter</h2>
              <p>Torggata 13, 0181 Oslo, Norway</p>
              <p>(+47) 930 45 196</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-7 border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-gray-400">
        <p className="mb-4 md:mb-0">
          Copyright © 2024 WHISPER TECHNOLOGY. All Rights Reserved.{" "}
          <a href="#" className="underline text-white">
            Privacy & Cookie Policy
          </a>
        </p>
        <p>Powered by WHISPER TECHNOLOGY</p>
      </div>
    </div>
  );
};

export default Footer;
