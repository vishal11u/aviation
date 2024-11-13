import React from "react";

const HelpSection = () => {
  return (
    <div className="w-full mx-auto h-full text-center p-6 sm:p-10 bg-gray-50 my-10 md:space-y-6 rounded-lg lg:max-w-7xl">
      {/* Tagline */}
      <p className="text-pink-600 font-semibold text-base sm:text-lg md:text-xl">
        &quot;Explore Your Future in Aviation – Take Flight with Confidence!&quot;
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
        &quot;Not Sure Where to Start? <br />
        <span className="block pt-3">We&rsquo;re Here to Help!&quot;</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 mb-8">
        Starting a career in aviation can be overwhelming. That&rsquo;s why we
        make it easy to find a <br className="hidden md:block" /> course that
        aligns with your goals and interests.
      </p>

      {/* CTA Button */}
      <button className="bg-pink-600 text-white text-lg md:text-xl font-medium py-3 px-8 rounded-md hover:bg-pink-700 transition duration-300">
        Let&apos;s Connect
      </button>
    </div>
  );
};

export default HelpSection;
