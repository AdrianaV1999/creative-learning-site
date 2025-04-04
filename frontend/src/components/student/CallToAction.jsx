import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Join Our Creative Journey!
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Subscribe to our newsletter for the latest updates, exclusive content,
        and creative insights delivered straight to your inbox.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-full text-white bg-purple-800 hover:bg-purple-900 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
