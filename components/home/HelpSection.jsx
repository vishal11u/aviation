import React from "react";

const HelpSection = () => {
  return (
    <div className="w-full sm:w-[80%] lg:w-[70%] mx-auto text-center p-6 sm:p-10 bg-gray-50 my-7 rounded-lg">
      <p className="text-pink-600 font-semibold text-sm sm:text-base">
        &quot;Explore Your Future in Aviation – Take Flight with
        Confidence!&quot;
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 my-4">
        &quot;Not Sure Where to Start?
        <br /> We&rsquo;re Here to Help!&quot;
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-6">
        Starting a career in aviation can be overwhelming. That&rsquo;s why we
        make it easy to find a course that aligns with your goals and interests.
      </p>
      <button className="bg-pink-600 text-white font-medium py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
        Let&apos;s Connect
      </button>
    </div>
  );
};

export default HelpSection;
