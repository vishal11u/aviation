import React from "react";

const HelpSection = () => {
  return (
    <div className="w-full mx-auto h-full text-center p-6 sm:p-10 bg-gray-50 my-10 md:space-y-6 rounded-lg lg:max-w-7xl">
      {/* Tagline */}
      <p className="text-pink-600 font-medium text-base sm:text-lg md:text-[16px]">
        College /University
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[65px] font-bold text-gray-900 leading-tight">
        &quot;Not Sure Where to Start? <br />
        <span className="block pt-3">We&rsquo;re Here to Help!&quot;</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-[20px] mt-6 mb-8">
        We get it. Finding the right college/university can be really difficult.
        Check out our <br/> college comparator or talk to our experts for direction.
      </p>

      {/* CTA Button */}
      <button className="bg-[#D4619E] text-white text-lg md:text-[14px] font-medium py-1.5 px-8 rounded hover:bg-pink-700 transition duration-300">
        Let&apos;s Connect
      </button>
    </div>
  );
};

export default HelpSection;
