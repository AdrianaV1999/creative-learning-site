import React from "react";
import logo from "../../assets/logo.png";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-purple-100 md:px-47 text-left w-full mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-36 py-10 border-b border-gray-300">
        <div className="flex flex-col md:items-start items-center w-full">
          <img
            src={logo}
            alt="logo"
            className="w-28 lg:w-32 cursor-pointer"
          ></img>
          <p className="mt-6 text-center md:text-left text-sm text-gray-700">
            Your ultimate destination for web design tutorials, tips,
            inspiration, expert advice, and practical techniques.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-gray-800 mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-gray-700 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-gray-800 mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-gray-700">
            The latest news, articles amd resources sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-1 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-white text-gray-500 placeholder-gray-500 outline-none w-55 h-9 rounded-full px-3 text-sm"
            />
            <button className="bg-purple-800 w-28 h-9 text-white rounded-full hover:bg-purple-900 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-600">
        Copyright 2025 © Creativa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
