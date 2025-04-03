import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-dashed border-blue-300 rounded-full animate-[ping_1.5s_infinite]"></div>
      </div>
    </div>
  );
};

export default Loader;
