import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 sm:w-20 aspect-square">
        <div className="w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-purple-400 rounded-full animate-spin bg-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
