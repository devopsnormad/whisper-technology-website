import React from "react";
import { Link } from "react-router-dom";
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
            <Link
              to="/"
              className="text-lg sm:text-2xl font-bold text-white mb-2"
            >
              WHISPER
            </Link>
            <Link
              to="/"
              className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2"
            >
              TECHNOLOGY
            </Link>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaFacebookF className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaInstagram className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaXTwitter className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-cyan-500 mb-4">
            SERVICES
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/services/self-managed-teams">Self-managed Teams</Link>
            </li>
            <li>
              <Link to="/services/hubspot-marketing-agencies">
                HubSpot Services for Marketing Agencies
              </Link>
            </li>
            <li>
              <Link to="/services/our-hubspot-portfolio">
                Our HubSpot Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            COMPANY
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/company/history">History</Link>
            </li>
            <li>
              <Link to="/company/core-values">Core Values</Link>
            </li>
            <li>
              <Link to="/company/social-responsibility">
                Social Responsibility
              </Link>
            </li>
            <li>
              <Link to="/company/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            LEGAL
          </h1>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <Link to="/legal/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/legal/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/legal/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* Offices */}
        <div className="sm:col-span-1 lg:col-span-1">
          <h1 className="text-md sm:text-lg font-semibold text-white mb-4">
            OFFICE
          </h1>
          <div className="text-sm sm:text-base text-gray-400">
            <div className="mb-4">
              <h2 className="font-semibold text-white">Headquarter</h2>
              <p>Rayfield, Jos, Nigeria</p>
              <p>(+234) 9032621846</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-7 border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm sm:text-base text-gray-400">
        <p className="mb-4 md:mb-0">
          Copyright © 2024 WHISPER TECHNOLOGY. All Rights Reserved.{" "}
          <Link
            to="/legal/privacy-cookie-policy"
            className="underline text-white"
          >
            Privacy & Cookie Policy
          </Link>
        </p>
        <p>Powered by WHISPER TECHNOLOGY</p>
      </div>
    </div>
  );
};

export default Footer;
