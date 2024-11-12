import React from "react";

const AviationJobsSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 md:p-10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="max-w-full md:max-w-lg">
          <h3 className="text-xs md:text-sm font-semibold text-white mb-2">
            Top Recruiter
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Aviation Jobs in India
          </h2>
          <p className="text-gray-200 mt-4 text-sm md:text-base">
            The aviation sector is one of the fastest-growing industries,
            offering numerous job opportunities in various roles like pilots,
            aircraft maintenance engineers, air traffic controllers, cabin crew,
            ground staff, and airline operations.
          </p>
        </div>

        {/* Right Section with Company Names */}
        <div className="flex flex-col gap-4 text-gray-300 text-opacity-75">
          <span className="text-4xl md:text-5xl text-center transition-all animate-bounce lg:text-6xl font-bold text-white">
            IndiGo
          </span>
          <div className="flex flex-wrap gap-4 text-sm md:text-lg">
            <span className="text-xl">Spice Jet</span>
            <span className="text-xl">Air India Charters Ltd</span>
            <span className="text-xl">Air Heritage</span>
            <span className="text-xl">Alliance Air</span>
            <span className="text-xl">Jet Airways</span>
            <span className="text-xl">Air Deccan</span>
          </div>
        </div>
      </div>

      {/* Background airplane icon */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] text-blue-500 opacity-10"
        >
          <path d="M21 16v-4a1 1 0 0 0-1-1h-6V7h3a1 1 0 0 0 0-2h-3V3a1 1 0 0 0-2 0v2H8a1 1 0 0 0 0 2h3v4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v4a1 1 0 0 0 2 0v-4h6a1 1 0 0 0 1-1z" />
        </svg>
      </div>
    </div>
  );
};

export default AviationJobsSection;
